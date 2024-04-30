import Vuex from 'vuex'
import decks from '~/pages/decks/index.vue'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      decks: []
    },
    mutations: {
      setDecks(state, decks) {
        state.decks = decks
      }
    },
    actions: {

      nuxtServerInit(vuexCtx, ctx) {
        return axios.get('https://nuxt2-start-default-rtdb.asia-southeast1.firebasedatabase.app/decks.json')
          .then((response) => {
          let decksArr = []
            // console.log(response.data)
          for (let key in response.data) {
            decksArr.push({ ...response.data[key], id: key })
          }
          // console.log(decksArr)
          vuexCtx.commit('setDecks', decksArr)
        }).catch(e =>{
          console.log(e)
          })
      },
      setDecks(vuexContext, decks) {
        vuexContext.commit('setDecks', decks)
      }
    },
    getters: {
      decks(state) {
        return state.decks
      }
    }
  })
}
export default createStore

