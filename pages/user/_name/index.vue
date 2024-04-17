<script >
export default {
  validate({params}) {
    // console.log(ctx)
    return /^\w{3,6}$/.test(params.name)
  }
}
</script>

<template>
<h1>Xin chao {{$route.params.name}}</h1>
</template>

<style scoped>

</style>
