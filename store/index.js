import Vuex from 'vuex'
import decks from '~/pages/decks/index.vue'
import res from 'core-js/internals/is-forced.js'
import Cookies from 'js-cookie'

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
      },
      clearToken(state) {
        state.token = null
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
            localStorage.setItem('token', data.idToken)
            localStorage.setItem('tokenExpiration', new Date().getTime() + data.expiresIn * 1000)
            Cookies.set('token', data.idToken)
            Cookies.set('tokenExpiration', new Date().getTime() + data.expiresIn * 1000)
            vuexCtx.dispatch('setLogoutTimer', data.expiresIn * 1000)
            resolve({ success: true })
          }).catch(e => {
            reject(e.response)
          })
        })
      },
      setLogoutTimer(vuexCtx, duration) {
        setTimeout(() => {
          vuexCtx.commit('clearToken'), duration
        })
      },
      initAuth(vueCtx, req) {
        let token, tokenExpiration
        if (req) {
          if (!req.header.cookies) return false
          let tokenKey = req.headers.cookies.split(";").find(c => c.trim().startsWith("token="))
          let tokenExpirationKey = req.headers.cookies.split(";").find(c => c.trim().startsWith("tokenExpiration="))
          if(!tokenKey || !tokenExpirationKey) return false
          token = tokenKey.split('=')[1]
          tokenExpiration = tokenExpirationKey.split('=')[1]
        } else {
          token = localStorage.getItem('token')
          tokenExpiration = localStorage.getItem('tokenExpiration')
          if (new Date().getTime() > tokenExpiration || !token) {
            return false
          }

        }
        vueCtx.commit('setToken', token)
        vueCtx.dispatch('setLogoutTimer', tokenExpiration - new Date().getTime())

      },
      logout(vueCtx){
        vueCtx.commit('clearToken')
        Cookies.remove('token')
        Cookies.remove('tokenExpiration')
        localStorage.removeItem('token')
        localStorage.removeItem('tokenExpiration')
      }
    },

    getters: {
      decks(state) {
        return state.decks
      },
      isAuthenticated(state) {
        return state.token != null
      }
    }
  })
}
export default createStore

