import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("origens_especies")
export class OrigemEspecie {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 50 })
    continente!: string;

    @Column({ length: 100, nullable: true })
    pais!: string;

    @Column({ length: 100 })
    regiao!: string;

    @Column({ type: "text" })
    descricao!: string;

    @Column({ default: true })
    ativo!: boolean;
}
