<template>
    <div>
        <component :is="compName"></component>
        <select v-model="compName">
            <option value="TabOne">TabOne组件</option>
            <option value="TabTwo">TabTwo组件</option>
            <option value="TabThree">TabThree组件</option>
        </select>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

// 2.1导入子组件
import TabOne from './TabOne.vue'
import TabTwo from './TabTwo.vue'
import TabThree from './TabThree.vue'

export default {
    //2.2组册子组件
    components:{
        TabOne,
        TabTwo,
        TabThree
    },
    setup () {
        const state = reactive({
            compName: 'TabTwo',
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>