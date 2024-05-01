import Vuex from 'vuex'
import decks from '~/pages/decks/index.vue'
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
        return ctx.app.$axios.$get(process.env.baseApiUrl+'decks.json')
          .then((data) => {
            let decksArr = []
            // console.log(response.data)
            for (let key in data) {
              decksArr.push({ ...data[key], id: key })
            }
            // console.log(decksArr)
            vuexCtx.commit('setDecks', decksArr)
          }).catch(e => {
            console.log(e)
          })
      },
      addDeck(vuexCtx, deckData) {
        return this.$axios.$post(process.env.baseApiUrl+'decks.json', deckData)
          .then(data => {
            vuexCtx.commit('addDeck', { ...deckData, id: data.name })
          }).catch(e => {
            console.log(e)
          })
      },
      editDeck(vuexCtx, deckData) {
        return  this.$axios.$put(process.env.baseApiUrl+`decks/${deckData.id}.json`, deckData)
          .then(data => {
           vuexCtx.commit('editDeck',{ ...data, id:deckData.id })
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

