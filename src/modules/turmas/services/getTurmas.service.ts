import { Injectable } from "@nestjs/common";
import { TurmaRepository } from "../repository/turmas.repository";

@Injectable()
export class GetTurmaService {
    constructor(
        private turmaRepository: TurmaRepository
    ) {}

    async execute(propertieName?: string, propertieValue?: any) {
        let clausulaWhere = {}
        clausulaWhere[propertieName] = propertieValue
        return await this.turmaRepository.get().find({
            where: clausulaWhere
        })
    }
}