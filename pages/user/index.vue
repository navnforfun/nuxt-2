<script>
export default {
  name: 'user',
  data(){
    return {
      name: ""
    }
  },
  methods:{
    hiUser(){
      this.$router.push(`/user/${this.name}`)
    }
  }
}
</script>

<template>
  <div>
    <h1>use profile</h1>
    <input type="text" v-model="name" placeholder="enter ame" class=" border-2" />
    <button @click="hiUser" class="border-2">Hello user</button>
  </div>
</template>

<style scoped>

</style>
