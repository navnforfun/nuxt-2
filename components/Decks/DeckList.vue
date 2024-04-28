

<template>
  <li>
hi
    <nuxt-link to="/decks/1">
      <div class="border-2 my-5 hover:underline ">
        <h3 class="font-bold ">{{name}}</h3>
        <p class="italic">{{description}} </p>
        <img width="140"
             :src="thumbnail"
             alt="Deck Image">
      </div>
    </nuxt-link>
  </li>
</template>
<script >
export default {
  props:{
    name:{
      type:String,
    },
    description:{
      type:String,
    },
    thumbnail:{
      type:String,
    }


  }
}
</script>
<style scoped>

</style>
