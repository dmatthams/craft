.PHONY: install

install:
	nitro craft install
	nitro craft plugin/install mix
	nitro craft autocomplete/generate
	nitro npm install
