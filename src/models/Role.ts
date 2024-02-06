import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User";

@Entity("roles")
export class Role {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name!: string;
    users: any;

    @ManyToMany(() => User, (user) => user.roles)
    @JoinTable({
            name:'user_roles',
            joinColumn:{
                name: 'role_id',
                referencedColumnName:"id"
            },
            inverseJoinColumn:{
                name:"user_id",
                referencedColumnName:"id",
            }
        })
        user!: User[];

}
