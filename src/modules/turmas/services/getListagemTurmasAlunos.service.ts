import { Injectable } from "@nestjs/common";
import { TurmaRepository } from "../repository/turmas.repository";
import { GetListagemTurmasAlunosResponse } from "../models/turmaAluno.model";

@Injectable()
export class GetListagemTurmasAlunosService {
    constructor(
        private turmasRepository: TurmaRepository
    ) {}

    async execute(id: number):Promise<GetListagemTurmasAlunosResponse[]> {

        const retorno: Array<GetListagemTurmasAlunosResponse> = []
        
        const turmasAlunos = await this.turmasRepository.listarTurmasAlunos(id);        
        
        const listagemTurmasAlunos = new GetListagemTurmasAlunosResponse()
        
        listagemTurmasAlunos.Registros = turmasAlunos
        
        retorno.push(listagemTurmasAlunos)
        
        return retorno
    }
}