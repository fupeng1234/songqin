<template>
    <div>
        <el-form ref="ruleFormRef" :rules="rules" v-bind:model="loginForm" label-width="120px">
            <el-form-item label="用户名：" prop="username">
                <el-input v-model="loginForm.username" />
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input type="password" :show-password="true" v-model="loginForm.password" />
            </el-form-item>
            <el-form-item label=" ">
                <!-- v-on可以缩写成@ -->
                <el-button type="primary" v-on:click="onSubmit">登录</el-button>
                <el-button type="info" @click="onReset" >重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { reactive,ref} from 'vue'

export default {
    setup () {
        const loginForm = reactive({
            username: '',
            password:''
        })
        const onSubmit = () =>{
            console.log("登录按钮")
        }
        const onReset = () =>{}
        const ruleFormRef = ref()
        const rules = reactive({
            username: [
                // required表示是否是必填，trigger：blur表示当鼠标离开的时候就验证
                { required: true, message: '请输入用户名', trigger: 'blur' },
                // 下面这句就是用户名最少几个字符，最多几个字符，提示错误信息
                // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
                ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 3, max: 20, message: '密码的长度必须为3 - 5个字符', trigger: 'blur' },
                ]
            })
        return {
            loginForm,
            onSubmit,
            onReset,
            ruleFormRef,
            rules
        }
    }
}
</script>

<style lang="scss" scoped>

</style>