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
import { useStore } from 'vuex'

import localCache from '@/utils/cache'
export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      // valid是布尔类型,验证成功返回true,错误返回false
      formRef.value?.validate((valid) => {
        if (valid) {
          // 判断是否记住密码
          if (isKeepPassword) {
            // 添加本地缓存
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
        }

        // 登陆请求验证
        store.dispatch('login/accountLoginAction', { ...account })
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
