<template>
    <div>
        <button @click="count++">这里是子组件{{count}}</button>
        <p>父组件传入的值1为：{{songqin1}}</p>
        <p>父组件传入的值2为：{{str2}}</p>
        <ul>
            <li v-for="(obj,index) in list" :key="index">
                编号为：{{obj.id}}
                真实姓名：{{obj.realName}}
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    props:['str1','str2','listObj'],  //它的值是一个数组或是对象
    //setup函数有两个参数，都是可选的，第一个参数是props(响应式对象),第二个参数是context(非响应式对象)
    setup (props,context) {
        const state = reactive({
            count: 0,
            list: props.listObj,
            songqin1: props.str1
        })
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>