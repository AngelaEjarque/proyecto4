import {faker} from '@faker-js/faker'
import{User} from '../../models/User'
import bcrypt from "bcrypt";

export class UserFactory {
    private static generate(){
        const user = new User();
        user.username = faker.internet.userName()
        user.name = faker.person.firstName()
        user.surname = faker.person.lastName()
        user.phone = faker.phone.number()
        if (user.phone.length > 12) {
            user.phone = user.phone.slice(0, 12);
        }
        user.email = faker.internet.email({
            firstName: user.name,
            lastName: user.surname,
            allowSpecialCharacters: true,
        })
        user.password_hash = bcrypt.hashSync("12345678", 10);
        
        return user;

    }
    static create (count = 1){
        return Array.from({ length: count }, this.generate);
    }

}