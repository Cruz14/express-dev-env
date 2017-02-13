#!/usr/bin/env bash

while read -r line; do
    export "$line"
done < <(grep -v ^# config.env | grep BEGIN)

export $(grep -v ^# config.env | grep -v BEGIN | xargs) && node server/start.js
