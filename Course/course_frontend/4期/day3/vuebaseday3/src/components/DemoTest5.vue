<template>
    <div>
        <!-- v-for用于把数组或对象渲染为列表-->
        <!-- v-for 指令：用于把数组或对象渲染为列表。它有独特的语法：
            1）它的语法格式为：v-for="(item,index) in items"，其中 items 是源数据数组，item 则是被迭代的数组元素的别名，index是下标。
            2）它的语法格式为：v-for="(value,key,index) in objs"，其中 items 是源数据对象，value是对象的属性值，key是对象的属性名，index是下标。 -->
        <h2>1.循环渲染：普通数组</h2>
        <ul>
            <li v-for="(item,index) in list" :key="index">{{index}}--{{item}}</li>
        </ul>
        <h2>2.循环渲染：对象数组</h2>
        <table border="1" align="center" width="400px">
            <caption>
                <h2>个人信息</h2>
            </caption>
            <tr>
                <td>ID</td>
                <td>姓名</td>
                <td>年龄</td>
            </tr>
            <tr align="center" v-for="(user,index) in listObj" :key="index">
                <td>{{index}}</td>
                <td>{{user.name}}</td>
                <td>{{user.age}}</td>
            </tr>
        </table>
        <h2>3.循环渲染：对象</h2>
        <ul>
            <li v-for="(value,key,index) in person" :key="index">
                {{index}}--{{key}}: {{value}}
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            message: '',
            list: ['泰国', '新加坡', '印度尼西亚'],
            listObj: [
                { id: 1, name: '张三', age: 22 },
                { id: 2, name: '李四', age: 23 },
                { id: 3, name: '王五', age: 25 },
                { id: 4, name: '李世民', age: 27 },
                { id: 5, name: '朱元璋', age: 30 }
            ],
            person: {
                name: '张三',
                sex: '男',
                birthday: '2022-12-01'
            }
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>