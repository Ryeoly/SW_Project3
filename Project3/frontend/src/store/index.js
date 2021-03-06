import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[
    createPersistedState()
  ],
  state: {
    pages: require('../data/page.json'),
    articles: require('../data/articles.json'),
    itemdata: [],
    recommenddata: [],
    reviewdata: [],
    qnadata: [],
    count: [],
    baskets: [],
    genredata: null,
    monthdata: null,
    selldata: null,
    drawer: false,
    islogin:false,
    userdata : [],
    useridx: "1",
    useremail:"aaaaaa",
    adminidx:"2",
    adminname:"관리자",
    adminemail:"dtree0520@gmail.com",

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
    bar_link: (state) => {
      return state.items
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
    saveemail:(state, data)=>(state.useremail=data),
    save_item_data:(state, data)=>(state.itemdata= data),
    save_search_data:(state, data)=>(state.searchdata= data),
    save_rec_data:(state, data)=>(state.recommenddata= data),
    save_rev_data:(state, data)=>(state.reviewdata= data),
    save_qna_data:(state, data)=>(state.qnadata= data),
    save_free_data:(state, data)=>(state.freedata= data),
    save_count:(state, data)=>(state.count= data),
    save_basket:(state, data)=>(state.baskets= data),
    p_Amount:(state, idx)=>(
        state.baskets[idx].amount += 1, state.baskets[idx].total_price += state.baskets[idx].price),
    m_Amount:(state, idx)=>(
        state.baskets[idx].amount -= 1, state.baskets[idx].total_price -= state.baskets[idx].price),
    delete_item:(state, obj)=>(state.baskets = obj),
    set_genre_data:(state, data)=>(state.genredata = data),
    set_month_data:(state, data)=>(state.monthdata = data),
    set_sell_data:(state, data)=>(state.selldata = data)
  },
  actions: {

  },
})
