<template>
    <div><Layout></Layout>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
<<<<<<< HEAD
import { getRequest } from '@/utils/api.js'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
=======

>>>>>>> 2f23b43c9ce07f30a643138b17cb987bb63ecdce
import Layout from '@/components/Layout.vue'   //引入子组件

export default {
    // 注册子组件
    components:{Layout},
    setup () {
        const state = reactive({
            count: 0,
        })
<<<<<<< HEAD
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
=======
    
    return {
      ...toRefs(state),
>>>>>>> 2f23b43c9ce07f30a643138b17cb987bb63ecdce
    }
  }
}
</script>

<style lang="scss" scoped>

</style>