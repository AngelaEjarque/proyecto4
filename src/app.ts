import express, {Application} from 'express';
import { getRepository } from 'typeorm'; 
import router from "./routes";
import {User} from "./models/User";

const app: Application = express();

//Middlewares
app.use(express.json());

// Rutas
// app.get("/api/users", async (req, res) => {
//   const userRepository = getRepository(User);
//   const allUsers = await userRepository.find();
//   res.json(allUsers);
// });

app.use(router);


export default app;