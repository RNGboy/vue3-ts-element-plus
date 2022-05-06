<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-icon class="el-icon-left"><avatar /></el-icon>
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleExit">退出登陆</el-dropdown-item>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Avatar } from '@element-plus/icons-vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
import localCache from '@/utils/cache'

export default defineComponent({
  components: { Avatar },
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)

    const router = useRouter()
    // 退出登陆
    const handleExit = () => {
      localCache.deleteCache('token')
      router.push('/main')
    }
    return {
      name,
      handleExit
    }
  }
})
</script>
<style lang="less" scoped>
/deep/ .el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  .el-icon-left {
    margin-right: 5px;
  }
}
</style>
