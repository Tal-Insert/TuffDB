import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("racas")
export class Raca {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    nome!: string;

    @Column({ length: 20 })
    porte!: string;

    @Column({ type: "text" })
    descricao!: string;

    @Column({ type: "int" })
    expectativaVida!: number;

    @Column({ default: true })
    ativo!: boolean;
}
