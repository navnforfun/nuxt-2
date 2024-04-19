<template>
  <div class="page">
    <div class="nav">
      <ul class="flex gap-8 font-bold">
        <li>
          <nuxt-link to="/settings">General</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/settings/deck">Deck</nuxt-link>

        </li>
        <li>
          <nuxt-link to="/settings/schedule">Schedule</nuxt-link>

        </li>
      </ul>
      <hr>

    </div>
    <nuxt-child />
  </div>
</template>
<script >
</script>
