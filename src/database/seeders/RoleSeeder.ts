import { Role } from "../../models/Role";
import { AppDataSource } from "../data-source";

export const roleSeeder = async () => {
    try {
        await AppDataSource.initialize();
        
        const roleRepository = AppDataSource.getRepository(Role);

        const adminRole = new Role();
        adminRole.name = "admin";

        const userRole = new Role();  // Se crea un objeto para el rol de usuario
        userRole.name = "user";       // Se asigna el nombre del rol de usuario

        const superadminRole = new Role();
        superadminRole.name = "super_admin";

        // Se guarda en la base de datos los roles
        await roleRepository.save([userRole, adminRole, superadminRole]);

        console.log("Seeding roles completed successfully");
    } catch (error) {
        console.error("Error seeding the database", error);
    } finally {
        await AppDataSource.destroy();
    }
};
