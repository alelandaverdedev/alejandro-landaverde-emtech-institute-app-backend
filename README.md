# alejandro-landaverde-emtech-institute-app-backend

## Descripción

Este repositorio contiene el código fuente de la aplicación backend para la prueba tecnica de alejandro landaverde.

## Levantamiento del Proyecto con Docker Compose

Este documento proporciona instrucciones detalladas sobre cómo levantar el proyecto utilizando Docker Compose.

### Prerrequisitos

Asegúrate de tener instalados los siguiente:

- Docker
- Docker compose
- Node.js

### Pasos para Levantar el Proyecto

Sigue los pasos a continuación para levantar el proyecto en tu máquina local:

1. **Clonar el Repositorio:**

   Clona el repositorio desde GitHub:

   ```sh
   git clone https://github.com/alelandaverdedev/alejandro-landaverde-emtech-institute-app-backend.git

2. **Navegar al Directorio del Proyecto:**

   Cambia al directorio recién clonado:

   ```sh
   cd alejandro-landaverde-emtech-institute-app-backend
3. **.Env:**

   Se debe crear una copia del .env.template, pero siendo unicamente .env junto con los valores del template

   ```sh
   cd alejandro-landaverde-vergara
4. **Construir la Aplicación:**

   Construye la aplicación por primera vez utilizando Docker Compose y npm:

   ```sh
   npm install
   docker-compose up -d --build
5. **Ejecución de Seeders:**

   Ejecuta los seeders para crear una lista inicial de estudiantes

   ```sh
   docker-compose run --rm migrator npx sequelize-cli db:seed:all
   ```
   Esto creará una base de datos inicial con datos de prueba.

6. **Acceso a la Aplicación:**

   Una vez completados los pasos anteriores, la aplicación estará disponible en:
   ```sh
   URL: http://localhost:3000
   ```