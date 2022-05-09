<template>
    <div>
        <bg></bg>
        <div class="title">测试平台</div>
        <div class="login-form">
            <el-form ref="ruleFormRef" :rules="rules" v-bind:model="loginForm" label-width="120px">
                <div class="text-header">用户登录</div>
                <el-form-item label="用户名：" prop="username">
                    <el-input v-model="loginForm.username" />
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input type="password" @keyup.enter="onSubmit" :show-password="true" v-model="loginForm.password" />
                </el-form-item>
                <el-form-item label=" ">
                <!-- v-on可以缩写成@ -->
                    <el-button type="primary" v-on:click="onSubmit">登录</el-button>
                    <el-button type="info" @click="onReset" >重置</el-button>
                </el-form-item>
            </el-form>
        </div> 
    </div>
</template>

<script>
import { reactive,ref} from 'vue'
import bg from '@/components/BackGround.vue'
import {postRequest} from '@/utils/api.js'  //1.导入自己封装的axios
import {ElMessage} from 'element-plus'
import {useRouter} from 'vue-router'

export default {
    components:{bg},
    setup () {
        const loginForm = reactive({
            username: 'admin',
            password:''
        })
        const ruleFormRef = ref()
        const router = useRouter()  //使用router器对象
        //登录方法
        const onSubmit = () =>{
            console.log("登录按钮")
            postRequest('/api/login/',loginForm).then((response)=>{
                //[200,300) 之间的状态码，默认走then
                console.log('=这里是response==', response)
                //存登录状态到浏览器的localStorage
                localStorage.setItem('isLogin','yes') 
                ElMessage.success(response.data.msg)
                // console.log(router)
                router.push('/') //跳转至首页
            }).catch((error) =>{
                //处理异常响应，根据状态码，默认请求非2开头的响应走这里
                //我们修改规则，[200,400)范围外的状态码，走这里
                // console.log('异常')
                // console.log(error.response.data)
                // ElMessage.error(error.response.data.error)
                console.log('=这里是error==', error)
            })
        }
        const onReset = () =>{
            ruleFormRef.value.resetFields()
        }
        
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

<style scoped>
.text-header{
    text-align: center;
    font-size: 20px;
    color: rgb(16, 16,16);
    margin-bottom: 50px;
}
.login-form{
    position: absolute;
    width: 400px;
    height: 400px;
    top: 200px;
    right: 300px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px #333;
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-direction: column;
    padding: 0 40px; */
}
.title{
    position: absolute;
    width: 400px;
    height: 80px;
    top: 50px;
    right: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    font-family: 'Microsoft Yahei';
    color: rgb(13,104, 139);
}
.el-form-item{
    color: black;
}

</style>