#!/bin/bash
file_count=$(ls -1A | wc -l)s
current_path=$(pwd)
parent_directory=$(dirname "$current_path")
echo "$parent_directory"
echo "Count of files in current directory is: $file_count"

# echo "Files: $(find . -maxdepth 1 -type f | wc -l), Directories: $(find . -maxdepth 1 -type d | wc -l)"
