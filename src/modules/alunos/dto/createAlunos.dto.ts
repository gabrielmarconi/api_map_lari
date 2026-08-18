import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateAlunosDTO {    

    @IsOptional()
    public id: number

    @ApiProperty()
    @IsNotEmpty({ message: 'O campo nome é obrigatório!' })
    public nome: string

}