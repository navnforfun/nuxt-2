<template>
  <div id="root">
    <div class="flex justify-center">
      <div
        class="w-11/12 h-52 bg-center bg-cover  bg-[url('~assets/img/banner.jpg')]"
      ></div>
    </div>
    <div class="">
      <h3>3 popular decks for you</h3>
      <div class="flex justify-between gap-5">
        <div class="border-2 w-full">Deck 1</div>
        <div class=" border-2 w-full">Deck 1</div>

        <div class="border-2 w-full">Deck 1</div>
      </div>
    </div>
    <button @click="toDecks" >Test roue</button>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",
  methods:{
    toDecks(){
      this.$router.push('/decks')

    }
  }
};
</script>
