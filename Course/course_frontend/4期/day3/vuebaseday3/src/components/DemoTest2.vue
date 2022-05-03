<template>
    <div>
        <!-- 
            1.插值或v-text不能解析HTML元素，只会原样输出
            2.html指令将解析HTML元素
         -->
        <h4>v-text指令</h4>
        <p v-text="str1"></p>
        <p v-text="str2"></p>
        <h4>v-html指令</h4>
        <p v-html="str1"></p>
        <p v-html="str2"></p>

    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            str1: 'hello',
            str2: '<h1>松勤</h1>',
            count: 0
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>