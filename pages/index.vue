<template>
  <div>
    <client-only>
      <week @selectDate="selectDate"></week>
    </client-only>
    <nuxt-link to="/demo">to demo</nuxt-link>
  </div>
</template>

<script>
import week from '~/components/Week'
export default {
  components: {
    week
  },
  data () {
    return {}
  },
  created () {},
  methods: {
    selectDate (item) {
      console.log(`当前选择的日期是${item.fullDate}`)
    }
  }
}
</script>

<style></style>
