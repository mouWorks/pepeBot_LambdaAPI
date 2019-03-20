#!/bin/bash
base=$(basename $PWD) &&
cd .. &&
tar -czf code.tar.gz $base