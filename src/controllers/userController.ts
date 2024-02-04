import { AppDataSource } from "../database/data-source";
import { User } from "../models/User";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export default class userController {
    constructor(){}

    async getAll(req : Request,res : Response): Promise<void | Response<any>>{
        try {
            const userRepository = AppDataSource.getRepository(User);
            
            console.log(req.query);
        
            const allUsers = await userRepository.find(); //SELECT * FROM "user"
            res.status(200).json({ allUsers});
         } catch (error) {
            res.status(500).json({
               message: "Error while getting users",
            });
         }
    }

    async getById(req : Request,res : Response): Promise<void | Response<any>>{
        try {
            const userRepository = AppDataSource.getRepository(User);
            const {id} = req.query;
            
            const allUsers = await userRepository.find({
                where: {
                    id: +(id as string),
                },
            });
                res.status(200).json({ allUsers});
         } catch (error) {
            res.status(500).json({
               message: "Error while getting users",
            });
         }
    }

    async register(req: Request,res: Response): Promise<void | Response<any>> {
        try {
        const { username, name, surname , password, email, phone  } =
          req.body;
    
        const userRepository = AppDataSource.getRepository(User);
    
            const newUser: User = {
                username,
                name,
                surname,
                phone,
                email,
                password,

             };
          
          await userRepository.save(newUser);
          res.status(StatusCodes.CREATED).json({
            message: "Register successfully",
          });
        } catch (error: any) {
          console.error("Error while register:", error);
          res.status(500).json({
            message: "Error while register",
            error: error.message,
          });
        }
      }
    

}
