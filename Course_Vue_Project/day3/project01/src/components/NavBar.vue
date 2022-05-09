<template>
    <div>
        <div class="logo">
            <el-icon :size="40" color="blank" style="vertical-align: middle"><Apple /></el-icon>
            测试开发平台</div>
        <el-menu
         :default-active="activeIndex2"
         class="el-menu-demo"
         mode="horizontal"
         background-color="#545c64"
         text-color="#fff"
         active-text-color="#ffd04b"
         @select="handleSelect"
        >
        <el-menu-item index="1">
            <el-dropdown :hide-on-click="false">
                <span class="el-dropdown-link"><el-avatar :size="55" :src="circleUrl" /></span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item><el-icon><Setting /></el-icon>设置</el-dropdown-item>
                        <el-dropdown-item @click="loginOut"><el-icon><Back /></el-icon>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-menu-item>
  </el-menu>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import {Apple,Setting,Back} from '@element-plus/icons-vue'
import { getRequest } from '@/utils/api.js'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

export default {
    components:{
        Apple,
        Setting,
        Back
    },
    setup () {
        const state = reactive({
            circleUrl:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            // circleUrl:'../../assets/av.png'   ---没有成功可以研究下
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
.logo{
    float: left;
    width: 200px;
    background-color: yellow;
}

</style>