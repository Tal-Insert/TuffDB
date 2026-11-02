import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tutores")
export class Tutor {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    nome!: string;

    @Column({ length: 11, unique: true })
    cpf!: string;

    @Column({ length: 150 })
    email!: string;

    @Column({ length: 20 })
    telefone!: string;

    @Column({ length: 255 })
    endereco!: string;

    @Column({ default: true })
    ativo!: boolean;
}
