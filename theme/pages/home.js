import { LitElement, html } from '../vendor/lit-element.js';
import { Feed } from '../lib/feed.js'

import '../com/feed.js'
import '../com/following.js'

class Homepage extends LitElement {
  static get properties () {
    return {
      siteInfo: Object,
      posts: Array,
      followedUsers: Array
    }
  }

  constructor() {
    super()
    this.posts = []
    this.followedUsers = []
    this.load()
  }

  async load () {
    this.posts = await Feed.list({reverse: true})
    this.followedUsers = [
      {url: window.location, thumbUrl: '/data/metadata/beakerbrowser.com/thumb.png', displayName: 'Beaker browser', bio: 'An experimental p2p Web browser'},
      {url: window.location, thumbUrl: '/data/metadata/mafintosh.com/thumb.jpg', displayName: 'Mafintosh', bio: 'Creator of the Dat protocol'},
      {url: window.location, thumbUrl: '/data/metadata/taravancil.com/thumb.jpg', displayName: 'Tara Vancil', bio: 'Creator of the Beaker browser'},
      {url: window.location, thumbUrl: '/data/metadata/hashbase.io/thumb.jpg', displayName: 'Hashbase', bio: 'A public hosting service for the peer-to-peer Web'},
      {url: window.location, thumbUrl: '/thumb.png', displayName: 'Paul Frazee', bio: 'Creator of the Beaker browser'}
    ]
  }

  render() {
    return html`
      <link rel="stylesheet" href="/theme/vendor/bulma.min.css">
      <x-feed .siteInfo=${this.siteInfo} .posts=${this.posts}></x-feed>
    `
  }
}

customElements.define('x-homepage', Homepage)
