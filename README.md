# Prueba backend

Este proyecto es un sistema backend para gestionar usuarios, y camiones. Está construido con Node.js, Express y MongoDB, utilizando TypeScript para la seguridad de tipos y mejor experiencia del desarrollador.

## Características

- Patrón Repositorio.
- Interfaces.
- Autenticación y autorización de usuarios.
- Gestión de usuarios (operaciones CRUD).
- Middleware personalizado para autenticación.
- Integración con MongoDB para la persistencia de datos.
- TypeScript para mejorar la comprobación de tipos y la calidad del código.


## ¿Por qué elegí el Patrón Repositorio?

El Patrón Repositorio es una abstracción que actúa como intermediario entre la lógica de negocio de la aplicación y la capa de acceso a datos (en este caso, MongoDB). Su implementación ofrece ventajas clave en proyectos escalables y mantenibles.


## Dominio protegido
Los servicios de negocio dependen de abstracciones (interfaces), no de detalles concretos (MongoDB). 


## Interfaces como contrato

Definí interfaces para los repositorios (ej: IUserService y IUserRepository), garantizando que las implementaciones cumplan con los métodos requeridos. TypeScript valida estos contratos en tiempo de compilación.

- Ventaja: Las interfaces documentan el comportamiento esperado y facilitan el trabajo en equipo.


## Tecnologías

- Nodejs
- TypeScript
- Express: Framework ágil para la API.
- MongoDB
- Mongoose (ODM)
- bcrypt: Encriptación de contraseñas.
- JSON Web Tokens (JWT) para la autenticación segura mediante tokens.
- REST Client (VSCode): Pruebas de endpoints sin salir del editor.

## Estructura del proyecto

El proyecto está organizado en varios directorios clave:

- `src/`: Contiene el código fuente TypeScript.
  - `config/`: Configuración de mongoDB.
  - `controllers/`: Maneja el procesamiento de solicitudes y la generación de respuestas.
  - `middlewares/`: Middleware personalizado para autenticación y permisos.
  - `models/`:  Modelos Mongoose para la interacción con la base de datos.
  - `repositories/`:  Capa de acceso a datos para operaciones de base de datos.
  - `routes/`: rutas de la API.
  - `services/`: Capa de lógica de negocio.
  - `types/`: Definiciones de interfaces para la creacion del proyecto.
  - `http/`: Archivos HTTP proporcionados para interactuar con la API.
- `@types/`: Definiciones de tipos personalizadas para bibliotecas externas.
- `app.ts`: Configuración del servidor local.
- `.env`:  variables de entorno.

## Uso

La API proporciona endpoints para la gestión de usuarios, autenticación y operaciones de los camiones. Se puede utilizar herramientas como Postman o los archivos HTTP proporcionados (`auth.http`, `users.http`, `trucks.http`) para interactuar con la API.

- Estos archivos se encuentran en la carpeta http y es necesaria la extension REST Client de VSCode

### Endpoints

- Autenticación: `/api/auth/login`, `/api/auth/register`
- Users: `/api/users`
- Trucks: `/api/trucks`

## Desarrollo

Para el desarrollo, utilice el siguiente script npm:

- `npm run dev`: Inicia el servidor de desarrollo

## Conclusión

El Patrón Repositorio no solo organizó el código, sino que lo hizo resistente a cambios, fácil de testear y escalable.