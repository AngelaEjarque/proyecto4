import { AppDataSource } from "../data-source";
import { UserFactory } from "../factories/UserFactory";
import { Role } from "../../models/Role";
import { Artists } from "../../models/Artist";
import { ArtistFactory } from "../factories/ArtistFactory";
import { User } from "../../models/User";

export const artistSeeder = async() =>{
    try {
        await AppDataSource.initialize();
            
            const artistRepository = AppDataSource.getRepository(Artists);

            const count = 10;

            //generar usuarios
            const artists = ArtistFactory.createMany(count);
            console.log("Seeding artist completed successfully");
           
            const userRepository = AppDataSource.getRepository(User);

            //generar usuarios
            const users = UserFactory.createMany(count);
            console.log("Seeding users completed successfully");

            //asignar rol 
            users.forEach( user=> user.roles = [{id:2, name:"admin"} as Role]);

            await userRepository.save(users);
            artists.forEach((artist, index) => {
                artist.users = users[index];
             });
            await artistRepository.save(artists);

    } catch (error){
        console.error("Error seeding the database", error);

    } finally {
        await AppDataSource.destroy();
    }
};
