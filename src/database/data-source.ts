import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateUser1706651568881 } from "./migrations/1706651568881-CreateUser";
import { User } from "../models/User";

export const AppDataSource = new DataSource({
type: "mysql",
host: "localhost",
port: 3307,
username: "root",
password: "root",
database: "tattoo",
entities: [`${__dirname}/../models/**/*{.js,.ts}`],
migrations:[`${__dirname}/database/migrations/**/*{.js,.ts}`],
synchronize: false,
logging: false,
})