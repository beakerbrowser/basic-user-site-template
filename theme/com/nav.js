import { LitElement, html } from '../vendor/lit-element.js'; 

class Nav extends LitElement {
  static get properties() {
    return {
      items: Array
    }
  }

  constructor() {
    super()
    this.items = []
  }

  render() {
    return html`
      <link rel="stylesheet" href="/theme/vendor/bulma.min.css">
      <link rel="stylesheet" href="/theme/vendor/font-awesome.min.css">
      <style>
        .fas {
          margin-right: 0.4rem;
        }
      </style>
      <div class="tabs is-medium">
        <ul>
          ${this.items.map(item => html`
            <li class="${this.isActive(item.href) ? 'is-active' : ''}">
              <a href=${item.href} title=${item.label}>
                ${''/*<i class=${this.getIcon(item.label)}></i>*/} ${item.label}
              </a>
            </li>
          `)}
        </ul>
      </div>
    `
  }

  isActive (href) {
    return window.location.pathname === href
  }

  getIcon (label) {
    switch (label) {
      case 'Home': return 'fas fa-fw fa-home'
      case 'Blog': return 'fas fa-fw fa-pencil-alt'
      case 'Modules': return 'fas fa-fw fa-code'
      default: return 'fas fa-fw fa-file-alt'
    }
  }
}

customElements.define('x-nav', Nav)
