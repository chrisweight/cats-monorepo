const http 		= require('http');
const service = require('./cats-api.service')
const filter  = require('./cats-api.filters')

http
	.createServer((request, response) => {
		service
			.get()
			.then(filter)
			.then(result => {
				response.writeHead(200, { 'Content-Type': 'application/json' });
		response.end(JSON.stringify(result), 'utf-8');
			})
			.catch(error => {
				response.writeHead(500, { 'Content-Type': 'application/json' });
		response.end(JSON.stringify(error), 'utf-8');
			})
	})
	.listen(9999)

	console.log('Server running at http://127.0.0.1:9999/');
