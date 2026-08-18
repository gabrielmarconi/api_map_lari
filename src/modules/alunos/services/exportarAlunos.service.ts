import { IArquivo } from "src/shared/IArquivo";
import { ajustarColunasExcel } from "src/shared/rotinas.excel";
import * as ExcelJS from 'exceljs';
import { Injectable } from "@nestjs/common";
import { AlunoRepository } from "../repository/alunos.repository";

@Injectable()
export class ExportarAlunosService {
    constructor(
        private alunosRepository: AlunoRepository
    ) { }

    async execute(): Promise<IArquivo> {

        
        let buscaAlunos = await this.alunosRepository.get().find()                       
    
        let filename = ""
        let content = ""

        if (buscaAlunos.length === 0) {
            return {
                filename,
                encoding: '',
                content
            }
        }
        let row = 1

        const workbook = new ExcelJS.Workbook();
        const workSheet = workbook.addWorksheet("Arquivo_Exportacao_de_Alunos")
                
        workSheet.addRow([
            'Id',
            'Nome'                    
        ]).font = { bold: true };

        for (const item of buscaAlunos) {
            workSheet.addRow([
                item.id ? item.id : '',
                item.nome ? item.nome : '',                
            ])
        }

        ajustarColunasExcel(workSheet)

        const xlsx = await workbook.xlsx.writeBuffer() as Buffer

        filename = "Arquivo_Exportacao_de_Alunos.xlsx"
        content = xlsx.toString("base64")

        return {
            filename,
            encoding: "base64",
            content

        } 
    }
}