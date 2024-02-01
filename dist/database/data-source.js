"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "root",
    database: "tattoo",
    entities: [`${__dirname}/../models/**/*{.js,.ts}`],
    migrations: [`${__dirname}/database/migrations/**/*{.js,.ts}`],
    synchronize: false,
    logging: false,
});
