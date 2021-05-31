import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pages: require('../data/page.json'),
    articles: require('../data/articles.json'),
    itemdata: [],
    recommenddata: [],
    reviewdata: [],
    qnadata: [],
    count: [],
    baskets: [],
    search_product: "not change",
    drawer: false,
    islogin:false,
    userdata : [],
    useridx: "1",
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
        href: '/Rank'
      },
      {
        text: 'Community',
        href: '/Community'
      },
    ],
    genres: [
      {text: 'ALL'},
      {text: 'RPG'},
      {text: 'Action'},
      {text: 'FPS'},
      {text: 'Simulation'},
      {text: 'Video Game'},
      {text: 'Role Play'},
      {text: 'Arcade'},
    ],
    lists: [
      {text: 'Best Sale', value: 'sold_num'},
      {text: 'Release Date', value: 'release_day'},
      {text: 'Rating', value: 'star'},
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
    },
    return_islogin:(state)=>{
      return state.islogin
    },
    useridx:(state)=>{
      return state.useridx
    },
  },
  mutations: {
    search_product_set: (state, payload)=>(state.search_product = payload),
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
    islogin_reverse:state=>( state.islogin = !state.islogin),

    saveuser:(state, data)=>(state.userdata = data),
    saveidx:(state, data)=>(state.useridx=data),
    save_item_data:(state, data)=>(state.itemdata= data),
    save_rec_data:(state, data)=>(state.recommenddata= data),
    save_rev_data:(state, data)=>(state.reviewdata= data),
    save_qna_data:(state, data)=>(state.qnadata= data),
    save_count:(state, data)=>(state.count= data),
    save_basket:(state, data)=>(state.baskets= data),
    p_Amount:(state, idx)=>(
        state.baskets[idx].amount += 1, state.baskets[idx].total_price += state.baskets[idx].price),
    m_Amount:(state, idx)=>(
        state.baskets[idx].amount -= 1, state.baskets[idx].total_price -= state.baskets[idx].price),
    delete_item:(state, obj)=>(state.baskets = obj),


  },
  actions: {

  },
})
