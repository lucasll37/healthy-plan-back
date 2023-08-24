init:
	# docker container ls -aq | xargs docker container stop | xargs docker container rm
	docker compose up --build --remove-orphans

start:
	docker compose start

stop:
	docker compose stop

clean:
	docker compose down
	docker compose down --rmi all
	docker rm -f $(docker ps -aq)
	
dev:
	# docker container ls -aq | xargs docker container stop | xargs docker container rm

	docker run -p 3306:3306 \
		-e MYSQL_ROOT_PASSWORD=docker \
		-e MYSQL_DATABASE=api-healthy-plan \
		-d mysql:latest

	sleep 10
	npm run prisma:generate
	npm run prisma:dev
	npm run prisma:deploy
	npm run dev

test:
	npm run test

test-unit:
	npm run test:unit

test-e2e :
	npm run test:e2e