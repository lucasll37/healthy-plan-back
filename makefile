init:
	docker container ls -aq | xargs docker container stop | xargs docker container rm -f
	docker compose up --build --remove-orphans

stop:
	docker compose stop

clear:
	docker compose down
	docker compose down --rmi all
	docker rm -f $(docker ps -aq)
	docker container ls -aq | xargs docker container stop | xargs docker container rm -f

db:
	docker run -p 5432:5432 \
      -e POSTGRESQL_USERNAME=root \
      -e POSTGRESQL_PASSWORD=docker \
      -e POSTGRESQL_DATABASE=api-healthy-plan \
      --name postgresql \
      -d bitnami/postgresql:latest

dev:
	npm run prisma:generate
	npm run prisma:dev
	npm run dev

test:
	npm run test

test-unit:
	npm run test:unit

test-e2e:
	npm run test:e2e
