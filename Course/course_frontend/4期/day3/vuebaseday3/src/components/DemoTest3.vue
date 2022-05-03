<template>
    <div>
        <!-- v-bind指令 -->
        <!-- 
            1.v-bind指令用于绑定数据到HTML元素的属性上
              v-bind指令是最常用的指令之一，所以提供了特定的缩写。
              v-bind:属性名缩写为 --  :属性名
         -->
        <h2>1.传统样式写法</h2>
        <div class="color-red">1.颜色红色</div>
        <div class="color-red f24">2.颜色红色、字体大小24</div>
        <div style="color: blue; background: pink">3.字体蓝色、背景粉色</div>
        <h2>2.样式绑定</h2>
        <div v-bind:class="classString">1.class绑定样式1-字符串</div>
        <div v-bind:class="classString2">1.class绑定样式2-字符串</div>
        <div v-bind:class="classObject">2.class绑定样式2-对象</div>
        <div v-bind:class="classArray">1.class绑定样式3-数组</div>
        <div v-bind:style="styleString">1.class绑定样式4-字符串</div>
        <div v-bind:style="styleObject">1.class绑定样式5-对象</div>

        <!-- 其他属性的绑定 -->
        <div>
            <!-- 绑定href属性 -->
            <!-- target="_blank"确定是否为新tab页打开 -->
            <a :href="url" target="_blank">绑定网址</a>
        </div>
        <div>
            <!-- 绑定disabled属性，是否禁用元素 -->
            <button :disabled="isButtonDisabled">确定</button>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
            classString: 'color-red',
            classString2: 'color-red f24',
            classObject: { 'color-red': true, f24: true },
            classArray: ['color-red', 'f24'],
            styleString: 'color: blue; background: pink',
            styleObject: { color: 'blue', background: 'pink' },
            url: 'http://www.baidu.com',
            isButtonDisabled: true
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>
.color-red {
  color: red;
}
.color-blue {
  color: blue;
}
.f24 {
  font-size: 24px;
}
.bg-yellow {
  background: yellow;
}
</style>