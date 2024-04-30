<script>
export default {
  name: 'DeckForm',
  props: {
    deck: {
      type: Object
    }
  },
  data() {
    return {
      editedDeck: this.deck ? { ...this.deck } : {
        name: '',
        description: '',
        thumbnail: ''
      }
    }
  },
  methods: {
    onSave() {
      // console.log(this.editedDeck)
      this.$emit('submitForm', this.editedDeck)
    },
    closeModal() {
      this.$modal.close({ name: 'createDeckModal' })
    }
  }
}
</script>

<template>
  <div>
    <form action="">
      <div>
        <label>Name:</label>
        <input v-model="editedDeck.name" type="text" placeholder="Name deck:" />
      </div>
      <br>
      <div>
        <label>Description:</label>
        <textarea v-model="editedDeck.description" type="text" placeholder="Description deck:" />
      </div>
      <br>
      <div>
        <label>Thumbnail:</label>
        <input type="text" v-model="editedDeck.thumbnail" />
        <div class="preview"></div>
      </div>
    </form>
    <br>
    <div>

      <button class="bg-sky-500" @click="onSave">Create</button>
      <button class="bg-red-600" @click="closeModal">Close</button>
    </div>
  </div>
</template>

<style>

</style>
