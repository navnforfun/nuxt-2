import Layout from "~/plugins/modals/layout.vue";
const VModal = {
  install(Vue){
    this.EvenBus = new Vue()
    Vue.component('v-modal', Layout)
    Vue.prototype.$modal = {
      open(params){
        VModal.EvenBus.$emit('open',params)

      },
      close(params){
        VModal.EvenBus.$emit('close',params)

      }
    }
  }
}
export default  VModal
