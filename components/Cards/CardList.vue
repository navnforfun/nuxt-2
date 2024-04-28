<script>
export default {
  name: "CardList",
  props:{
    keyword:String,
    picture:String,
  }
}
</script>

<template>
  <div class="border-2 ">
    <div class="font-card">
      <img
        :src="picture"
        alt=""
      />
    </div>
    <div class="back-card">
      <p>{{ keyword }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
