<template>
  <div class="userModal">
    <a-modal
      v-model="show"
      title="Basic Modal"
      @ok="handleOk"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>
<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: false
    }
  },
  watch: {
    isShow () {
      this.show = this.isShow
      if (!this.show) {
        this.$UserModal(false)
      }
    }
  },
  mounted () {

  },
  methods: {
    handleOk () {

    }
  }
}
</script>
<style lang="less" scoped>

</style>
