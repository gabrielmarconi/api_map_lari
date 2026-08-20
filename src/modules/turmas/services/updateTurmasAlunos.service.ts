import { Injectable } from "@nestjs/common";
import { throwNotFoundError } from "src/common/errors";
import { v4 as uuid } from "uuid";
import { TurmaAlunoRepository } from "../repository/turmasAlunos.repository";
import { TurmaRepository } from "../repository/turmas.repository";
import { AlunoRepository } from "src/modules/alunos/repository/alunos.repository";
import { CreateTurmasAlunosDTO } from "../dto/createTurmasAlunos.dto";
import { TURMASALUNOS_CONSTANTS } from "../constants/turmasAlunos.constants";
import { TurmaAlunoEntity } from "../entities/turmasAlunos.entity";
import { TURMAS_CONSTANTS } from "../constants/turmas.constants";
import { ALUNOS_CONSTANTS } from "src/modules/alunos/constants/alunos.constants";

@Injectable()
export class UpdateTurmasAlunosService {
    constructor(
        private turmasAlunosRepository: TurmaAlunoRepository,
        private turmaRepository: TurmaRepository,
        private alunoRepository: AlunoRepository
    ) {}

    async execute(id: number, data: CreateTurmasAlunosDTO) {
        const turmaAlunoAlteracao = await this.turmasAlunosRepository.get().findOne({
            where: { 'id': id }
        })
        if (!turmaAlunoAlteracao)
            throwNotFoundError(TURMASALUNOS_CONSTANTS.TURMAALUNO_NAO_ENCONTRADA)
        const turmaAluno = new TurmaAlunoEntity(data)        
        turmaAluno.id = turmaAlunoAlteracao.id

        // verifica se a turma existe                
        const turma = await this.turmaRepository.get().find({
            where: { 'id': data.idTurma }
        })
        if (!turma) 
            throwNotFoundError(TURMAS_CONSTANTS.TURMA_NAO_ENCONTRADA)

        // verifica se o aluno existe
        const aluno = await this.alunoRepository.get().find({
            where: { 'id': data.idAluno }
        })
        if (!aluno)
            throwNotFoundError(ALUNOS_CONSTANTS.ALUNO_NAO_ENCONTRADO)

        return await this.turmasAlunosRepository.update('id', turmaAluno)
    }
}