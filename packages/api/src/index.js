const http 		= require('http')
const service = require('./cats-api.service')
const filter 	= require('./cats-api.filters')

const PORT				= 9999
const contentType = { 'Content-Type': 'application/json' }
const encoding 		= 'utf-8'

http
  .createServer((request, response) => {
    service
      .get()
      .then(filter)
      .then((result) => {
        response.writeHead(200, contentType)
        response.end(JSON.stringify(result), encoding)
      })
      .catch((error) => {
        response.writeHead(500, contentType)
        response.end(JSON.stringify(error), encoding)
      })
  })
  .listen(PORT)

// eslint-disable-next-line no-console
console.log(`Server running at http://127.0.0.1:${PORT}/`)
