import { Injectable } from "@nestjs/common";
import { throwNotFoundError } from "src/common/errors";
import { AlunoRepository } from "../repository/alunos.repository";
import { ALUNOS_CONSTANTS } from "../constants/alunos.constants";

@Injectable()
export class DeleteAlunoService {
    constructor(
        private alunoRepository: AlunoRepository        
    ) {}

    async execute(id: number) {        
        
        const aluno = await this.alunoRepository.get().findOne({
            where: { 'id': id }
        })
        if (!aluno)
            throwNotFoundError(ALUNOS_CONSTANTS.ALUNO_NAO_ENCONTRADO)        

        const alunoExcluido = await this.alunoRepository.delete('id', aluno)                
        
        return alunoExcluido
    }
}