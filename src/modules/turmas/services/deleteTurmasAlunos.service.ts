import { Injectable } from "@nestjs/common";
import { throwNotFoundError } from "src/common/errors";
import { TurmaAlunoRepository } from "../repository/turmasAlunos.repository";
import { TURMASALUNOS_CONSTANTS } from "../constants/turmasAlunos.constants";

@Injectable()
export class DeleteTurmasAlunosService {
    constructor(
        private turmaAlunoRepository: TurmaAlunoRepository
    ) {}

    async execute(id: number) {
        const turmaAlunoExclusao = await this.turmaAlunoRepository.get().find({
            where: { 'id': id }
        })
        if (!turmaAlunoExclusao)
            throwNotFoundError(TURMASALUNOS_CONSTANTS.TURMAALUNO_NAO_ENCONTRADA)
        return await this.turmaAlunoRepository.delete('id', turmaAlunoExclusao[0])
    }
}