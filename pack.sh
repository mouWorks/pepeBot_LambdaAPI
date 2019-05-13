#!/bin/bash
# -r : directory
# -1 : faster Zip
# -q : quiet

zip -r1q code.zip . -x *.git*