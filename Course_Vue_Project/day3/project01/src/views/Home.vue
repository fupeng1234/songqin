<template>
    <div><Layout></Layout>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

import Layout from '@/components/Layout.vue'   //引入子组件

export default {
    // 注册子组件
    components:{Layout},
    setup () {
        const state = reactive({
            count: 0,
        })
    
    return {
      ...toRefs(state),
    }
  }
}
</script>

<style lang="scss" scoped>

</style>