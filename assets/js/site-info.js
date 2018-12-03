const site = new DatArchive(window.location)

export class SiteInfo {
  static async fetch () {
    var info = await site.getInfo()
    return {
      title: info.title,
      description: info.description,
      domain: (new URL(window.location)).hostname,
      thumbUrl: '/thumb.png'
    }
  }
}
