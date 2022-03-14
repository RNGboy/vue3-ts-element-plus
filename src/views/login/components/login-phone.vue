<template>
  <div class="login-phone">
    <el-form :model="phone" :rules="phoneRules">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phone.num" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" placeholder="请输入验证码"></el-input>
          <el-button class="get-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { phoneRules } from '../config/config'
export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })
    return {
      phone,
      phoneRules
    }
  }
})
</script>
<style lang="less" scoped>
.get-code {
  display: flex;
}
.get-btn {
  margin-left: 8px;
}
</style>
