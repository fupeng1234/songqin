<template>
    <div>
        <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        router
      >
        <el-menu-item index="cases">
          <el-icon><Document /></el-icon>
          <span>测试用例</span>
        </el-menu-item>
        <el-menu-item index="requests">
          <el-icon><IconMenu /></el-icon>
          <span>web接口</span>
        </el-menu-item>
        <el-menu-item index="plans">
          <el-icon><Location /></el-icon>
          <span>测试计划</span>
        </el-menu-item>
        <el-menu-item index="reports">
          <el-icon><Setting /></el-icon>
          <span>测试报告</span>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { Document, Menu as IconMenu, Location, Setting,} from '@element-plus/icons-vue'

export default {
    components:{Document,IconMenu,Location,Setting},
    setup () {
        const state = reactive({
            count: 0,
        })
        const handleOpen = ()=>{}
        const handleClose = ()=>{}
        return {
            ...toRefs(state),
            handleOpen,
            handleClose
        }
    }
}
</script>

<style lang="scss" scoped>

</style>