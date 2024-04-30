<script>
import DefaultHeader from '@/components/Header/DefaultHeader.vue'
import DefaultFooter from '~/components/Footer/DefaultFooter.vue'
import DeckForm from '~/components/Decks/DeckForm.vue'
import axios from 'axios'

export default {
  name: 'default',
  components: { DeckForm, DefaultHeader, DefaultFooter },
  methods: {
    onSubmit(deckData) {
      // console.log(deckData)
      if (!deckData.id) {
        axios.post('https://nuxt2-start-default-rtdb.asia-southeast1.firebasedatabase.app/decks.json', deckData)
          .then(response => {
            console.log(response)
          }).catch(e => {
          console.log(e)
        })
      } else {
        axios.put(`https://nuxt2-start-default-rtdb.asia-southeast1.firebasedatabase.app/decks/${deckData.id}.json`, deckData)
          .then(response => {
            console.log(response)
          }).catch(e => {
          console.log(e)
        })
      }
    }


  }
}
</script>

<template>
  <div>

    <default-header />
    <hr />
    <br />
    <nuxt />
    <!--    modal-->
    <v-modal v-slot="payload" name="DeckFormModal" class=" ">

      <h2>{{ payload && payload.payload ? 'Edit a deck' : 'Create a deck' }}</h2>
      <div class="bg-sky-50 p-20">
        <div class=" justify-center align-center gap-4">
          <deck-form @submitForm="onSubmit" :deck="payload.payload" />
        </div>

      </div>
    </v-modal>

    <default-footer />
  </div>
</template>

<style scoped></style>
