<template>
  <div class="about">
    <h1>This is an about page{{count}}</h1>
    <input type="radio" value="0" v-model="count"> 男
    <input type="radio" value="1" v-model="count"> 女
  </div>
</template>
<script>
import {reactive,toRefs,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
export default {
  setup() {
    const state = reactive({
      count: 0
    }) 
    function sleep(delay) {
      const start = new Date().getTime() //1111199121
      while (new Date().getTime() - start < delay) {
        continue
      }
    }
    //3.在组件内容被渲染（挂载）到页面之前，自动执行
    onBeforeMount(() => {
      console.log('3.onBeforeMount被调用')
      sleep(10)
    })

    //4.在组件内容被渲染（挂载）到页面之后，自动执行
    onMounted(() => {
      console.log('4.onMounted被调用') //
    })
    //5.在数据被更新时调用
    onBeforeUpdate(() => {
      console.log('5.onBeforeUpdate被调用')
    })

    //6.在数据被更新之后调用
    onUpdated(() => {
      console.log('6.onUpdated被调用')
    })

    //7.当组件销毁之前，被调用
    onBeforeUnmount(() => {
      console.log('7.onBeforeUnmount被调用')
    })

    //8.当组件销毁之后，被调用
    onUnmounted(() => {
      console.log('8.onUnmounted被调用')
    })
    return {...toRefs(state)}
  } 
}
</script>

