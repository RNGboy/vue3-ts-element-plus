<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><avatar /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><phone-filled /></el-icon>
            <span>手机登陆</span>
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLogin"
      >立即登陆</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Avatar, PhoneFilled } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    Avatar,
    PhoneFilled,
    LoginAccount,
    LoginPhone
  },
  setup() {
    // 定义属性
    const isKeepPassword = ref(true)
    // 这里通过typeof去获取一个组件的类型,用对象真正的实例的类型
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref<string>('account')

    // 定义方法
    const handleLogin = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        // 手机登陆
        console.log('调用LoginPhone的loginAction方法')
      }
      console.log(currentTab)
    }
    return {
      isKeepPassword,
      currentTab,
      accountRef,
      phoneRef,
      handleLogin
    }
  }
})
</script>
<style lang="less" scoped>
.login-panel {
  margin-bottom: 150px;
  width: 320px;
  .title {
    text-align: center;
  }

  .account-control {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
