import express, {Application} from 'express'
import router from "./routes";
import {User} from "./models/User";

const app: Application = express();

//Middlewares
app.use(express.json());

//Rutas
/*app.get('/api/users', async (req,res) => {
    const allUsers = await User.find();
    res.json(allUsers);
})*/
app.use(router)

export default app;