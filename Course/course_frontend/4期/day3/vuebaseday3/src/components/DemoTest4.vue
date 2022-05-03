<template>
    <div>
        <!-- v-if表示条件判断指令
             v-show控制元素的display -->
        <!--
            v-if指令：表示条件判断
            v-else-if指令：用作v-if的else-if 块
            v-else指令：用作v-if的else块
            v-show指令：另一个用于根据条件展示元素的指令，v-show控制的是元素的display。它不支持template元素-->
        <div v-if="scores >= 80">优秀</div>
        <div v-else-if="scores >= 60">及格</div>
        <div v-else>不及格</div>

        <h2 v-show="ok">Hello</h2>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
            scores: 80,
            ok: true
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>