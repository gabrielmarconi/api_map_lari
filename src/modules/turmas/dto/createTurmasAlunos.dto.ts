import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsDate, IsNotEmpty, IsOptional } from "class-validator"

export class CreateTurmasAlunosDTO {    

    @IsOptional()
    public id: number

    @ApiProperty()
    @IsNotEmpty({ message: 'O campo idTurma é obrigatório!' })
    public idTurma: number

    @ApiProperty()
    @IsNotEmpty({ message: 'O campo idAluno é obrigatório!' })
    public idAluno: number
}