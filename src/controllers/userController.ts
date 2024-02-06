import { AppDataSource } from "../database/data-source";
import {Controller} from "./Controller";
import { User } from "../models/User";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {  LoginUserRequestBody } from "../types/types";
import jwt from "jsonwebtoken";

export default class userController {
  constructor() {}

  async getAll(req: Request, res: Response): Promise<void | Response<any>> {
    try {
      const userRepository = AppDataSource.getRepository(User);

      console.log(req.query);

      const allUsers = await userRepository.find(); //SELECT * FROM "user"
      res.status(200).json({ allUsers });
    } catch (error) {
      res.status(500).json({
        message: "Error while getting users",
      });
    }
  }

  async getById(req: Request, res: Response): Promise<void | Response<any>> {
    try {
      const userRepository = AppDataSource.getRepository(User);
      const { id } = req.query;

      const allUsers = await userRepository.find({
        where: {
          id: +(id as string),
        },
      });
      res.status(200).json({ allUsers });
    } catch (error) {
      res.status(500).json({
        message: "Error while getting users",
      });
    }
  }

  async register(req: Request, res: Response): Promise<void | Response<any>> {
    try {
      const { username, name, surname, password_hash, email, phone, roles } = req.body;

      const userRepository = AppDataSource.getRepository(User);

      const newUser: User = {
        username,
        name,
        surname,
        phone,
        email,
        password_hash,
        roles,
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

  async login(
    req: Request<{}, {}, LoginUserRequestBody>,
    res: Response
  ): Promise<void | Response<any>> {
    const { password_hash, email } = req.body;
    const userRepository = AppDataSource.getRepository(User);

    try {
      // Validar existencia de email y contraseña
      if (!email || !password_hash) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Email or password is required",
        });
      }

      // Encontrar un usuario por email
      const user = await userRepository.findOne({
        where: {
          email: email,
        },

      });

      // Verificar usuario inexistente
      if (!user) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Bad email or password",
        });
      }

      // Verificar contraseña valida
      if (password_hash != user.password_hash) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Bad email or password",
        });
      }
      
          // Generar token

          const tokenPayload = {
             userId: user.id?.toString() as string,
          };
 
          const token = jwt.sign(tokenPayload, "123", {
             expiresIn: "3h",
          });

      res.status(StatusCodes.OK).json({
        message: "Login successfully",
        token,
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error while login",
        error,
      });
    }
  }
  async update(req: Request, res: Response): Promise<void | Response<any>> {
    try {
       const id = +(req.query.id as string);
       const data = req.body; 
       const userRepository = AppDataSource.getRepository(User);
       await userRepository.update({ id: id }, data);
       
       res.status(202).json({
          message: "User updated successfully",
       });
    } catch (error) {
       res.status(500).json({
          message: "Error while updating user",
       });
    }
 }


}
