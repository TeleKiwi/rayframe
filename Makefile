make:
	@cd src
	@tsc
	@cd ..
run:
	@node js/main.js
clean:
	@rm -rf js/game.js
	@rm -rf js/main.js