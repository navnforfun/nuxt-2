<script>
export default {
  name: 'index',
  data(){
    return {
      id: ""
    }
  },
  methods:{
    hiUser(){
      this.$router.push(`/decks/${this.id}`)
    }
  }
}
</script>

<template>
 <div>
   <ul class="decks-list">
     <li>

       <div class="border-2 my-5">
         <h3 class="font-bold">C#</h3>
         <p class="italic">Sieu ngon bo re </p>
         <img  width="140" src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-S24-Plus/Cobalt-Violet/Samsung-Galaxy-S24-Plus-Cobalt-Violet-thumbnail.png" alt="dien thoai">
       </div>
     </li>
     <li>

       <div class="border-2 my-5">
         <h3 class="font-bold">Python</h3>
         <p class="italic">Sieu ngon bo re </p>
         <img width="140" src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-S24-Plus/Cobalt-Violet/Samsung-Galaxy-S24-Plus-Cobalt-Violet-thumbnail.png" alt="dien thoai">
       </div>
     </li>
     <li>

       <div class="border-2 my-5">
         <h3 class="font-bold">PHP</h3>
         <p class="italic">Sieu ngon bo re </p>
         <img  width="140" src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-S24-Plus/Cobalt-Violet/Samsung-Galaxy-S24-Plus-Cobalt-Violet-thumbnail.png" alt="dien thoai">
       </div>
     </li>
   </ul>
 </div>
</template>

<style lang="scss">

</style>
