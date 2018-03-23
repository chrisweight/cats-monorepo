(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('cross-fetch')) :
  typeof define === 'function' && define.amd ? define(['exports', 'cross-fetch'], factory) :
  (factory((global.myBundlee = {}),global.fetch));
}(this, (function (exports,fetch) { 'use strict';

  fetch = fetch && fetch.hasOwnProperty('default') ? fetch['default'] : fetch;

  class DefaultHttpClient {
    formatQueryString(params) {
      return (params && Object.keys(params).length)
        ? Object
          .keys(params)
          .map(i => `${encodeURIComponent(i)}=${encodeURIComponent(params[i])}`, '')
          .join('&')
        : undefined
    }

    get(url, params) {
      const _params = this.formatQueryString(params);

      const _url = _params !== undefined
        ? `${url}?${this.formatQueryString(params)}`
        : url;

      // eslint-disable-next-line no-console
      console.log(`HttpService.get(${_url}`);

      return fetch(_url)
        .then(res => res.json())
    }

    /**
	 * post(), put(), patch(), delete(), etc....
	 */
  }

  class CatsService {
    constructor(config, http) {
      this._config = config || {
        url: 'http://localhost:9999',
      };

      this._http = http || new DefaultHttpClient();
    }

    get() {
      return this._http.get(this._config.url)
    }
  }

  exports.DefaultHttpClient = DefaultHttpClient;
  exports.CatsService = CatsService;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
