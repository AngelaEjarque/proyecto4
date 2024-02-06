import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { User } from "./User";

@Entity("roles")
export class Role {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ default: 'Valor predeterminado' })
    name!: string;

    @ManyToMany(() => User, (user) => user.roles)
    @JoinTable({
        name: 'user_roles',
        joinColumn: {
            name: 'role_id',
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "user_id",
            referencedColumnName: "id",
        }
    })
    user!: User[];
}

