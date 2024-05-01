import Vuex from 'vuex'
import decks from '~/pages/decks/index.vue'
import res from 'core-js/internals/is-forced.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      decks: [],
      token: null
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
      },
      setToken(state, token) {
        state.token = token
      }
    },
    actions: {
      nuxtServerInit(vuexCtx, ctx) {
        return ctx.app.$axios.$get(process.env.baseApiUrl + 'decks.json')
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
        return this.$axios.$post(process.env.baseApiUrl + 'decks.json?auth=' + vuexCtx.state.token, deckData)
          .then(data => {
            vuexCtx.commit('addDeck', { ...deckData, id: data.name })
          }).catch(e => {
            console.log(e)
          })
      },
      editDeck(vuexCtx, deckData) {
        return this.$axios.$put(process.env.baseApiUrl + `decks/${deckData.id}.json?auth=` + vuexCtx.state.token, deckData)
          .then(data => {
            vuexCtx.commit('editDeck', { ...data, id: deckData.id })
          }).catch(e => {
            console.log(e)
          })
      },
      setDecks(vuexContext, decks) {
        vuexContext.commit('setDecks', decks)
      },
      authenticate(vuexCtx, credentials) {
        return new Promise((resolve, reject) => {
          let authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`
          if (!credentials.isLogin) {
            authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`
          }
          console.log(credentials)
          this.$axios.$post(authUrl, {
            email: credentials.email,
            password: credentials.pass,
            returnSecureToken: true
          }).then(data => {
            console.log(data)
            vuexCtx.commit('setToken', data.idToken)
            resolve({ success: true })
          }).catch(e => {
            reject(e.response)
          })
        })
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

