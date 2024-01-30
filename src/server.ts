import app from "./app";
import { Request, Response } from "express";

const port:number = 3000;

app.listen (port, () => {
    console.log('Server running on port 3000');
});