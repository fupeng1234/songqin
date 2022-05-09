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
          <el-input
            type="password"
            @keyup.enter="onSubmit"
            show-password
            v-model="loginForm.password"
          />
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button type="info" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import bg from '@/components/BackGround'
import { postRequest } from '@/utils/api.js' //1. 导入自己封装的axios
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
export default {
  components: { bg },
  setup() {
    const loginForm = reactive({
      username: 'admin',
      password: ''
    })
    const ruleFormRef = ref()
    const router = useRouter() // 使用router器对象
    //登录方法
    const onSubmit = () => {
      console.log('登录按钮')
      postRequest('/api/login/', loginForm)
        .then((response) => {
          //[200,300) 之间的状态码，默认走then
          console.log('=这里是response==', response)
          //存登录状态到浏览器的localStorage
          localStorage.setItem('isLogin', 'yes')
          ElMessage.success(response.data.msg)
          console.log(router)
          router.push('/')
        })
        .catch((error) => {
          //其他状态码，走catch
          console.log('=这里是error==', error)
        })
    }
    const onReset = () => {
      ruleFormRef.value.resetFields()
    }

    const rules = reactive({
      username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 3, max: 20, message: '密码的长度必须为 3 - 5个字符', trigger: 'blur' }
      ]
    })

    return {
      loginForm,
      ruleFormRef,
      onSubmit,
      rules,
      onReset
    }
  }
}
</script>

<style scoped >
.text-header {
  text-align: center;
  font-size: 20px;
  color: rgb(16, 16, 16);
  margin-bottom: 50px;
}
.login-form {
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
}
.title {
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
  color: rgb(13, 104, 139);
}
.el-form-item {
  color: black;
}
</style>
