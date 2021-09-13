.PHONY: install

install:
	nitro craft setup/app-id \
		$(filter-out $@,$(MAKECMDGOALS))
	nitro craft setup/security-key \
		$(filter-out $@,$(MAKECMDGOALS))
	nitro craft install \
		$(filter-out $@,$(MAKECMDGOALS))
	nitro craft plugin/install mix
