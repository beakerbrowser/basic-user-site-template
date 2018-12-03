import { LitElement, html } from './vendor/lit-element.js'
import { SiteInfo } from './lib/site-info.js'

import './com/nav.js'
import './com/avatar.js'
import './com/hero.js'

import './pages/home.js'
import './pages/blog.js'
import './pages/pages.js'
import './pages/404.js'

const PAGES = [
  {href: '/', label: 'Feed', render: (theme) => html`<x-homepage .siteInfo=${theme.siteInfo}></x-homepage>`},
  {href: '/blog', label: 'Blog', render: (theme) => html`<x-blog .siteInfo=${theme.siteInfo}></x-blog>`},
  {href: '/pages', label: 'Pages', render: (theme) => html`<x-pages .siteInfo=${theme.siteInfo}></x-pages>`}
]

class Theme extends LitElement {
  static get properties () {
    return {
      siteInfo: Object
    }
  }

  constructor () {
    super()
    this.siteInfo = {}
    this.load()
  }

  async load () {
    this.siteInfo = await SiteInfo.fetch()
    console.log(this.siteInfo)
  }

  render() {
    return html`
      <link rel="stylesheet" href="/theme/vendor/bulma.min.css">
      <style>
        .banner {
          object-fit: cover;
          height: 300px;
          width: 100%;
        }
        @media screen and (min-width: 1472px) {
          .container {
            max-width: 1152px;
            width: 1152px;
          }
        }
        @media screen and (min-width: 769px) {
          .left {
            margin-top: -100px;
          }
        }
        @media screen and (max-width: 1088px) {
          .container {
            padding: 0 1rem;
          }
        }
        x-avatar,
        x-hero,
        x-nav {
          display: block;
          margin-bottom: 1rem;
        }
        x-hero {
          padding: 0 5px;
        }
        x-nav {
          margin-bottom: 1.5rem;
        }
      </style>
      <img class="banner" src="/banner.jpg">
      <div class="container">
        <div class="columns">
          <div class="column is-one-fifth left">
            <x-avatar src=${this.siteInfo.thumbUrl}></x-avatar>
            <x-hero displayName=${this.siteInfo.title} bio=${this.siteInfo.description}></x-hero>
          </div>
          <div class="column is-four-fifths">
            <x-nav .items=${PAGES}></x-nav>
            ${this.page}
          </div>
        </div>
      </section>
    `
  }

  get page () {
    var page = PAGES.find(p => p.href === window.location.pathname)
    if (!page) {
      return html`<x-404></x-404>`
    }
    return page.render(this)
  }
}

customElements.define('x-theme', Theme)
