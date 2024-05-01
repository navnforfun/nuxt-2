<script>
import auth from '~/layouts/auth.vue'

export default {
  name: 'index',
  layout: 'auth',
  data() {
    return {
      email: '',
      pass: '',
      repass: '',
      isLogin: false
    }
  },
  methods: {
    onSubmit() {
      if (this.pass === this.repass) {
        this.$store.dispatch('authenticate', {
          email: this.email,
          pass: this.pass,
          isLogin: this.isLogin
        }).then(data => {
          console.log(data)
          if (data.success) {
            this.$router.push('/login')
          }
        })

      } else {
        console.log('Pass is not valid')
      }
    }
  }
}
</script>

<template>
  <section>
    <div class="my-16  mx-16 border-2 border-amber-200 w-1/3">
      <h1>Register</h1>
      <form action="" @submit.prevent="onSubmit">
        <div>
          <label for="email">Email</label>
          <input v-model="email" type="text" id="email" placeholder="Email deck:" />
        </div>
        <div>
          <label for="pass">Password</label>
          <input v-model="pass" type="password" id="pass" />
        </div>
        <div>
          <label for="repass">Repass</label>
          <input v-model="repass" type="password" id="repass" />
        </div>
        <div>
          <button class="bg-yellow-400" type="submit">Register</button>
        </div>
      </form>
      <div>
        <nuxt-link to="/login">Login</nuxt-link>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
