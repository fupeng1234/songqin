<template>
  <div class="common-layout">
    <el-container>
      <el-header><NavBar></NavBar></el-header>
      <el-container>
        <el-aside width="200px"><SideBar></SideBar></el-aside>
        <el-main>内容区</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import NavBar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'

export default {
    components:{
        NavBar,
        SideBar
    },
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
.common-layout .el-header {
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 60px;
    
}
.common-layout .el-aside {
    background-color: var(--el-color-primary-light-8);
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 600px;
}
.common-layout .el-main {
    background-color: var(--el-color-primary-light-9);
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 600px;
}
.el-header {
    --el-header-padding: 0 0px;}
</style>