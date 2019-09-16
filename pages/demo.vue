<template>
  <div class="table_box">
    {{ $store.state.num }}
    <button @click="$store.dispatch('add')">点击加1</button>
    {{ $store.state.demo.num }}
    <!-- <button @click="$store.dispatch('demo/add')">点击加2</button> -->

    <a-button
      type="primary"
      class="dddddddsssaaa"
      @click="$store.dispatch('demo/add')"

    >点击加2</a-button
    >
    <div>{{ list }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  asyncData ({ $axios }) {
    return $axios.post(`/list`).then((res) => {
      return {
        list: res.data
      }
    })
  },
  created () {},
  mounted () {
    this.$axios.post(`/list`).then((res) => {
      console.log(res)
    })
  },
  methods: {}
}
</script>

<style></style>
