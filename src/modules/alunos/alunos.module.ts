import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AlunoEntity } from "./entities/alunos.entity";
import { AlunoRepository } from "./repository/alunos.repository";
import { CreateAlunoService, DeleteAlunoService, ExportarAlunosService, GetAlunoService, GetListagemAlunosService, UpdateAlunoService } from "./services";
import { AlunosController } from "./alunos.controller";

@Module({
    imports: [        
        TypeOrmModule.forFeature([AlunoEntity])
    ],
    exports: [
        AlunoRepository,
        TypeOrmModule
    ],
    controllers: [AlunosController],
    providers: [
        AlunoRepository,        
        CreateAlunoService,
        GetAlunoService,
        DeleteAlunoService,
        UpdateAlunoService,
        ExportarAlunosService,
        GetListagemAlunosService
    ]
})
export class AlunosModule {}