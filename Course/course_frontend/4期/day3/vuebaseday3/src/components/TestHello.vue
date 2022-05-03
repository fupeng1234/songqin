<template>
    <div>计数：{{count}}</div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'

export default {
    //1.setup()是生命周期函数，是组合式API的起点
    //vue2是选项式API；vue3是组合式API
    setup () {
        //2.reactive()定义一个响应式对象
        const state = reactive({
            count: 0,
        })
        // const state2 = {
        //     count2: 0,
        // }
        //3.定义一个函数实现+1功能
        function add(){
            state.count += 1
        }
        //4.生命周期函数onMounted()--当页面加载完成之后，才会调用onMounted
        onMounted(() => {
            setInterval(add,1000)
        })
        
        //5.定义的变量、方法必须返回，模版中才能使用
        return {
            //6.toRefs()的作用--把一个响应式对象，转换成‘普通’对象，该普通对象的每一个属性都是ref类型的
            //7.对象的拓展运算符...  ，用于把对象中的可遍历属性取出来，放到当前对象中。
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>