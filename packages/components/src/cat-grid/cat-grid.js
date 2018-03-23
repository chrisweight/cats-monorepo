import { CatsService } from '@cats/sdk'
import Filter from './cat-grid.filters'

export class CatGrid extends HTMLElement {
  createdCallback() {
    console.log('CatGrid.createdCallback()')

    this._service = new CatsService()

    this.innerHTML = `<div class="loading">LOADING...</div>`

    this._service
      .retrieve()
      .then(Filter)
      .then(imgs => this.innerHTML = `<div id="gifs">${imgs}</div>`)
      .catch(error => this.innerHTML = `<div class="error">ERROR! :[</div>`)
  }
}

document.registerElement('cat-grid', CatGrid)
