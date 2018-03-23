import DefaultHttpClient from '../http/http.client'

export default class CatsService {
  constructor(config, http) {
    this._config = config || {
      url: 'http://localhost:9999',
    }

    this._http = http || new DefaultHttpClient()
  }

  get() {
    return this._http.get(this._config.url)
  }
}
