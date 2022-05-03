<template>
  <div>
    年收入： <input type="text" v-model="income" />
    <p>个税：{{ result }}</p>
    <p><input type="text" v-model="count" /></p>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from 'vue'

export default {
  setup() {
    const state = reactive({
      result: 0,
      income2: 0
    })
    const state2 = reactive({
      income: 0,
      count: 0
    })

    watch(
      () => state2.income,
      () => {
        //全年应缴额
        let tax = 0
        let base = state2.income - 60000

        if (base <= 0) {
          tax = 0
        } else if (base <= 36000) {
          tax = base * 0.03
        } else if (base <= 144000) {
          tax = base * 0.1 - 2520
        } else if (base <= 300000) {
          tax = base * 0.2 - 16920
        } else if (base <= 420000) {
          tax = base * 0.25 - 31920
        } else if (base <= 660000) {
          tax = base * 0.3 - 52920
        } else if (base <= 960000) {
          tax = base * 0.35 - 85920
        } else {
          tax = base * 0.45 - 181920
        }

        if (state2.count > 10) {
          console.log('1111111')
          tax = 30
        }
        state.result = tax
      }
    )

    return {
      ...toRefs(state),
      ...toRefs(state2)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>