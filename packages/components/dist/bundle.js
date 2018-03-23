(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@cats/sdk')) :
  typeof define === 'function' && define.amd ? define(['@cats/sdk'], factory) :
  (factory(global.CatsService));
}(this, (function (CatsService) { 'use strict';

  CatsService = CatsService && CatsService.hasOwnProperty('default') ? CatsService['default'] : CatsService;

  var Filter = urls => urls
    .map(url => `<img src="${url}" >`)
    .join('\n')

  class CatGrid extends HTMLElement {
    createdCallback() {
      console.log('CatGrid.createdCallback()');

      this._service = new CatsService();

      this.innerHTML = `<div class="loading">LOADING...</div>`;

      this._service
        .retrieve()
        .then(Filter)
        .then(imgs => this.innerHTML = `<div id="gifs">${imgs}</div>`)
        .catch(error => this.innerHTML = `<div class="error">ERROR! :[</div>`);
    }
  }

  document.registerElement('cat-grid', CatGrid);

})));
