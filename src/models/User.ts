import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("users")
export class User extends BaseEntity {
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
    password!: string;

}
