<template>
    <div>
        <h2>模版引用</h2>
        <input ref="root" type="text" id="username" name="songqin" value="五一放假5天" style="color:red">
    </div>
</template>

<script>
import { reactive, toRefs ,onMounted,ref} from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
            root: ''
        })
        //1.新方法：定义一个响应式变量
        // const root = ref(null)  //ref类型的
        //0.传统写法----页面挂载完成,获取元素
        onMounted(() => {
            // let el = document.getElementById("username")
            // console.log(el)
            // console.log(el.value)
            // el.value = '加班2天'
            // console.log(el.name)
            // console.log(el.id)
            console.log(state.root)
            // console.log(root.value)
            // console.log(root.value.id)
            // console.log(root.value.value)
            // console.log(root.value.value='加班2天')
        })
        return {
            ...toRefs(state),
            // root
            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>