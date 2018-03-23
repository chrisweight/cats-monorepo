import { CatsService } from '@cats/sdk';

var Filter = urls => urls
  .map(url => `<img src="${url}" >`)
  .join('\n')

class CatGrid extends HTMLElement {
  createdCallback() {
    this._service = new CatsService();

    this.innerHTML = '<div class="loading">LOADING...</div>';

    this._service
      .get()
      .then(Filter)
      .then(imgs => this.innerHTML = `<div id="gifs">${imgs}</div>`)
      .catch(error => this.innerHTML = `<div class="error">ERROR!<br> ${error.message || ':['}</div>`);
  }
}

document.registerElement('cat-grid', CatGrid);

export { CatGrid };
