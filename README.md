# MERN expense tracker

Created after following [this])(https://www.youtube.com/watch?v=KyWaXA_NvT0) tutorial.

## Run development

- run `npm install` in root and client folder
- change NODE_ENV to development in config/config.env
- run mongo in docker: `docker-compose up --build`
- run server and development react client `npm run dev`

## Run production

- but it's not safe to run in production without securing mongo better
- run `npm install` in root and client folder
- change NODE_ENV to production in config/config.env
- run mongo in docker: `docker-compose up --build`
- build client (run in folder client): `npm run build`
- run app (run in root folder): `npm start`

## Notes

- colors - pakcage for colors in console
- morgan - for logging
- concurrently - run more node apps concurrently on different ports
- npm run build in client for production
- creates build folder which can be deployed
- use this for serving static react app via express
```js
app.use(express.static('client/build'));
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname,"client","build","index.html")))
```