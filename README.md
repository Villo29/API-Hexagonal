# Hexagonal API

## Descripción

Esta es una API basada en la arquitectura hexagonal, utilizando Node.js, Express y MongoDB.

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)
- MongoDB

## Instalación

1. Clona el repositorio:

    ```sh
    git clone <URL_DEL_REPOSITORIO>
    cd hexagonalapi
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```

3. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

    ```env
    PORT=5001
    MONGO_URI=mongodb+srv://<USUARIO>:<CONTRASEÑA>@<CLUSTER>.mongodb.net/<NOMBRE_BASE_DATOS>
    ```

    Asegúrate de reemplazar `<USUARIO>`, `<CONTRASEÑA>`, `<CLUSTER>` y `<NOMBRE_BASE_DATOS>` con tus propios valores.

## Scripts

- Para iniciar el servidor en modo desarrollo:

    ```sh
    npm run dev
    ```

- Para construir el proyecto:

    ```sh
    npm run build
    ```

- Para iniciar el servidor en modo producción:

    ```sh
    npm start
    ```

## Uso

La API expone las siguientes rutas:

- **Usuarios**
    - `POST /api/v1/usuarios`: Crear un nuevo usuario
    - `GET /api/v1/usuarios/:id`: Obtener un usuario por ID
    - `GET /api/v1/usuarios`: Obtener todos los usuarios
    - `PUT /api/v1/usuarios/:id`: Actualizar un usuario por ID
    - `DELETE /api/v1/usuarios/:id`: Eliminar un usuario por ID

## Estructura del Proyecto

- `src/application/services/`: Servicios de la aplicación
- `src/domain/entities/`: Entidades del dominio
- `src/domain/repositories/`: Interfaces de repositorios del dominio
- `src/infrastructure/database/`: Modelos de base de datos y conexión
- `src/infrastructure/repositories/`: Implementaciones de repositorios
- `src/interfaces/controllers/`: Controladores de la API
- `src/interfaces/routes/`: Rutas de la API

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia 221245 DARIO ANTONIO GUTIERREZ ALVAREZ.

## Descripción de las Entidades

- **Usuario**: Representa a un usuario del sistema con atributos como nombre, email, contraseña y tiendas asociadas.
- **Tienda**: Representa una tienda con atributos como nombre y ubicación.

## Descripción de los Servicios

- **UserService**: Maneja la lógica de negocio relacionada con los usuarios, como creación, actualización, eliminación y obtención de usuarios.
- **StoreService**: Maneja la lógica de negocio relacionada con las tiendas.

## Descripción de los Repositorios

- **UserRepository**: Define las operaciones que se pueden realizar con los usuarios en la base de datos.
- **MongoUserRepository**: Implementación de `UserRepository` usando MongoDB.

## Ejemplos de Uso

### Crear un Usuario

```sh
curl -X POST http://localhost:5001/api/v1/usuarios -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john@example.com", "password": "123456"}'