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
Este proyecto requería una API funcional conectada a una base de datos 

## Sobre el proyecto
Backend correspondiente al sistema de gestión de citas para un estudio de tatuajes. 


## Stack
Tecnologías utilizadas:



## Diagrama BD
![AngelaEjarque diagrama mysql workbench](https://github.com/AngelaEjarque/proyecto4/assets/147879332/82e8a95b-d588-49a0-b432-06c086f5c0e2)

## Instalación en local
1. Clonar el repositorio
2. ` $ npm install `
3. Conectamos nuestro repositorio con la base de datos 
4. ``` $ Ejecutamos las migraciones ``` 
5. ``` $ Ejecutamos los seeders ``` 
6. ``` $ npm run dev ``` 
7. ...

## Endpoints
<details>
<summary>Endpoints</summary>

- USERS

    - Crear User

            POST http://localhost:3000/api/userregister
            
        body:
       
     
           {
            "username": "UserClient",
            "name": "UserClie",
            "surname": "Cuser",
            "password_hash": "123456",
            "email": "cuser@example.com"
            }

    
    - LOGIN

            POST http://localhost:3000/api/login  
        body:
        ``` js
            {
                "user": "test",
                "email": "test3@test.com","password": "test1234"
            }
        ```

    -  Obtener todos los usuarios (super_admin)
    
            GET http://localhost:3000/api/users

    
    - Get user by id 
    
            GET http://localhost:3000/api/userbyid

            
    - Update user info 
    
            PATCH http://localhost:3000/api/update
        body: 
          
                
                {
                "username" : "Cambio333UsiarioPrueba",
                "name": "Cam33UsiarioPr",
                "surname": "USUCita",
                "password_hash": "123456",
                "email" : "Priue@example.com"
                 }

- ARTISTAS
    
    -Crear tatuador
        
      POST http://localhost:3000/api/artist
      
    body:  
        
    
            {
                "username" : "UserArtis",
                "name": "UserAr",
                "surname": "Auser",
                "password_hash": "123456",
                "email" : "auser@example.com"
            }

    -Ver tatuador por id
        
        GET http://localhost:3000/api/artist/16

    -Perfil del tatuador (con id)

        GET http://localhost:3000/api/artist/artistprofile/17
        
    -Ver todos los tatuadores(super_admin)
    
        GET http://localhost:3000/api/artist


- CITAS

    -Crear Cita

            POST http://localhost:3000/api/appointment
            
    body:
      
            
            {
                "user_id": 9,
                "artist_id": 7,
                "date": "2024-04-12",
                "hour": "13:00h"
            }
            
    -Ver todas las citas (super_admin)
        
            GET http://localhost:3000/api/appointment
            
    -Actualizar citas (con id)
    
            PATCH http://localhost:3000/api/appointment/1
      
    -Borrar cita (con id de cita)
    
            DELETE http://localhost:3000/api/appointment/1
            
  
 
                    
</details>

## Futuras funcionalidades
[ ] Añadir 
[ ] 

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





