<template>
    <div>
        <button @click="count++">这里是父组件{{count}}</button>
        <ChildComp v-bind:str1="name1" :str2="name2" :listObj="listObj"></ChildComp>  <!--这里也可以写成这样 <child-comp></child-comp>  -->

        
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import ChildComp from './ChildComp.vue'

export default {
    components: {ChildComp:ChildComp},
    setup () {    
        const state = reactive({
            count: 0,
            name1: "松勤123",
            name2: "松勤457",
            listObj: [
                {id:1,realName: '张三'},
                {id:2,realName: '张三2'},
                {id:3,realName: '张三3'},
                {id:4,realName: '张三4'},
            ]
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>