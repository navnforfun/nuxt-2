<template>
  <section>
    <div class="flex justify-center">
      <div class="">
        <h3 class="font-bold text-3xl">
          Learn new language #{{ $route.params.id }} by Ngoc Anh
        </h3>
        <div class="flex justify-center">
          <button class="bg-green-300">Start now</button>
          <button class="bg-blue-300" @click="openModal">Create a card</button>
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

export default {
  validate({ params }) {
    // console.log(ctx)
    // return /^\w{3,6}$/.test(params.id);
    return true
  },
  components: {
    CardList
  },
  asyncData(ctx) {
    console.log(ctx.params.id)
    // console.log(ctx)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          deck: {
            _id: '1',
            name: 'English',
            description: 'English is world language',
            thumbnail: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2019_09_english.jpg'
          }
        })

      }, 1500)
    }).catch( (e) =>{
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
    openModal() {
      this.$modal.open({ name: 'createCardModal' })
    },

    closeModal() {
      this.$modal.close({ name: 'createCardModal' })
    }
  }
}
</script>
<style scoped></style>
