import fetch from 'cross-fetch'

export default class DefaultHttpClient {
  formatQueryString(params) {
    return (params && Object.keys(params).length)
      ? Object
        .keys(params)
        .map(i => `${encodeURIComponent(i)}=${encodeURIComponent(params[i])}`, '')
        .join('&')
      : undefined
  }

  get(url, params) {
    const _params = this.formatQueryString(params)

    const _url = _params !== undefined
      ? `${url}?${this.formatQueryString(params)}`
      : url

    // eslint-disable-next-line no-console
    console.log(`HttpService.get(${_url}`)

    return fetch(_url)
      .then(res => res.json())
  }

  /**
	 * post(), put(), patch(), delete(), etc....
	 */
}
