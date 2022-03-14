<template>
  <div class="login-account">
    <el-form :model="account" :rules="accountRules" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="account.password"
          placeholder="请输入密码"
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { accountRules } from '../config/config'
// 使用ElForm类型,再做一次导入
import { ElForm } from 'element-plus'
export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = () => {
      console.log('正在登录...')
      // valid是布尔类型,验证成功返回true,错误返回false
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('执行真正的登陆逻辑')
        }
      })
    }
    return {
      account,
      accountRules,
      formRef,
      loginAction
    }
  }
})
</script>
<style lang="less" scoped></style>
