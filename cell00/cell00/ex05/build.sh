#!/bin/sh

# Capture the output of ls -l, excluding the "total" line
output=$(ls -l | grep -v "^total")


if [ $# -eq 0 ]; then 
    echo "No arguments supplied" 
else


    for i in "$@"
    do
        mkdir "ex$i"
        echo "$output ex$i"
    done
fi
