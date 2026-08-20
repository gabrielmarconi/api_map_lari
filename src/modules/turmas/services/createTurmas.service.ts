import { Injectable } from "@nestjs/common";
import { TurmaRepository } from "../repository/turmas.repository";
import { CreateTurmasDTO } from "../dto/createTurmas.dto";
import { TurmaEntity } from "../entities/turmas.entity";

@Injectable()
export class CreateTurmaService {
    constructor(
        private turmaRepository: TurmaRepository
    ) {}

    async execute(data: CreateTurmasDTO): Promise<TurmaEntity> {
        const turma = new TurmaEntity(data)                

        return await this.turmaRepository.save(turma)
    }
}