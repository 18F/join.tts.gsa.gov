#!/usr/bin/env bash

# Re-building the site is kind of a hack. For now it's required to run the tests _inside_ a Docker container.
#  1. --host 0.0.0.0 is required for Docker -> Host networking & normal development
#  2. curling 0.0.0.0, localhost, etc. does not work in most Docker containers (need to curl hostname)
#  3. re-building the site here w/o a specified host gives us geneated links that don't have 0.0.0.0 in them

docker-compose run web bundle exec jekyll build
docker-compose run web bundle exec rake test