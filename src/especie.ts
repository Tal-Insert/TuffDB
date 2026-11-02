import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("especies")
export class Especie {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    nomePopular!: string;

    @Column({ length: 150 })
    nomeCientifico!: string;

    @Column({ type: "text" })
    descricao!: string;

    @Column({ default: false })
    domestico!: boolean;

    @Column({ default: true })
    ativo!: boolean;
}
