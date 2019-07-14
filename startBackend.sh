#!/usr/bin/env bash

docker start postgres
docker-compose --file ~/projects/react-graphql-github-apollo-starter-kit/backend/docker-compose.yml up -d