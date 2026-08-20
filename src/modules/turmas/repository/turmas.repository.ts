import * as fs from "fs";
import * as path from "path";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepository, PrepareQueryCustom } from "src/core/repository";
import { TurmaEntity } from "../entities/turmas.entity";

@Injectable()
export class TurmaRepository extends BaseRepository<TurmaEntity> {    
    constructor(
        @InjectRepository(TurmaEntity)        
        turmas: Repository<TurmaEntity>
    ) {
        super(turmas)
    }

    async listarTurmas(): Promise<any> {
        const query = fs.readFileSync(path.join(__dirname, './queries/ListagemTurmas.sql'), 'utf8');        
        const consulta = await new PrepareQueryCustom(query, {}).prepare();
        const retorno = await this.executeQuery(consulta)
        return retorno
    }

    async listarTurmasAlunos(turma: number): Promise<any> {
        const query = fs.readFileSync(path.join(__dirname, './queries/ListagemTurmasAlunos.sql'), 'utf8');        
        const queryParams = {
            idTurma: turma
        }
        const consulta = await new PrepareQueryCustom(query, queryParams).prepare();
        const retorno = await this.executeQuery(consulta)
        return retorno
    }
}