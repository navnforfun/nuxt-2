<template>
  <div>
    <h3>Danh sach khoa hoc cc </h3>
    <button class="bg-amber-400" @click.prevent="openModal('DeckFormModal')">Create a deck</button>

    <ul class="decks-list">
      <deck-list v-for="deck in decks"
                 :key="deck.id"
                 :id="deck.id"
                 :name="deck.name"
                 :description="deck.description"
                 :thumbnail="deck.thumbnail"
      />
    </ul>

  </div>
</template>
<script>
import DeckList from '~/components/Decks/DeckList.vue'
import DeckForm from '~/components/Decks/DeckForm.vue'
import error from '~/layouts/error.vue'
import axios from 'axios'

export default {
  head:{
    title: 'Decks - Learn'
  },
  data() {
    return {
      id: ''
    }
  },
  layout: 'default',

  computed: {
    decks() {
      // console.log(this.$store.state.decks)
      return this.$store.state.decks
    }
  },
  components: {
    DeckList,
    DeckForm
  },

  // created() {
  //   setTimeout(() => {
  //     this.decks = [
  //       {
  //         _id: '1',
  //         name: 'English',
  //         description: 'English is world language',
  //         thumbnail: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2019_09_english.jpg'
  //       },
  //
  //       {
  //         _id: '2',
  //         name: 'Chinese',
  //         description: '1.4 billion people over the world use chinese language ',
  //         thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/640px-Flag_of_the_People%27s_Republic_of_China.svg.png'
  //       },
  //
  //       {
  //         _id: '3',
  //         name: 'Japanese',
  //         description: 'I love anime so much ',
  //         thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png'
  //       }
  //     ]
  //   }, 1500)
  // },
  methods: {
    openModal(name) {
      if (name === 'DeckFormModal') {

        this.$modal.open({ name: 'DeckFormModal' })

      }
    },
    onSubmit(deckData) {
      // console.log(deckData)
      axios.post('https://nuxt2-start-default-rtdb.asia-southeast1.firebasedatabase.app/decks.json', deckData)
        .then(response => {
          console.log(response)
        }).catch(e => {
        console.log(e)
      })
    }


  }
}
</script>
<style>

</style>
