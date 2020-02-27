# Forex fun

Simple and fun experimental project using docker, angular and express.

- [x] Currency search single
- [x] Currency search multiple
- [ ] Currency timeline
- [ ] Currency Purchase compare

## Notes
Projects have been broken apart and will not use the traditional stack to emulate real world production deployment where apps are deployed separately.
Ensure that ports `3000` & `4200` are open on your pc.

## Angular -> forex-fun
Frontend angular application - single page.
`http://localhost:3000/`

## Express -> forex-node
Express service using routing-controllers to manage incoming api requests
`http://localhost:4200/`

## Install and run
- Download and install docker https://www.docker.com/
- Run the docker compose file `docker-composer up --build`


### Resources
https://openrates.io/
https://angular.io/
https://expressjs.com/
