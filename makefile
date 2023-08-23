init:
	docker compose up --build --remove-orphans

start:
	docker compose start

stop:
	docker compose stop

clean:
	docker compose down
	docker compose down --rmi all