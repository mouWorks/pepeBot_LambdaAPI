.PHONY: clean build pack upload

all: build pack upload

build:
	npm install --only=production

pack:
	./pack.sh
#	base=$(basename $PWD)
#	cd ..
#	tar -czf code.tar.gz $base
#	cd .. && tar -czf code.tar.gz /
	#zip -r code.zip . -x *.git*

upload:
	./upload.sh
