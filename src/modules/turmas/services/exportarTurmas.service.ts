import { IArquivo } from "src/shared/IArquivo";
import { ajustarColunasExcel } from "src/shared/rotinas.excel";
import * as ExcelJS from 'exceljs';
import { Injectable } from "@nestjs/common";
import { TurmaRepository } from "../repository/turmas.repository";

@Injectable()
export class ExportarTurmasService {
    constructor(
        private turmasRepository: TurmaRepository
    ) { }

    async execute(): Promise<IArquivo> {

        
        let buscaTurmas = await this.turmasRepository.get().find()
                          
        let filename = ""
        let content = ""

        if (buscaTurmas.length === 0) {
            return {
                filename,
                encoding: '',
                content
            }
        }
        let row = 1

        const workbook = new ExcelJS.Workbook();
        const workSheet = workbook.addWorksheet("Arquivo_Exportacao_de_Turmas")
                
        workSheet.addRow([
            'Id',
            'Nome'                    
        ]).font = { bold: true };

        for (const item of buscaTurmas) {
            workSheet.addRow([
                item.id ? item.id : '',
                item.nome ? item.nome : '',                
            ])
        }

        ajustarColunasExcel(workSheet)

        const xlsx = await workbook.xlsx.writeBuffer() as Buffer

        filename = "Arquivo_Exportacao_de_Turmas.xlsx"
        content = xlsx.toString("base64")

        return {
            filename,
            encoding: "base64",
            content

        } 
    }
}