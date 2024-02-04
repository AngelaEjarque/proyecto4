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
npx typeorm migration:create ./src/database/migrations/CreateUsers

# Crear modelos
npx typeorm entity:create ./src/models/User