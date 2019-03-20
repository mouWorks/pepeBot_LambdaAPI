#!/bin/bash
aws lambda update-function-code \
--zip-file=fileb://code.tar.gz \
--region=us-west-2 \
--function-name=PepeBot

