<script>
import DeckList from '~/components/Decks/DeckList.vue'

export default {
  name: 'index',
  components: { DeckList },
  data() {
    return {
      id: ''
    }
  },
  methods: {
    hiUser() {
      this.$router.push(`/decks/${this.id}`)
    }
  }
}
</script>

<template>
  <div>
    <h3>Danh sach khoa hoc cc </h3>
    <button class="bg-amber-400" @click.prevent="openModal">Create a deck</button>
    <v-modal name="createDeckModal" class=" ">
      <div class="bg-sky-50 p-20">
        <div class=" justify-center align-center gap-4">
          <h1>Create a new Deck</h1>
          <form action="">
            <div>
              <lable>Name:</lable>
              <input type="text" placeholder="Name deck:" />
            </div>
            <br>
            <div>
              <lable>Description:</lable>
              <textarea type="text" placeholder="Description deck:" />
            </div>
            <br>
            <div>
              <lable>Thumbnail:</lable>
              <input type="file" />
              <div class="preview"></div>
            </div>
          </form>
          <br>
          <div>

            <button class="bg-sky-500" @click="  ">Create</button>

            <button class="bg-red-600" @click="closeModal">Close</button>
          </div>
        </div>

      </div>
    </v-modal>
    <ul class="decks-list">
      <deck-list v-for="deck in decks"
                 :key="deck._id"
                 :id="deck._id"
                 :name="deck.name"
                 :description="deck.description"
                 :thumbnail="deck.thumbnail"
      />
    </ul>

  </div>
</template>
<script>
import DeckList from '~/components/Decks/DeckList.vue'
import error from '~/layouts/error.vue'

export default {

  computed: {
    decks() {

      console.log(this.$store.state.decks)
      return this.$store.state.decks
    }
  },
  components: {
    DeckList
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
    openModal() {
      this.$modal.open({ name: 'createDeckModal' })
    },

    closeModal() {
      this.$modal.close({ name: 'createDeckModal' })
    }
  }
}
</script>
<style>

</style>
