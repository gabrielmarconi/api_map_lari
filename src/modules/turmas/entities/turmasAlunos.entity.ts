import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('turmasAlunos')
export class TurmaAlunoEntity {

    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public idTurma: number

    @Column()
    public idAluno: number

    constructor(props?: Partial<TurmaAlunoEntity>) {
        Object.assign(this, props)
    }
}