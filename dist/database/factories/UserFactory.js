"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = void 0;
const faker_1 = require("@faker-js/faker");
const User_1 = require("../../models/User");
class UserFactory {
    static generate() {
        const user = new User_1.User();
        user.username = faker_1.faker.internet.userName();
        user.name = faker_1.faker.person.firstName();
        user.surname = faker_1.faker.person.lastName();
        user.phone = faker_1.faker.phone.number();
        user.email = faker_1.faker.internet.email({
            firstName: user.name,
            lastName: user.surname,
            allowSpecialCharacters: true,
        });
        user.password = faker_1.faker.internet.password({ length: 20 });
        return user;
    }
    static create(count = 1) {
        return Array.from({ length: count }, this.generate);
    }
}
exports.UserFactory = UserFactory;
