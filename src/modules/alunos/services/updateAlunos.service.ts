import { Injectable } from "@nestjs/common";
import { throwNotFoundError } from "src/common/errors";
import { USUARIO_CONSTANTS } from "src/modules/usuarios/constants/usuarios.constants";
import { UsuarioRepository } from "src/modules/usuarios/repository/usuarios.repository";
import { AlunoRepository } from "../repository/alunos.repository";
import { CreateAlunosDTO } from "../dto/createAlunos.dto";
import { ALUNOS_CONSTANTS } from "../constants/alunos.constants";
import { AlunoEntity } from "../entities/alunos.entity";

@Injectable()
export class UpdateAlunoService {
    constructor(
        private alunoRepository: AlunoRepository  
    ) {}

    async execute(id: number, data: CreateAlunosDTO) {

        const alunoAlteracao = await this.alunoRepository.get().findOne({
            where: { 'id': id }
        })
        if (!alunoAlteracao)
            throwNotFoundError(ALUNOS_CONSTANTS.ALUNO_NAO_ENCONTRADO)
        const aluno = new AlunoEntity(data)
        aluno.id = alunoAlteracao.id        

        return await this.alunoRepository.update('id', aluno)
    }
}