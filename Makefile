.PHONY: install

install:
	nitro craft install
	nitro craft plugin/install mix-manifest
	nitro craft autocomplete/generate
	nitro npm install
