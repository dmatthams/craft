.PHONY: install

install:
	nitro craft install
	nitro craft plugin/install mix
	nitro npm install