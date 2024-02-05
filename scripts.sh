# Ejecutar migraciones en TypeORM 
npx typeorm-ts-node-commonjs migration:run -d ./src/database/data-source.ts 

# Revierte la última migración en TypeORM. Para revertir las demás, repetir el comando en orden inverso.
npx typeorm-ts-node-commonjs migration:revert -d ./src/database/data-source.ts

# Ejecutar seeders
npx ts-node src/database/seeders/DatabaseSeeder.ts

# ------------------------------------------------------------------------------
# Despues de refactorizar la estructura de directorio de la base de datos
# ------------------------------------------------------------------------------


# Crear migraciones manualmente
npx typeorm migration:create ./src/database/migrations/CreateRoles
npx typeorm migration:create ./src/database/migrations/CreateUsers
npx typeorm migration:create ./src/database/migrations/CreateUsersRoles
npx typeorm migration:create ./src/database/migrations/CreateStudents
npx typeorm migration:create ./src/database/migrations/CreateTeachers
npx typeorm migration:create ./src/database/migrations/CreateCourses
npx typeorm migration:create ./src/database/migrations/CreateEnrollments

# Ejecutar migraciones
npx typeorm-ts-node-commonjs migration:run -d ./src/database/data-source.ts 

# Crear modelos
npx typeorm entity:create ./src/models/Role
npx typeorm entity:create ./src/models/User
npx typeorm entity:create ./src/models/Student
npx typeorm entity:create ./src/models/Teacher
npx typeorm entity:create ./src/models/Course
npx typeorm entity:create ./src/models/Enrollment