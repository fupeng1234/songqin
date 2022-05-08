<template>
    <div>
        <button @click="loginOut">退出登录</button>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { getRequest } from '@/utils/api.js'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
        const router = useRouter()
    // 退出登录方法
        const loginOut = () => {
            getRequest('/api/logout/', null).then((response) => {
            ElMessage.success(response.data.msg)
            router.push('/login')
            localStorage.setItem('isLogin', 'no')
      })
    }
    return {
      ...toRefs(state),
      loginOut
    }
  }
}
</script>

<style lang="scss" scoped>

</style>