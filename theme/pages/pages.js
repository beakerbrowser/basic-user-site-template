import { LitElement, html } from '../vendor/lit-element.js'

class Pages extends LitElement {
  static get properties () {
    return {
      siteInfo: Object
    }
  }

  constructor() {
    super()
    this.pages = []
    this.load()
  }

  async load () {
    var site = new DatArchive(window.location)
    this.pages = [
      {href: '#', title: 'I <3 Cats', description: 'A site dedicated to how much I <3 cats.', img: 'https://bulma.io/images/placeholders/1280x960.png'},
      {href: '#', title: 'I <3 Cats', description: 'A site dedicated to how much I <3 cats.', img: 'https://bulma.io/images/placeholders/1280x960.png'},
      {href: '#', title: 'I <3 Cats', description: 'A site dedicated to how much I <3 cats.', img: 'https://bulma.io/images/placeholders/1280x960.png'},
      {href: '#', title: 'I <3 Cats', description: 'A site dedicated to how much I <3 cats.', img: 'https://bulma.io/images/placeholders/1280x960.png'},
      {href: '#', title: 'I <3 Cats', description: 'A site dedicated to how much I <3 cats.', img: 'https://bulma.io/images/placeholders/1280x960.png'}
    ]
    this.requestUpdate()
  }

  render() {
    return html`
      <link rel="stylesheet" href="/theme/vendor/bulma.min.css">
      <style>
        .card.tile.is-child {
          margin: 0.5rem !important;
        }
        a.card.tile.is-child:hover {
          outline: 1px solid hsl(204, 86%, 53%);
        }
      </style>
      ${this.pageRows.map(pageRow => html`
        <div class="tile is-ancestor">
          ${pageRow.map(page => page ? html`
            <a class="card tile is-child" href="${page.href}">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="${page.img}">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">${page.title}</p>
                  </div>
                </div>
                <div class="content">${page.description}</div>
              </div>
            </a>
          ` : html`<div class="card tile is-child"></div>`)}
        </div>
      `)}
    `
  }

  get pageRows () {
    var pageRows = []
    for (let i = 0; i < this.pages.length; i += 3) {
      pageRows.push([
        this.pages[i + 0],
        this.pages[i + 1],
        this.pages[i + 2]
      ])
    }
    return pageRows
  }
}

customElements.define('x-pages', Pages)