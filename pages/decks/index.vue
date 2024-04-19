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
 <h3>Danh sach khoa hoc cc </h3>
   <ul class="decks-list">

     <li>

      <nuxt-link to="/decks/1">
        <div class="border-2 my-5 hover:underline ">
          <h3 class="font-bold ">C#</h3>
          <p class="italic">Sieu ngon bo re </p> 
          <img  width="140" src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-S24-Plus/Cobalt-Violet/Samsung-Galaxy-S24-Plus-Cobalt-Violet-thumbnail.png" alt="dien thoai">
        </div>
      </nuxt-link>
     </li>
     <li>
       <nuxt-link to="/decks/2">
         <div class="border-2 my-5 hover:underline ">
           <h3 class="font-bold">C#</h3>
           <p class="italic">Sieu ngon bo re </p>
           <img  width="140" src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-S24-Plus/Cobalt-Violet/Samsung-Galaxy-S24-Plus-Cobalt-Violet-thumbnail.png" alt="dien thoai">
         </div>
       </nuxt-link>
     </li>
     <li>

       <nuxt-link to="/decks/3">
         <div class="border-2 my-5 hover:underline ">
           <h3 class="font-bold">C#</h3>
           <p class="italic">Sieu ngon bo re </p>
           <img  width="140" src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-S24-Plus/Cobalt-Violet/Samsung-Galaxy-S24-Plus-Cobalt-Violet-thumbnail.png" alt="dien thoai">
         </div>
       </nuxt-link>
     </li>
   </ul>
 </div>
</template>

<style >

</style>
