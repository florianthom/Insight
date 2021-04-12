# Personal-Website

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Frontend-Project to create my personal website. The backend-code can be found [here].

## Prerequisites

-   yarn v1.22+
-   node v12+

## Getting Started

`$ git clone git@github.com:FlorianTh2/Personal-Website.git`

`$ cd ./Personal-Website`

`$ yarn install`

`$ yarn dev`

## Important commands

`$ yarn format`

`$ yarn lint`

## docker

`$ docker build -t personal-website-frontend .`

`$ docker run --rm -p 3000:3000 --name personal-website-frontend personal-website-frontend`

`$ docker ps -a`

`$ docker stop personal-website-frontend`

`$ docker rm personal-website-frontend`

`$ docker login --username=flooth --email=thom.florian@yahoo.de`

`$ docker images`

`$ docker hub create repository via web-ui`

`$ docker tag personal-website-frontend:latest flooth/personal-website-frontend:latest`

`$ docker push flooth/personal-website-frontend:latest`

## Build with

-   yarn v1
-   React v17
-   Next.js v10
-   React-Query v3
-   reduxjs-toolkit
-   jest
-   React Testing Library
-   TypeScript v4
-   ESLint
-   Prettier
-   Tailwindcss v2

## Acknowledgements

--

[here]: https://github.com/FlorianTh2/homepageBackend
