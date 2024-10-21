#!/bin/bash
file_count=$(ls -1A | wc -l)s
current_path=$(pwd)
parent_directory=$(dirname "$current_path")
echo "$parent_directory"
echo "Count of files in current directory is: $file_count"

