import * as fs from "fs";
import * as path from "path";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepository, PrepareQueryCustom } from "src/core/repository";
import { AlunoEntity } from "../entities/alunos.entity";

@Injectable()
export class AlunoRepository extends BaseRepository<AlunoEntity> {
    constructor(
        @InjectRepository(AlunoEntity)        
        alunos: Repository<AlunoEntity>
    ) {
        super(alunos)
    }    

    async listarAlunos(id: number): Promise<any> {
        const query = fs.readFileSync(path.join(__dirname, './queries/ListagemAlunos.sql'), 'utf8');        
        const queryParams = {
            todosAlunos: id > 0 ? 1 : 0,
            idAluno: id
        }
        const consulta = await new PrepareQueryCustom(query, queryParams).prepare();
        const retorno = await this.executeQuery(consulta)
        return retorno
    }
}