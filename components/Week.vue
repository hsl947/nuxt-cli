<template>
  <div class="table_box">
    {{ weekDayArr }}
    <div>
      <button @click="lastclick">上一周</button>
      <span>{{ todayDate.date }}({{ todayDate.day }})</span>
      <button @click="nextclick">下一周</button>
      <button @click="nowclick">回到今天</button>
    </div>
    <div class="table_header">
      <div
        v-for="(item, index) in weekDayArr"
        :key="index"
        :class="{ now: item.fullDate == getNowDate() }"
        class="weekday"
        @click="selectDate(item)"
      >
        <span>{{ item.date }}</span>
        <span>({{ item.day }})</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentFirstDate: '',
      todayDate: '',
      weekDayArr: []
    }
  },

  created() {
    this.setNowDate()
  },
  methods: {
    setNowDate() {
      this.todayDate = this.formatDate(new Date())
      this.setDates(new Date())
    },
    getNowDate() {
      const now = new Date()
      const year = now.getFullYear()
      const month = this.isGt10(now.getMonth() + 1)
      const day = this.isGt10(now.getDate())
      return year + month + day
    },
    isGt10(v) {
      return v < 10 ? `0${v}` : v
    },
    // 日期格式处理
    formatDate(date) {
      const year = date.getFullYear()
      const month = this.isGt10(date.getMonth() + 1)
      const day = this.isGt10(date.getDate())
      const week =
        // eslint-disable-next-line standard/computed-property-even-spacing
        ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][date.getDay()]
      return {
        date: `${month}-${day}`,
        day: week,
        fullDate: `${year}${month}${day}`
      }
    },

    //
    addDate(date, n) {
      date.setDate(date.getDate() + n)
      return date
    },
    //
    setDates(date) {
      const week = date.getDay() - 1
      week === -1
        ? (date = this.addDate(date, -6))
        : (date = this.addDate(date, week * -1))
      this.currentFirstDate = new Date(date)
      for (let i = 0; i < 7; i++) {
        const dateItem = this.formatDate(
          i === 0 ? this.addDate(date, 0) : this.addDate(date, 1)
        )
        this.weekDayArr.push({
          date: dateItem.date,
          day: dateItem.day,
          fullDate: dateItem.fullDate
        })
      }
    },
    // 上一周
    lastclick() {
      this.weekDayArr = []
      this.setDates(this.addDate(this.currentFirstDate, -7))
    },
    // 下一周
    nextclick() {
      this.weekDayArr = []
      this.setDates(this.addDate(this.currentFirstDate, 7))
    },
    // 回到今天
    nowclick() {
      this.weekDayArr = []
      this.setNowDate()
    },
    //  选择日期
    selectDate(item) {
      this.$emit('selectDate', item)
    }
  }
}
</script>

<style>
.table_header {
  display: flex;
  justify-content: center;
  color: #8e8e8e;
  background: #e9f0fe;
  border-top: 1px solid #f5f4f7;
  border-right: 1px solid #f5f4f7;
}
.week_one {
  text-align: center;
  line-height: 50px;
  border-bottom: 1px solid #f5f4f7;
  border-left: 1px solid #f5f4f7;
  background: #e9f0fe;
  width: 200px;
}
.weekday {
  flex: 1;
  text-align: center;
  line-height: 24px;
  border-bottom: 1px solid #f5f4f7;
  border-left: 1px solid #f5f4f7;
  background: #e9f0fe;
}
.weekday.now {
  background: #2d4b86;
  color: #fff;
}
.weekday span {
  display: block;
}
</style>
