import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateTurmasDTO {    
    
    @IsOptional()
    public id: number

    @ApiProperty()
    @IsNotEmpty({ message: 'O campo nome é obrigatório!' })
    public nome: string

}