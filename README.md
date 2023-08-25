# Healthy Plan API

### node v18.17.x

## Routes Documentation
- [Swagger](http://localhost:3000/docs/)

## Necessary programs
- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Suggested extensions (for VSCode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)

## How to run
- Clone the repository
- Run `npm install` to install all dependencies.
- Run `make init` to start the database (with docker turned on).
- Consume API as per routes [documentation](http://localhost:3000/docs/).

## How to run tests
- Run `make test` to run all tests.

## Development
- Run `make dev` to start the database (with docker turned on) and the server and init backend application in development mode.

- Run `make db` to start the database (with docker turned on) only with prisma generate e migrations.

- Run `make start` 
- Run `make stop`
- Run `make clear`

## Environment variables
### Create a `.env` file in the root of the project and fill in the variables according to the `.env.example` file.

Example:
```
DATABASE_URL=mysql://root:docker@localhost/api-healthy-plan
JWT_SECRET=secret
PORT=3000
```