.PHONY: clean build pack upload

all: build pack upload

build:
	npm install --only=production

#AWS Lambda only support Zip, Can't use Tar file
pack:
	./pack.sh

upload:
	./upload.sh
