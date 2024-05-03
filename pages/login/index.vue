<script>
import auth from '~/layouts/auth.vue'

export default {
  name: 'index',
  layout: 'auth',
  data() {
    return {
      email: '',
      pass: '',
      isLogin: true,

    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('authenticate',{
        email: this.email,
        pass: this.pass,
        isLogin: this.isLogin
      }).then(data =>{
        console.log(data)
        if(data.success){
          this.$router.push('/')
        }
      }).catch(e =>{
        console.log(e)
      })

    }
  }
}
</script>

<template>
  <section>
    <div class="my-16  mx-16 border-2 border-amber-200 w-1/3">
      <h1>Login</h1>
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
          <button class="bg-yellow-400" type="submit">Login</button>
        </div>
      </form>
      <div>
        <nuxt-link to="/register">Register</nuxt-link>
      </div>

    </div>
  </section>
</template>

<style scoped>

</style>
