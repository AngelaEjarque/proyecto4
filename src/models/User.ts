import { Column, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Role } from "./Role";
import { Artists } from "./Artist";
import { Appointment } from "./Appointment";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ unique: true })
    username!: string;

    @Column()
    name!: string;

    @Column()
    surname!: string;

    @Column({ unique: true })
    phone!: string;
    
    @Column({ unique: true })
    email!: string;

    @Column()
    password_hash!: string;

    // N : N 
    @ManyToMany(() => Role, (role) => role.user)
    @JoinTable({
            name:'users_roles',
            joinColumn:{
                name: 'user_id',
                referencedColumnName:"id"
            },
            inverseJoinColumn:{
                name:"role_id",
                referencedColumnName:"id",
            }
        })
    roles!: Role[];

    @OneToOne(() => Artists, (artists) => artists.users)
    artist?: Artists;
    
    @OneToMany(() => Appointment, (appointment) => appointment.user_id)
    clientAppointments?: Appointment[];
}
