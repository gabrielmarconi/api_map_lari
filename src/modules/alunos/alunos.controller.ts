import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiDataResponse, ApiErrorResponse } from "src/common/decorators";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CreateAlunoService, DeleteAlunoService, ExportarAlunosService, GetAlunoService, GetListagemAlunosService, UpdateAlunoService } from "./services";
import { Aluno, AlunoExportacao } from "./models/aluno.model";
import { CreateAlunosDTO } from "./dto/createAlunos.dto";
import { GetListagemAlunosReponse } from "./models/getListagemAlunos.model";

@ApiBearerAuth()
@ApiTags('Alunos')
@Controller('/alunos')
export class AlunosController {
    constructor(
        private createAlunoService: CreateAlunoService,
        private getAlunoService: GetAlunoService,
        private deleteAlunoService: DeleteAlunoService,
        private updateAlunoService: UpdateAlunoService,
        private exportarAlunosService: ExportarAlunosService,
        private getListagemAlunosService: GetListagemAlunosService
    ) {}

    @ApiDataResponse({ isArray: true, type: Aluno })
    @ApiErrorResponse()
    @Post()
    async post(@Body() aluno: CreateAlunosDTO) {
        return await this.createAlunoService.execute(aluno)
    }

    @ApiDataResponse({ isArray: true, type: Aluno })
    @ApiErrorResponse()
    @Get()
    async get(@Query('propertieName') propertieName: string, @Query('propertieValue') propertieValue: any) {
        if (propertieName && propertieValue)
            return await this.getAlunoService.execute(propertieName, propertieValue)
        return await this.getAlunoService.execute()
    }

    @ApiDataResponse({ isBoolean: true, type: Boolean })
    @ApiErrorResponse()
    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.deleteAlunoService.execute(id)
    }

    @ApiDataResponse({ isArray: true, type: Aluno })
    @ApiErrorResponse()
    @Put(':id')
    async update(@Param('id') id: number, @Body() aluno: CreateAlunosDTO) {
        return await this.updateAlunoService.execute(id, aluno)
    }

    @ApiDataResponse({ isArray: true, type: AlunoExportacao })
    @ApiErrorResponse()
    @Post('/exportar')    
    async exportarAlunos() {
        return await this.exportarAlunosService.execute()
    }

    @ApiDataResponse({ isArray: true, type: GetListagemAlunosReponse })
    @ApiErrorResponse()
    @Get('/listagem/registros')
    async getListarAlunos(@Query('propertieName') propertieName: string, @Query('propertieValue') propertieValue: number) {
        return await this.getListagemAlunosService.execute(propertieName, propertieValue)
    }
}