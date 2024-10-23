#!/bin/bash                                

if [ $# -eq 0 ]; then 
    echo "No arguments supplied"
elif [ $# -le 2 ]; then 
    echo "$1"
    echo "$2"
else 
    echo "$1"
    echo "$2"
    echo "!"
fi

