import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pets")
export class Pet {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    nome!: string;

    @Column({ type: "date" })
    dataNascimento!: Date;

    @Column({ length: 10 })
    sexo!: string;

    @Column({ type: "decimal", precision: 5, scale: 2 })
    peso!: number;

    @Column({ length: 50 })
    cor!: string;

    @Column({ default: false })
    castrado!: boolean;

    @Column({ default: true })
    ativo!: boolean;
}
