import { ApiProperty } from "@nestjs/swagger";

export class Turma {
    @ApiProperty()
    id: number;

    @ApiProperty()
    nome: string

    @ApiProperty()
    alunos: Array<TurmaAluno>
    
}

class TurmaAluno {
    @ApiProperty()
    idTurma: number;

    @ApiProperty()
    idAluno: number
}

export class TurmaExportacao {
    
    @ApiProperty()
    filename: string

    @ApiProperty({
        default: 'base64'
    })
    encoding: string

    @ApiProperty()
    content: string
}