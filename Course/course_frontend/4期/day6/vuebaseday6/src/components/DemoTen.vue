<template>
    <div>
        <p>1.ref响应式变量，修改<input type="text" v-model="count">{{count}}</p>
        <p>2.reactive响应式变量，修改<input type="text" v-model="state.count2">{{state.count2}}</p>     
        <p>3.computed计算属性，修改<input type="text" v-model="doubleCount">{{doubleCount}}</p>  
        <p>4.普通的变量，修改<input type="text" v-model="count10">{{count10}}</p>
    </div>
</template>

<script>
import { reactive ,ref,computed} from 'vue'

export default {
    setup () {
        //2.reactive方法，用于将普通对象变成响应式对象
        const state = reactive({
            count2: 200,
        })
        // 1.ref()方法，用于将基本数据类型，转化为响应式数据
        const count = ref(10)
        count.value++
        //3.计算属性,返回的是一个只读的ref对象
        const doubleCount = computed(()=>{
            return count.value * 2
        })
        //4.普通变量
        const count10 = 800
        console.log(count)
        console.log(doubleCount)
        return {
            state,
            count, 
            doubleCount,
            count10
                   }
    }
}
</script>

<style lang="scss" scoped>

</style>