import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepository } from "src/core/repository";
import { TurmaAlunoEntity } from "../entities/turmasAlunos.entity";

@Injectable()
export class TurmaAlunoRepository extends BaseRepository<TurmaAlunoEntity> {    
    constructor(
        @InjectRepository(TurmaAlunoEntity)        
        turmasAlunos: Repository<TurmaAlunoEntity>
    ) {
        super(turmasAlunos)
    } 
}