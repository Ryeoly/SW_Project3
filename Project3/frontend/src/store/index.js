import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pages: require('../data/page.json'),
    articles: require('../data/articles.json'),
    gamedatas: require('../data/game_data.json'),
    drawer: false,
    items: [
      {
        text: 'Home',
        href: '/home',
      },
      {
        text: 'About',
        href: '/home#about',
      },
      {
        text: 'Shop',
        href: '/shop'
      },
      {
        text: 'Rank',
        href: '#Rank'
      },
      {
        text: 'Community',
        href: '#Community'
      },
    ],
    genres: [
      {text: 'RPG'},
      {text: 'Action'},
      {text: 'FPS'},
      {text: 'Simulation'},
      {text: 'Video Game'},
      {text: 'Role Playing'},
      {text: 'Arcade'},
    ],
    lists: [
      {text: 'Rating'},
      {text: 'Release Date'},
      {text: 'Sales Volume'},
    ],
  },
  getters: {
    /*categories: state => {
      const categories = []

      for (const page of state.pages) {
        if (
          !page.category ||
          categories.find(category => category.text === page.category)
        ) continue

        const text = page.category

        categories.push({
          text,
          href: '#!',
        })
      }

      return categories
    },*/
    links: (state/*, getters*/) => {
      return state.items/*.concat(getters.categories)*/
    },
    genres: (state) => {
      return state.genres
    },
    lists: (state) => {
      return state.lists
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
  },
  actions: {

  },
})
