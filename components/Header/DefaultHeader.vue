<script>


</script>

<template>
  <div>
    <ul class="flex font-bold justify-center gap-40 bg-amber-200 py-5">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/decks">Decks</nuxt-link>
      </li>
      <li>
        <nuxt-link to="user">User</nuxt-link>
      </li>
      <li>
        <nuxt-link to="settings">Settings</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nuxt-link-exact-active.nuxt-link-active{
color: cadetblue;
}
</style>
