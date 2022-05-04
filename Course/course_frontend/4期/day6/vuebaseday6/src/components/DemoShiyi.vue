<template>
    <div>
        <p>count</p>
        <input type="text" v-model="count">
        <p>{{count}}</p>
        <h2>count20</h2>
        <input type="text" v-model="count20">
        <p>{{count20}}</p>
    </div>
</template>

<script>
import { reactive, toRefs ,toRef} from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 2220,
            title: '网页标题'
        })
        //2.toRef，用于将响应式对象的某一个属性转为ref
        const count20 = toRef(state,'count')
        return {
            //1.toRefs用于将响应式对象转换为“普通”的对象，它的所有属性都是ref
            ...toRefs(state),
            count20
        }
    }
}
</script>

<style lang="scss" scoped>

</style>