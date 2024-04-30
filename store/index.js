import Vuex from 'vuex'
import decks from '~/pages/decks/index.vue'

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
        return new Promise((resolve, reject) => {
          // reject(new Error())
          setTimeout(() => {

          }, 1500)

          resolve()
        }).then(data =>{
          console.log("Server initialized")
          vuexCtx.commit('setDecks', [
            {
              _id: '1',
              name: 'English',
              description: 'English is world language',
              thumbnail: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2019_09_english.jpg'
            },

            {
              _id: '2',
              name: 'Chinese',
              description: '1.4 billion people over the world use chinese language ',
              thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/640px-Flag_of_the_People%27s_Republic_of_China.svg.png'
            },

            {
              _id: '3',
              name: 'Japanese',
              description: 'I love anime so much ',
              thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png'
            }
          ])
          vuexCtx.commit('setDecks')
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

