# Proyecto4
Tattoo Backend
#Indice

<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#objetivo">Objetivo</a></li>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagrama-bd">Diagrama</a></li>
    <li><a href="#instalación-en-local">Instalación</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#futuras-funcionalidades">Futuras funcionalidades</a></li>
    <li><a href="#contribuciones">Contribuciones</a></li>
    <li><a href="#desarrollo">Desarrollo</a></li>

  </ol>
</details>

## Objetivo
Obtener API funcional conectada a una base de datos 

## Sobre el proyecto
En este proyecto, realizamos el backend correspondiente al sistema de gestión de citas para un estudio de tatuajes. 

Diferenciamos 3 roles: user, admin y super_admin


## Stack
Tecnologías utilizadas: 
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![NodeJS](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Web/API/Node) [![ExpressJS](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat)](https://expressjs.com/) [![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat)](https://dev.mysql.com/doc/) [![JWT](https://img.shields.io/badge/JSON%20Web%20Tokens-000?logo=jsonwebtokens&logoColor=fff&style=flat)](https://jwt.io/introduction) [![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Glossary/Git)


## Diagrama BD
![AngelaEjarque diagrama mysql workbench](https://github.com/AngelaEjarque/proyecto4/assets/147879332/4529795d-767e-4a4b-9573-5df9440d3415)


## Instalación en local

1. Clonar el repositorio
2. ` $ npm install `
3. Conectamos nuestro repositorio con la base de datos 
4. ``` $ Ejecutamos las migraciones ``` 
5. ``` $ Ejecutamos los seeders ``` 
6. ``` $ npm run dev ``` 
7. ...

## Endpoints


- LOGIN <details>

        POST http://localhost:3000/auth/login
    body:
         "email": "test3@test.com",
         "password_hash": "1234"


- USERS <details>

    -Crear User

            POST http://localhost:3000/api/users/register
            
        body:
        {"name": "nuevo nombre"}

    
    - Obtener todos los usuarios (role admin)
    
            GET http://localhost:3000/api/users

    
    -Get user by id 
    
            GET http://localhost:3000/api/users/:id

            
    -Update user info 
    
            PATCH http://localhost:3000/api/users/:id
        body: 
          
                
                {
                "username" : "testupdate",
                "name": "testupdate",
                "surname": "Utest",
                "password_hash": "123456",
                "email" : "test@example.com"
                 }

    -Borrar usuario  (role super_admin)
    
            DELETE http://localhost:3000/api/user/:id

- ARTISTAS <details>
    
    -Crear tatuador (role super_admin)
        
      POST http://localhost:3000/api/artist/create
      
    body:  
        
    
            {
                "username" : "UserArtis",
                "name": "UserAr",
                "surname": "Auser",
                "password_hash": "123456",
                "email" : "auser@example.com"
            }

    -Ver tatuador por id
        
        GET http://localhost:3000/api/artist/:id

    -Perfil del tatuador (con id)

        GET http://localhost:3000/api/artist/artistprof/:id
        
    -Ver todos los tatuadores
    
        GET http://localhost:3000/api/artist

    -Borrar artista  (role super_admin)
    
        DELETE http://localhost:3000/api/artist/:id


- CITAS <details>

    -Crear Cita

            POST http://localhost:3000/api/appointment/create
            
    body:
            
            {
                "user_id": 1,
                "artist_id": 5,
                "date": "2024-04-12",
                "hour": "13:00h"
            }
            
    -Ver las citas de usuario (role user)
        
            GET http://localhost:3000/api/appointment/userdates/:id
            
    -Ver las citas de artista (role admin)
        
             GET http://localhost:3000/api/appointment/artistdates/:id

    -Actualizar citas (con id)
    
            PATCH http://localhost:3000/api/appointment/:id
      
    -Borrar cita (con id de cita)
    
            DELETE http://localhost:3000/api/appointment/:id
            
  
 
                    
## Contribuciones
Las sugerencias y aportaciones son siempre bienvenidas.  

Puedes hacerlo de dos maneras:

1. Abriendo una issue
2. Crea un fork del repositorio
    - Crea una nueva rama  
        ```
        $ git checkout -b feature/nombreUsuario-mejora
        ```
    - Haz un commit con tus cambios 
        ```
        $ git commit -m 'feat: mejora X cosa'
        ```
    - Haz push a la rama 
        ```
        $ git push origin feature/nombreUsuario-mejora
        ```
    - Abre una solicitud de Pull Request





