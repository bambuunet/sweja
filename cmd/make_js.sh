#!/bin/sh

while read line
do
  echo $line >> s.txt
done < $1
