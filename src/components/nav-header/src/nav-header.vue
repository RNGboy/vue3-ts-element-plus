<template>
  <div class="nav-header">
    <el-icon @click="handleFold">
      <component :is="isFold ? foldCom : expandCom"></component>
    </el-icon>
    <div class="content">
      <hy-breadcrumb />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, markRaw } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import UserInfo from './user-info.vue'
import HyBreadcrumb from '@/base-ui/breadcrumb'

export default defineComponent({
  components: { Fold, Expand, UserInfo, HyBreadcrumb },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const foldCom = markRaw(Fold)
    const expandCom = markRaw(Expand)
    const handleFold = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      foldCom,
      expandCom,
      handleFold
    }
  }
})
</script>
<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;

  .el-icon {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
