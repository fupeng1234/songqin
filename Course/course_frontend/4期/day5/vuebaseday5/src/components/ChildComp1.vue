<template>
  <div>
    <button @click="count++">这里是子组件{{ count }}</button>
    <p>父组件传入的值1为：{{ str1 }}</p>
    <p>父组件传入的值2为：{{ str2 }}</p>
    <ul>
      <li v-for="(obj, index) in listObj" :key="index">
        编号为：{{ obj.id }} 真是姓名：{{ obj.realName }}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  props: ['str1', 'str2', 'listObj'],
  setup() {
    const state = reactive({
      count: 0
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>