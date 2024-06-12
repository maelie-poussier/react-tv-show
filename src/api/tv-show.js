import { BASE_URL, API_KEY_PARAM } from "../config"

export class TVShowAPI {

  static async fetchPopulars() {
    return fetch(`${BASE_URL}/tv/popular${API_KEY_PARAM}`)
      .then(response => response.json())
      .then((data) => {
        return data.results;
      })
  }

  static async fetchRecommandations(tvShowId) {
    return fetch(`${BASE_URL}/tv/${tvShowId}/recommendations${API_KEY_PARAM}`)
      .then(response => response.json())
      .then((data) => {
        return data.results;
      })
  }

  static async fetchByTitle(title) {
    return fetch(`${BASE_URL}/search/tv${API_KEY_PARAM}&query=${title}`)
      .then(response => response.json())
      .then((data) => {
        return data.results;
      })
  }
}
