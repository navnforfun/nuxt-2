import Vuex from 'vuex'
import decks from '~/pages/decks/index.vue'
import axios from 'axios'
import res from 'core-js/internals/is-forced.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      decks: []
    },
    mutations: {
      addDeck(state, deck) {
        state.decks.push(deck)
      },
      editDeck(state, deck) {
        let deckIndex = state.decks.findIndex(d => d.id === deck.id)
        state.decks[deckIndex] = deck
      },
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
          }).catch(e => {
            console.log(e)
          })
      },
      addDeck(vuexCtx, deckData) {
        return axios.post('https://nuxt2-start-default-rtdb.asia-southeast1.firebasedatabase.app/decks.json', deckData)
          .then(res => {
            vuexCtx.commit('addDeck', { ...deckData, id: res.data.name })
          }).catch(e => {
            console.log(e)
          })
      },
      editDeck(vuexCtx, deckData) {
        return axios.put(`https://nuxt2-start-default-rtdb.asia-southeast1.firebasedatabase.app/decks/${deckData.id}.json`, deckData)
          .then(res => {
           vuexCtx.commit('editDeck',{ ...res.data, id:deckData.id })
          }).catch(e => {
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

