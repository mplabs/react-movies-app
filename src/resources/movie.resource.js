import { from } from 'rxjs'

export class MovieResource {
  get baseDataUrl() {
    return `https://www.omdbapi.com/?apikey=${this._apiKey}`
  }

  constructor(apiKey) {
    this._apiKey = apiKey
  } 

  list(title) {
    const qTitle = encodeURIComponent(title.toLowerCase())
    return from(fetch(`${this.baseDataUrl}&s=${qTitle}`).then(res => res.json()))
  }
}
