import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";


export const auth = (req: Request, res: Response, next: NextFunction) =>
{
    req.headers

    const token = req.headers.authorization?.split(" ")[1];
    console.log(token);

    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: "Unauthorized",
        });
    }

    try{
    //Decodificar token
    const decoded =jwt.verify (token,"123");
    console.log(decoded) 

    next();
    } catch (error){
        res.status(StatusCodes.UNAUTHORIZED).json({
            message: "Unauthorized",
        });
    }



}