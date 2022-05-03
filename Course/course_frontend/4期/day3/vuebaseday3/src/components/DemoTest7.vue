<template>
  <div>
    <div>姓名：<input type="text" v-model="name" />{{ name }}</div>
    <div>
      性别：
      <input type="radio" value="1" name="xb" v-model="sex" /> 男
      <input type="radio" value="2" name="xb" v-model="sex" /> 女

      <input type="radio" value="9" name="xb" v-model="sex" /> 不限
    </div>

    <div>
      爱好【{{ hobby }}】：
      <input type="checkbox" value="踢足球" name="ah" v-model="hobby" /> 踢足球
      <input type="checkbox" value="打篮球" name="ah" v-model="hobby" /> 打篮球
      <input type="checkbox" value="唱歌" name="ah" v-model="hobby" /> 唱歌
    </div>

    <div>
      民族【{{ nation }}】：
      <select v-model="nation">
        <option value="01">汉族</option>
        <option value="99">非汉族</option>
      </select>
    </div>

    <div>
      文本域【{{ introduce }}】
      <textarea cols="30" rows="10" v-model="introduce"></textarea>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      name: '张三',
      sex: '2',
      nation: '',
      introduce: '本人xxx',
      hobby: ['踢足球']
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>