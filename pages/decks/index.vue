<script>
export default {
  name: 'index',
  data() {
    return {
      id: ""
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
    <v-modal name="test" class=" ">
      <div class="flex justify-center align-center gap-4">
        <h4 class="bg-sky-50"> Test modal</h4>
        <h4  class="bg-sky-50" @click="closeModal">Close</h4>
      </div>

    </v-modal>
    <ul class="decks-list">

      <li>

        <nuxt-link to="/decks/1">
          <div class="border-2 my-5 hover:underline ">
            <h3 class="font-bold ">C#</h3>
            <p class="italic">Sieu ngon bo re </p>
            <img width="140"
                 src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-S24-Plus/Cobalt-Violet/Samsung-Galaxy-S24-Plus-Cobalt-Violet-thumbnail.png"
                 alt="dien thoai">
          </div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/decks/2">
          <div class="border-2 my-5 hover:underline ">
            <h3 class="font-bold">C#</h3>
            <p class="italic">Sieu ngon bo re </p>
            <img width="140"
                 src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-S24-Plus/Cobalt-Violet/Samsung-Galaxy-S24-Plus-Cobalt-Violet-thumbnail.png"
                 alt="dien thoai">
          </div>
        </nuxt-link>
      </li>
      <li>

        <nuxt-link to="/decks/3">
          <div class="border-2 my-5 hover:underline ">
            <h3 class="font-bold">C#</h3>
            <p class="italic">Sieu ngon bo re </p>
            <img width="140"
                 src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-S24-Plus/Cobalt-Violet/Samsung-Galaxy-S24-Plus-Cobalt-Violet-thumbnail.png"
                 alt="dien thoai">
          </div>
        </nuxt-link>
      </li>
    </ul>

  </div>
</template>
<script>
export default {
  methods: {
    openModal() {
      this.$modal.open({name: 'test'})
    },

    closeModal(){
      this.$modal.close({name: 'test'});
    }
  }
}
</script>
<style>

</style>
