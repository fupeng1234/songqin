<template>
    <div>
        <!-- 插值表达式 -->
        <h4>1.字符串操作</h4>
        <p>{{str}}</p>
        <p>{{str.length}}</p>
        <p>{{str.split('').reverse().join('')}}</p>
        <h4>2.数字的操作</h4>
        <p>{{num1}}</p>
        <p>{{num1 + num2}}</p>
        <p>{{num1 > num2 ? '是':'否'}}</p>
        <h4>3.布尔的操作</h4>
        <p>{{isShow}}</p>
        <p>{{!isShow}}</p>
        <h4>4.数组的操作</h4>
        <p>{{arry}}</p>
        <p>{{arry.length}}</p>
        <p>{{arry[2]}}</p>
        <h4>5.对象的操作</h4>
        <p>{{obj}}</p>
        <p>{{obj.name}}</p>
        <p></p>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
            str: 'hello',
            num1: 10,
            num2: 30,
            isShow: true,
            arry: [10,20,30],
            obj: {name:'张三',age: 90}

        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>