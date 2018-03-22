const http = require('https')

class CatsAPIService {

	constructor() {
		console.info('CatsAPIService()')
		this.sourceUrl = "https://www.reddit.com/r/cats/search.json?q=cat+gif&restrict_sr=on&sort=relevance&t=all"
	}

	get() {
		console.info('CatsAPIService.get()')

		return new Promise((resolve, reject) => {
			http.get(this.sourceUrl, response => {
				console.log('CatsAPIService.get() -> loaded!')

				const { statusCode } = response
			const contentType = response.headers['content-type']

				if (statusCode !== 200) {
					response.resume();
					return reject(new Error('Request Failed.\n' + `Status Code: ${statusCode}`))
				}

				let _data = ''

				response.setEncoding('utf8');

				response.on('data', chunk => _data += chunk)

			response.on('end', () => {
					try {
						const _parsed = JSON.parse(_data)
						resolve(_parsed.data.children)
					} catch (e) {
						console.log(e)
						reject(e)
					}
				});
			})
		})
	}
}

module.exports = new CatsAPIService()
