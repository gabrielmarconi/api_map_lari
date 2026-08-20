import { Injectable } from "@nestjs/common";
import { throwNotFoundError } from "src/common/errors";
import { TurmaRepository } from "../repository/turmas.repository";
import { CreateTurmasDTO } from "../dto/createTurmas.dto";
import { TURMAS_CONSTANTS } from "../constants/turmas.constants";
import { TurmaEntity } from "../entities/turmas.entity";

@Injectable()
export class UpdateTurmaService {
    constructor(
        private turmaRepository: TurmaRepository
    ) {}

    async execute(id: number, data: CreateTurmasDTO) {

        const turmaAlteracao = await this.turmaRepository.get().findOne({
            where: { 'id': id }
        })
        if (!turmaAlteracao)
            throwNotFoundError(TURMAS_CONSTANTS.TURMA_NAO_ENCONTRADA)
        const turma = new TurmaEntity(data)
        turma.id = turmaAlteracao.id        

        return await this.turmaRepository.update('id', turma)
    }
}