import { AppDataSource } from "../data-source";
import { UserFactory } from "../factories/UserFactory";
import { Role } from "../../models/Role";
import { Artists } from "../../models/Artist";
import { ArtistFactory } from "../factories/ArtistFactory";

export const artistSeeder = async() =>{
    try {
        await AppDataSource.initialize();
            
            const userRepository = AppDataSource.getRepository(Artists);

            const count = 10;

            //generar usuarios
            const artists = ArtistFactory.createMany(count);
            console.log("Seeding artist completed successfully");

            await userRepository.save(artists);

    } catch (error){
        console.error("Error seeding the database", error);

    } finally {
        await AppDataSource.destroy();
    }
};