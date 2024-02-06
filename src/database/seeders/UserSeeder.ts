import { AppDataSource } from "../data-source";
import { User } from "../../models/User";
import { UserFactory } from "../factories/UserFactory";
import { Role } from "../../models/Role";

export const userSeeder = async() =>{
    try {
        await AppDataSource.initialize();
            
            const userRepository = AppDataSource.getRepository(User);
            const count = 10;

            //generar usuarios
            const users = UserFactory.createMany(count);
            console.log("Seeding users completed successfully");

            //asignar rol 
            users.forEach( user=> user.roles = [{id:1, name:"user"} as Role]);

            await userRepository.save(users);

    } catch (error){
        console.error("Error seeding the database", error);

    } finally {
        await AppDataSource.destroy();
    }
};