import { Injectable } from "@nestjs/common";
import { AlunoRepository } from "../repository/alunos.repository";
import { GetListagemAlunosReponse } from "../models/getListagemAlunos.model";

@Injectable()
export class GetListagemAlunosService {
    constructor(
        private alunosRepository: AlunoRepository
    ) {}

    async execute(propertieName?: string, propertieValue?: number):Promise<GetListagemAlunosReponse[]> {

        const retorno: Array<GetListagemAlunosReponse> = []

        let idAluno = 0
        if (propertieName && propertieValue) {
            if ((propertieName == 'id') && (propertieValue > 0))
                idAluno = propertieValue
        }
        
        const alunos = await this.alunosRepository.listarAlunos(idAluno);        
        
        const listagemAlunos = new GetListagemAlunosReponse()
        
        listagemAlunos.Registros = alunos
        
        retorno.push(listagemAlunos)
        
        return retorno
    }
}