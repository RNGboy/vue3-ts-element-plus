<template>
  <div class="nav-header">
    <el-icon @click="handleFold">
      <component :is="isFold ? foldCom : expandCom"></component>
    </el-icon>
    <div class="content">
      <hy-breadcrumb :breadcrumb="breadcrumb" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, markRaw, computed, ComputedRef } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import UserInfo from './user-info.vue'
import HyBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'

import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

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

    // 面包屑数据: [{name:'',path:''}]
    const store = useStore()
    const breadcrumb: ComputedRef<IBreadcrumb[]> = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      foldCom,
      expandCom,
      breadcrumb,
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
