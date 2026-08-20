import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('turmas')
export class TurmaEntity {

    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public nome: string   

    constructor(props?: Partial<TurmaEntity>) {
        Object.assign(this, props)
    }
}