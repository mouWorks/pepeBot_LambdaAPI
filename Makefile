.PHONY: clean build pack upload test

all: build pack upload

deploy: pack upload

BRANCH := $(shell git name-rev --name-only HEAD)

build:
	npm install --only=production

#AWS Lambda only support Zip, Can't use Tar file
pack:
	./pack.sh

upload:
	./upload.sh

test:
	mocha

pull:
	@echo ">>> Pull Code on Current branch [$(BRANCH)]"
	git pull origin $(BRANCH) --rebase

push:
	@echo ">>> Current branch [$(BRANCH)] Pushing Code"
	git push origin $(BRANCH)