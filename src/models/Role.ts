import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { User } from "./User";

@Entity("roles")
export class Role {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ default: 'Valor predeterminado' })
    name!: string;


    user?: User[];
    role_name: any;
}

