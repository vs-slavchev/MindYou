#!/bin/bash

find . -type f -name *.pid -exec rm -f {} \;
sbt run
