import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('alunos')
export class AlunoEntity {

    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public nome: string 

    constructor(props?: Partial<AlunoEntity>) {
        Object.assign(this, props)
    }
}