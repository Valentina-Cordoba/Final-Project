# Instrucciones para iniciar la aplicación

¡Bienvenido a nuestra aplicación en Express.js con aproximación a la arquitectura hexagonal!

## Instalación

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta la carpeta del proyecto donde se encuentra el archivo `package.json`.
3. Ejecuta el siguiente comando para instalar las dependencias necesarias:

```
npm install
```

## Base de datos

Asegúrate de tener MongoDB instalado en tu sistema local, ya que nuestra aplicación se conectará a una base de datos de MongoDB.

## Iniciar la aplicación

Una vez que hayas instalado las dependencias, inicia la aplicación con el siguiente comando:


```
node main.js
```

Esto levantará la aplicación en `localhost` en el puerto `3000`.

## Descripción de la aplicación

Nuestra aplicación es una API en Express.js que sigue una aproximación a la arquitectura hexagonal. Está organizada en módulos, donde cada módulo representa una funcionalidad específica de la aplicación y tiene su representación en el ORM de las colecciones de MongoDB.

## Estructura de carpetas

La estructura de carpetas es la siguiente:

```
- modules
  -- client
    --- application
    --- domain
    --- infrastructure
  -- movie
    --- application
    --- domain
    --- infrastructure
  -- role
    --- application
    --- domain
    --- infrastructure
  -- user
    --- application
    --- domain
    --- infrastructure
- main.js
- module.js
- package.json
```

## API Endpoints

- `GET /roles`: Obtiene todos los roles disponibles. 
  - Respuesta esperada:

  ```
  [
    {
        "_id": "64c20899352fb622a58e3e05",
        "name": "empleado",
        "description": "Empleado",
        "__v": 0
    },
    {
        "_id": "64c20899352fb622a58e3e07",
        "name": "administrador",
        "description": "Administrador",
        "__v": 0
    },
    {
        "_id": "64c20899352fb622a58e3e06",
        "name": "cliente",
        "description": "Cliente",
        "__v": 0
    }
  ]
  ```

- `GET /movies`: Obtiene todas las películas disponibles.
  - Respuesta esperada:

  ```
  [
    {
        "_id": "64c20899352fb622a58e3e0c",
        "name": "Avengers: Age of Ultron",
        "url": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg",
        "release_date": "2015-05-01T00:00:00.000Z",
        "duration": "2h 21m",
        "genre": "Science Fiction - Superhero",
        "recommended_age": "8+",
        "synopsis": "Tony Stark wants to launch a new peace program, but something goes wrong and he ends up creating Ultron, a robot that wants to destroy humanity. Thor, Hulk, and the rest of the Avengers must join forces once again to fight the robot. On their way to destroy Ultron, the Avengers will meet two new mysterious companions, Pietro and Wanda Maximoff, known as Quicksilver and Scarlet Witch.",
        "__v": 0
    },
  ]
  ```

- `GET /movies/:name`: Busca películas por nombre. Acepta parte del nombre, y no distingue entre mayúsculas y minúsculas.
  - Respuesta esperada:

  ```
  [
    {
        "_id": "64c20899352fb622a58e3e0e",
        "name": "Depredador",
        "url": "https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fs3.abcstatics.com%2Fmedia%2Fpeliculas%2F000%2F002%2F624%2Fdepredador-1.jpg&nuevoancho=683&medio=abc",
        "release_date": "1987-06-12T00:00:00.000Z",
        "duration": "1h 47m",
        "genre": "Science Fiction - Adventure",
        "recommended_age": "12+",
        "synopsis": "A group of mercenaries is hired by the CIA to rescue pilots who have been captured by the guerrillas in the Central American jungle.",
        "__v": 0
    }
  ]
  ```

- `POST /user`: Crea un nuevo usuario utilizando el siguiente payload:

```json
{
  "first_name": "Juan",
  "last_name": "Pérez",
  "dni": "12345678",
  "birth_date": "1990-05-15",
  "phone": "5551234567",
  "role_id": "64b9833c9bb62d92db488936",
  "email": "juan.perez@example.com",
  "password": "secretpassword123",
  "user_name": "juany123"
}
```
El `role_id` debe ser el ID correspondiente a uno de los roles disponibles, obtenidos mediante la API de `/roles`.

## Notas adicionales
* Usamos la librería Mongoose para conectarnos a la base de datos de MongoDB y manejar los modelos de datos.
* Utilizamos Prettier para garantizar la consistencia en el formato y espaciado del código.