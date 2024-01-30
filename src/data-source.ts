import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateUser1706651568881 } from "./migrations/1706651568881-CreateUser";

export const AppDataSource = new DataSource({
type: "mysql",
host: "localhost",
port: 3307,
username: "root",
password: "root",
database: "tattoo",
entities: [],
migrations:[CreateUser1706651568881],
synchronize: false,
logging: false,
})