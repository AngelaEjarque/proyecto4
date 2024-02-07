import { Request, Response } from "express";
import {CreateArtistRequestBody, CreateUserRequestBody, LoginUserRequestBody, TokenData} from "../types/types";
import { AppDataSource } from "../database/data-source";
import { StatusCodes } from "http-status-codes";
import { User } from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthController {
    async register(req:Request<{},{}, CreateUserRequestBody>, res: Response): Promise<void | Response<any>> {
        const { username, name, surname , password_hash, email, phone } = req.body;
        const userRepository = AppDataSource.getRepository(User);
        try {
            // Crear nuevo usuario
            const newUser: User = {
                username,
                name,
                surname,
                email,
                password_hash: bcrypt.hashSync(password_hash, 10),
                roles: [],
                phone,

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
              relations: {
                 roles: true,
              },
              select: {
                 roles: {
                    role_name: true,
                 },
              },
           });
  
           // Verificar usuario inexistente
           if (!user) {
              return res.status(StatusCodes.BAD_REQUEST).json({
                 message: "Bad email or password",
              });
           }
  
           // Verificar contraseña si el usuario existe
           const isPasswordValid = bcrypt.compareSync(
              password_hash,
              user.password_hash
           );
  
           // Verificar contraseña valida
           if (!isPasswordValid) {
              return res.status(StatusCodes.BAD_REQUEST).json({
                 message: "Bad email or password",
              });
           }
  
           // Generar token
  
           const roles = user.roles.map((role) => role.role_name);
  
           const tokenPayload: TokenData = {
             email:  user.email,
             userId: user.id?.toString() as string,
            userRoles: roles,
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
  }







