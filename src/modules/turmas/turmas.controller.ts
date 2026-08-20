import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiDataResponse, ApiErrorResponse } from "src/common/decorators";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CreateTurmaService, DeleteTurmaService, ExportarTurmasService, GetListagemTurmasAlunosService, GetListagemTurmasService, GetTurmaService, UpdateTurmaService } from "./services";
import { Turma, TurmaExportacao } from "./models/turma.model";
import { CreateTurmasDTO } from "./dto/createTurmas.dto";
import { GetListagemTurmasReponse } from "./models/getListagemTurmas.model";
import { GetListagemTurmasAlunosResponse } from "./models/turmaAluno.model";

@ApiBearerAuth()
@ApiTags('Turmas')
@Controller('/turmas')
export class TurmasController {
    constructor(
        private createTurmaService: CreateTurmaService,
        private getTurmaService: GetTurmaService,
        private deleteTurmaService: DeleteTurmaService,
        private updateTurmaService: UpdateTurmaService,
        private exportarTurmasService: ExportarTurmasService,
        private getListagemTurmasService: GetListagemTurmasService,
        private getListagemTurmasAlunosService: GetListagemTurmasAlunosService
    ) {}

    @ApiDataResponse({ isArray: true, type: Turma })
    @ApiErrorResponse()
    @Post()
    async post(@Body() turma: CreateTurmasDTO) {
        return await this.createTurmaService.execute(turma)
    }

    @ApiDataResponse({ isArray: true, type: Turma })
    @ApiErrorResponse()
    @Get()
    async get(@Query('propertieName') propertieName: string, @Query('propertieValue') propertieValue: any) {
        if (propertieName && propertieValue)
            return await this.getTurmaService.execute(propertieName, propertieValue)
        return await this.getTurmaService.execute()
    }

    @ApiDataResponse({ isBoolean: true, type: Boolean })
    @ApiErrorResponse()
    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.deleteTurmaService.execute(id)
    }

    @ApiDataResponse({ isArray: true, type: Turma })
    @ApiErrorResponse()
    @Put(':id')
    async update(@Param('id') id: number, @Body() turma: CreateTurmasDTO) {
        return await this.updateTurmaService.execute(id, turma)
    }

    @ApiDataResponse({ isArray: true, type: TurmaExportacao })
    @ApiErrorResponse()
    @Post('/exportar')    
    async exportarTurmas() {
        return await this.exportarTurmasService.execute()
    }

    @ApiDataResponse({ isArray: true, type: GetListagemTurmasReponse })
    @ApiErrorResponse()
    @Get('/listagem/registros')
    async getListarTurmas() {
        return await this.getListagemTurmasService.execute()
    }

    @ApiDataResponse({ isArray: true, type: GetListagemTurmasAlunosResponse })
    @ApiErrorResponse()
    @Get('/listagem/alunos/:id')
    async getListarTurmasAlunos(@Param('id') id: number) {
        return await this.getListagemTurmasAlunosService.execute(id)
    }
}