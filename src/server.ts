import app from "./app";
import { AppDataSource } from "./database/data-source";

const port:number = 3000;

(async ()=>{
    try{
         await AppDataSource.initialize();
         console.log("Data Source has been initializated");
    } catch (error) {
        console.error("Error during Data Source initialization", error);
    }

}) ()

app.listen (port, () => {
    console.log(`Server running on port ${port}`);
});