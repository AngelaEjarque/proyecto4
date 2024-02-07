import { artistSeeder } from "./ArtistSeeder";
import { roleSeeder } from "./RoleSeeder";
import { userSeeder } from "./UserSeeder";


(async() => {
    await roleSeeder();
    await userSeeder();
    //await artistSeeder();    
})();