<template>
  <div id="root">
    <header>
      <ul>
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
    </header>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: "default",
}
</script>
