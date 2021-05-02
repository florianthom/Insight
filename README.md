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

### docker

`$ docker build -t personal-website-frontend .`

`$ docker run --rm -p 3000:3000 --name personal-website-frontend personal-website-frontend`

`$ docker ps -a`

`$ docker stop personal-website-frontend`

`$ docker rm personal-website-frontend`

`$ docker login --username=flooth`

`$ docker images`

`$ docker hub create repository via web-ui`

`$ docker tag personal-website-frontend:latest flooth/personal-website-frontend:latest`

`$ docker push flooth/personal-website-frontend:latest`

### kubernetes

`$ kubectl get nodes`

`$ kubectl apply -f ...`

`$ kubectl delete -f ...`

`$ kubectl get deployments`

`$ kubectl get services`


### minikube

`$ sudo chown -R $USER $HOME/.minikube; chmod -R u+wrx $HOME/.minikube`

`$ minikube start --driver=docker`

`$ minikube dashboard`

`$ minikube delete`

`$ minikube profile list`

`$ minikube service list`

`$ minikube addons enable ingress`

```
$ # get external minikube ip
$ minikube ip
```

```
$ # for testing
$ # here enter your random-domain name like # 192.168.49.2 florianthom.io
$ sudo vim /etc/hosts
```

## OpenAPI

- Generate openapi-api

`yarn run generate-openapi`

- Some sources for intro, how-to-use and specification
  - [How to use cli](https://openapi-generator.tech/docs/usage/)
  - [How to customize output of cli](https://openapi-generator.tech/docs/customization/)
  - [Online Generator](http://api.openapi-generator.tech/index.html)
  - [Interesting real-life usage](https://www.mokkapps.de/blog/how-to-generate-angular-and-spring-code-from-open-api-specification/)
  - [Interesting reddit-thread](https://www.reddit.com/r/typescript/comments/dhg9yv/do_you_use_any_swagger_generators_to_communicate/)

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
-   openapi-generator-cli

## Acknowledgements
Ideas and Designs of this project are based on a [project](https://www.youtube.com/watch?v=SC7lLm6QAb8&t=328s&ab_channel=DevonCrawford) of [Devon Crawford](https://github.com/DevonCrawford).
Thanks for the motivation and your projects in general. Hopefully you will continue your work.

[here]: https://github.com/FlorianTh2/homepageBackend
