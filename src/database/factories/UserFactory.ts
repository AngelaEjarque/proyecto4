import {faker} from '@faker-js/faker'
import{User} from '../../models/User'


export class UserFactory {
    private static generate(){
        const user=new User();
        user.username = faker.internet.userName()
        user.name = faker.person.firstName()
        user.surname = faker.person.lastName()
        user.phone = faker.phone.number()
        user.email = faker.internet.email({
            firstName: user.name,
            lastName: user.surname,
            allowSpecialCharacters: true,
        })
        user.password = faker.internet.password ({ length: 20 });
        
        return user;

    }
    static create (count = 1){
        return Array.from({ length: count }, this.generate);
    }

}