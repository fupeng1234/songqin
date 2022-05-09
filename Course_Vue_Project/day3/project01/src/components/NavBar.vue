<template>
    <div>
        <div class="logo">测试开发平台</div>
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
                <span class="el-dropdown-link"><el-avatar :size="50" :src="circleUrl" /></span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>设置</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-menu-item>
  </el-menu>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            circleUrl:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        })
    
        return {
            ...toRefs(state),
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