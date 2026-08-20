import { Injectable } from "@nestjs/common";
import { TurmaRepository } from "../repository/turmas.repository";
import { GetListagemTurmasReponse } from "../models/getListagemTurmas.model";

@Injectable()
export class GetListagemTurmasService {
    constructor(
        private turmasRepository: TurmaRepository
    ) {}

    async execute():Promise<GetListagemTurmasReponse[]> {

        const retorno: Array<GetListagemTurmasReponse> = []
        
        const turmas = await this.turmasRepository.listarTurmas();        
        
        const listagemTurmas = new GetListagemTurmasReponse()
        
        listagemTurmas.Registros = turmas
        
        retorno.push(listagemTurmas)
        
        return retorno
    }
}