<template>
  <section>
    <div class="flex justify-center">
      <div class="">
        <h3 class="font-bold text-3xl">
          Learn something new by Ngoc Anh
        </h3>
        <h1 class="font-bold">{{ decks.name }}</h1>
        <div class="flex justify-center">
          <button class="bg-green-300">Start now</button>
          <button class="bg-blue-300 mx-16" @click="openModal('createCardModal')">Create a card</button>
          <button class="bg-yellow-400" @click="openModal('DeckFormModal')">Edit a deck</button>

        </div>
      </div>

      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
    <br />
    <hr />
    <br />
    <div class="grid grid-cols-6 gap-4 mx-10">
      <card-list v-for="card in cards" :key="card._id" :keyword="card.keyword" :picture="card.picture" />

    </div>
    <v-modal name="createCardModal" class=" ">
      <div class="bg-sky-50 p-20">
        <div class=" justify-center align-center gap-4">
          <h1>Create a new Card</h1>
          <form action="">
            <div>
              <lable>Name:</lable>
              <input type="text" placeholder="Name card:" />
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
  </section>
</template>
<script>
import CardList from '~/components/Cards/CardList.vue'
import axios from 'axios'
import decks from '../index.vue'

export default {
  head(){
    return{
      title: `Deck: ${this.decks.name}`
    }
  },
  computed: {},
  validate({ params }) {
    // console.log(ctx)
    // return /^\w{3,6}$/.test(params.id);
    return true
  },
  layout: "default",

  components: {
    CardList
  },
  asyncData(ctx) {
    return axios.get(
      `${process.env.baseApiUrl}decks/${ctx.params.id}.json`
    ).then(res => {
      return {
        decks: res.data
      }
    }).catch((e) => {
      console.log(e)
    })
  },
  data() {
    return {
      cards: [
        {
          _id: 1,
          picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Shop.svg/1200px-Shop.svg.png',
          keyword: 'Shop'
        },
        {
          _id: 2,
          picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Shop.svg/1200px-Shop.svg.png',
          keyword: 'Shop'
        },
        {
          _id: 3,
          picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Shop.svg/1200px-Shop.svg.png',
          keyword: 'Shop'
        },
        {
          _id: 4,
          picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Shop.svg/1200px-Shop.svg.png',
          keyword: 'Shop'
        },
        {
          _id: 2,
          picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Shop.svg/1200px-Shop.svg.png',
          keyword: 'Shop'
        }
      ]
    }
  },
  methods: {
    openModal(name) {
      if (name === 'createCardModal') {
        this.$modal.open({ name: 'createCardModal' })

      } else if (name === 'DeckFormModal') {
        this.$modal.open({ name: 'DeckFormModal' ,payload:{...this.decks,id:this.$route.params.id}})

      }
    },

    closeModal() {
      this.$modal.close({ name: 'createCardModal' })
    }
  }
}
</script>
<style scoped></style>
