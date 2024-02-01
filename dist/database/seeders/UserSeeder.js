"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSeeder = void 0;
const data_source_1 = require("../data-source");
const User_1 = require("../../models/User");
const UserFactory_1 = require("../factories/UserFactory");
const userSeeder = async () => {
    try {
        await data_source_1.AppDataSource.initialize();
        const users = UserFactory_1.UserFactory.create(10);
        console.log("Seeding users completed successfully");
        const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
        await userRepository.save(users);
    }
    catch (error) {
        console.error("Error seeding the database", error);
    }
    finally {
        await data_source_1.AppDataSource.destroy();
    }
};
exports.userSeeder = userSeeder;
