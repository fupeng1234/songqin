<template>
  <div>
    <button v-on:click="count++">这里是父组件{{ count }}</button>
    <ChildComp v-bind:str1="name1" :str2="name2" :listObj="listObj"></ChildComp>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import ChildComp from './ChildComp1.vue'

export default {
  components: { ChildComp: ChildComp },
  setup() {
    const state = reactive({
      count: 0,
      name1: '松勤1230',
      name2: '松勤4560',
      listObj: [
        { id: 1, realName: '张三' },
        { id: 2, realName: '李四' },
        { id: 3, realName: '王五' },
        { id: 4, realName: '麻六' }
      ]
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>