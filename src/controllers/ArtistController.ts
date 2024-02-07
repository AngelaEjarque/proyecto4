import { Controller } from "./Controller";
import { Request, Response } from "express";
import { User } from "../models/User";
import { AppDataSource } from "../database/data-source";
import { Artists } from "../models/Artist";
import {CreateUserRequestBody,} from "../types/types";
import bcrypt from "bcrypt";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";


export class ArtistController implements Controller {
   register(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void | Response<any, Record<string, any>>> {
       throw new Error("Method not implemented.");
   }
   login(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void | Response<any, Record<string, any>>> {
       throw new Error("Method not implemented.");
   }
   async getAll(req: Request, res: Response): Promise<void | Response<any>> {
      try {
         const artistRepository = AppDataSource.getRepository(Artists);

         const allArtists = await artistRepository.findBy({});
         res.status(200).json(allArtists);
      } catch (error) {
         res.status(500).json({
            message: "Error while getting artist",
         });
      }
   }

   async getById(req: Request, res: Response): Promise<void | Response<any>> {
      try {
         const id = +req.params.id;

         const artistRepository = AppDataSource.getRepository(Artists);
         const artist = await artistRepository.findOneBy({
            id: id,

         });

         if (!artist) {
            return res.status(404).json({
               message: "Artist not found",
            });
         }

         res.status(200).json(artist);
      } catch (error) {
         res.status(500).json({
            message: "Error while getting artist",
         });
      }
   }

   async create(
      req: Request<{}, {}, CreateUserRequestBody>,
      res: Response
   ): Promise<void | Response<any>> {
      const { username, name, surname, password_hash, email } = req.body;

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
             phone: ""
         };
         await userRepository.save(newUser);

         res.status(201).json("Artist create successfully");
      } catch (error: any) {
         console.error("Error while creating artist:", error);
         res.status(500).json({
            message: "Error while creating artis",
            error: error.message,
         });
      }
   }


   async update(req: Request, res: Response): Promise<void | Response<any>> {
      try {
         const id = +req.params.id;
         const data = req.body;

         const artistRepository = AppDataSource.getRepository(Artists);
         const artistUpdated = await artistRepository.update({ id: id }, data);
         res.status(202).json({
            message: "Artist updated successfully",
         });
      } catch (error) {
         res.status(500).json({
            message: "Error while updating artist",
         });
      }
   }

   async delete(req: Request, res: Response): Promise<void | Response<any>> {
      try {
         const id = +req.params.id;

         const artistRepository = AppDataSource.getRepository(Artists);
         await artistRepository.delete(id);

         res.status(200).json({
            message: "Artist deleted successfully",
         });
      } catch (error) {
         res.status(500).json({
            message: "Error while deleting Artist",
         });
      }
   }

   async getByArtistId(req: Request, res: Response): Promise<void | Response<any>> { //falta probar
      try {
         const id = +req.params.id;

         const artistRepository = AppDataSource.getRepository(Artists);
         const artist = await artistRepository.findOneBy({
            id: id,

         });

         const userRepository = AppDataSource.getRepository(User);
         let userArtist = await userRepository.findBy({
               artist: true,
               id: artist?.user_id,
            }
            
         );

         if (!userArtist) {
            return res.status(404).json({
               message: "Artist not found",
            });
         }

         const response = {
            ...artist,
            ...userArtist,
         }
         res.status(200).json(response);
      } catch (error) {
         res.status(500).json({
            message: "Error while getting artist",
         });
      }
   }
}

