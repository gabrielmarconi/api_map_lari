import { Injectable } from "@nestjs/common";
import { AlunoRepository } from "../repository/alunos.repository";
import { CreateAlunosDTO } from "../dto/createAlunos.dto";
import { AlunoEntity } from "../entities/alunos.entity";

@Injectable()
export class CreateAlunoService {
    constructor(
        private alunoRepository: AlunoRepository
    ) {}

    async execute(data: CreateAlunosDTO): Promise<AlunoEntity> {
        const aluno = new AlunoEntity(data)                

        return await this.alunoRepository.save(aluno)
    }
}