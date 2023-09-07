# Healthy Plan API
### node v18.17.x

## Roadmap
In development mode, when starting the application, a mass of mock data is inserted into the database by default to help the work of frontend developers. This data can be changed in the `.src/mocks/data.ts` file. If you want to manually explore and verify business rules through API routes (via Swagger), follow these steps:

- Create a personal trainer instance (Trainer).
- Create a session with the previously created personal credentials.
- With the received token, login to be able to access all the application's other routes.
- With the session open and duly accredited, I create a student (Athlete)
- Having created the personal trainer, student and started the session, explore the other functionalities in the way you want, always attentive to the schemas of the intended requests.
## Routes Documentation
With the application running in development mode (default):
- [Swagger](http://localhost:3000/docs/)

## Necessary programs
- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Suggested extensions (for VSCode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)

## Docker utils:
- Force stop and remove all containers:
    ```
    docker rm $(docker ps -a -q) -f
    ```

## How to run
- Clone the repository (ssh):
    ```
    git clone git@github.com:lucasll37/healthy-plan-back.git
    ```
    ou (https):
    ```
    git clone https://github.com/lucasll37/healthy-plan-back.git
    ```
- Install all dependencies:
    ```
    npm install
    ```
- Make sure docker is up and running.

- Start the relational database:
    ```
    docker run -p 5432:5432 -e POSTGRESQL_USERNAME=root -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=api-healthy-plan -d bitnami/postgresql:latest
    ```
- Start the cache database (optional):
    ```
    docker run -p 6379:6379 -d redis:latest
    ```
- Apply database schema (migrations):
    ```
    npm run prisma:generate
    npm run prisma:deploy
    ```
- Build the application:
    ```
    npm run build
    ```
- Start the application:
    ```
    npm run start
    ```
- Consume API as per routes [documentation](http://localhost:3000/docs/).

## Development
- Execute the steps of **How to run**, replacing `npm run prisma:deploy`,
`npm run build` e `npm run start` with the commands:
    ```
    npm run prisma:dev
    npm run dev
    ```

## How to run tests
- Run unit tests:
    ```
    npm run test:unit
    ```
- Run e2e (end-to-end) tests (with server on):
    ```
    npm run test:e2e
    ```
- Run load tests (with server on):
    ```
    npm run test:load
    ```
- Run code static analysis:
    - Start Sonarqube aplicattion:
        ```
        docker run -p 9000:9000 -p 9092:9092 --network host -d sonarqube:latest
        ```
    - Start Sonarqube scanner:
        ```
        npm run sonar:scanner
        ```
    - Afer scan, access Sonarqube dashboard:
        ```
        http://localhost:9000/
        ```
        with credentials:
        ```
        login: admin
        password: admin
        ```

    Obs.: The e2e tests need the relational database application to be running.

## Environment variables
### Create a `.env` file in the root of the project and fill in the variables according to the `.env.example` file.

Example:
```
DATABASE_URL="postgresql://root:docker@localhost:5432/api-healthy-plan?schema=public"
CACHE_URL="redis://localhost:6379"
JWT_SECRET=dummy-secret
HOST=localhost
PORT=3000
```
