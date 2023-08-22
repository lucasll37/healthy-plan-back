dev:
	docker compose up -d 
	npm run dev

test:
	npm run test:unit

up:
	docker compose up -d 

down:
	docker compose down