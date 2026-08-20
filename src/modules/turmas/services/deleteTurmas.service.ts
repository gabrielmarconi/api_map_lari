import { Injectable } from "@nestjs/common";
import { throwNotFoundError } from "src/common/errors";
import { TurmaRepository } from "../repository/turmas.repository";
import { TURMAS_CONSTANTS } from "../constants/turmas.constants";

@Injectable()
export class DeleteTurmaService {
    constructor(
        private turmaRepository: TurmaRepository
    ) {}

    async execute(id: number) {        

        const turma = await this.turmaRepository.get().findOne({
            where: { 'id': id }
        })
        if (!turma)
            throwNotFoundError(TURMAS_CONSTANTS.TURMA_NAO_ENCONTRADA)        

        const turmaExcluida = await this.turmaRepository.delete('id', turma)            

        return turmaExcluida
    }
}