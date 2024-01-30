import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1706651568881 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Crear tabla
        await queryRunner.createTable(
            new Table({
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
                    length: "11",
                },
                {                    
                    name: "email",
                    type: "varchar",
                    length: "255",
                    isUnique: true,
                },
                ],
                }),
                true
            );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //eliminar tabla
        await queryRunner.dropTable("users");
    }

}