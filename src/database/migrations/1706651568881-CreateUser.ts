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
                    type: "string",
                    length: "12",
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
                }),
                true
            );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //eliminar tabla
        await queryRunner.dropTable("users");
    }

}
