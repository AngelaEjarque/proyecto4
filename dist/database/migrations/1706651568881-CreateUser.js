"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser1706651568881 = void 0;
const typeorm_1 = require("typeorm");
class CreateUser1706651568881 {
    async up(queryRunner) {
        // Crear tabla
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "username",
                    type: "varchar",
                    length: "255",
                    isUnique: true,
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "255",
                },
                {
                    name: "surname",
                    type: "varchar",
                    length: "255",
                },
                {
                    name: "phone",
                    type: "INT",
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "255",
                    isUnique: true,
                },
                {
                    name: "password",
                    type: "varchar",
                    length: "255",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                    onUpdate: "CURRENT_TIMESTAMP",
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        //eliminar tabla
        await queryRunner.dropTable("users");
    }
}
exports.CreateUser1706651568881 = CreateUser1706651568881;
