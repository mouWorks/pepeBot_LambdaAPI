.PHONY: clean build upload
build:
	npm install --only=production
	zip -r code.zip . -x *.git*
	./upload.sh
