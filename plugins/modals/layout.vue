<template>
  <div>
    <div>
      <div :data-modal="name" v-if="visible">
        <div arial-modal="true" class="modal" >

          <div >
            <slot :payload="payload"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VModal from "~/plugins/modals/handle";

export default {
  props: {
    name: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      payload: null,
      visible: false
    }

  },
  beforeMount() {
    // open event
    VModal.EvenBus.$on('open', (params) => {
      if (this.name === params.name) {
        this.open(params)
      }
    })
    VModal.EvenBus.$on('close', (params) => {
      if (this.name === params.name) {
        this.close(params)

      }
    })

  },
  methods: {
    open(params) {
      this.visible = true
    },
    close(params) {
      this.visible = false
    },
  },



}
</script>

<style>
.modal{

  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
}
</style>
