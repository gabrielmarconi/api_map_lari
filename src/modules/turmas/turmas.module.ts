import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TurmaEntity } from "./entities/turmas.entity";
import { TurmaRepository } from "./repository/turmas.repository";
import { CreateTurmasAlunosService, CreateTurmaService, DeleteTurmasAlunosService, DeleteTurmaService, ExportarTurmasService, GetListagemTurmasAlunosService, GetListagemTurmasService, GetTurmaService, UpdateTurmasAlunosService, UpdateTurmaService } from "./services";
import { TurmasController } from "./turmas.controller";
import { AlunosModule } from "../alunos/alunos.module";
import { TurmaAlunoRepository } from "./repository/turmasAlunos.repository";
import { AlunoRepository } from "../alunos/repository/alunos.repository";

@Module({
    imports: [  
        TurmasModule,
        AlunosModule,              
        TypeOrmModule.forFeature([TurmaEntity])        
    ],
    exports: [
        TurmaRepository, 
        TurmaAlunoRepository,                       
        TypeOrmModule
    ],
    controllers: [TurmasController],
    providers: [        
        TurmaRepository,
        AlunoRepository,
        TurmaAlunoRepository,                                
        CreateTurmaService,
        GetTurmaService,
        DeleteTurmaService,
        UpdateTurmaService,
        ExportarTurmasService,
        GetListagemTurmasService,
        CreateTurmasAlunosService,
        DeleteTurmasAlunosService,
        UpdateTurmasAlunosService,
        GetListagemTurmasAlunosService
    ]
})
export class TurmasModule {}