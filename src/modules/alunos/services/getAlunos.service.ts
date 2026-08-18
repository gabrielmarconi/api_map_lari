import { Injectable } from "@nestjs/common";
import { AlunoRepository } from "../repository/alunos.repository";

@Injectable()
export class GetAlunoService {
    constructor(
        private alunoRepository: AlunoRepository
    ) {}

    async execute(propertieName?: string, propertieValue?: any) {
        let clausulaWhere = {}
        clausulaWhere[propertieName] = propertieValue
        return await this.alunoRepository.get().find({
            where: clausulaWhere
        })
    }
}