<script>
import DefaultHeader from "@/components/Header/DefaultHeader.vue";
import DefaultFooter from "~/components/Footer/DefaultFooter.vue";
export default {
  name: "default",
  components: { DefaultHeader,DefaultFooter },
};
</script>

<template>
  <div>
  
    <default-header />
    <hr />
    <br />
    <nuxt />
    <default-footer/>
  </div>
</template>

<style scoped></style>
