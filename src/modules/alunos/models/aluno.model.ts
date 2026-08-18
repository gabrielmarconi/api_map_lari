import { ApiProperty } from "@nestjs/swagger";

export class Aluno {
    @ApiProperty()
    id: number;

    @ApiProperty()
    nome: string
    
}

export class AlunoExportacao {
    
    @ApiProperty()
    filename: string

    @ApiProperty({
        default: 'base64'
    })
    encoding: string

    @ApiProperty()
    content: string
}