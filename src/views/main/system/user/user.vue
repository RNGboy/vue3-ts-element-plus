<template>
  <div class="user">
    <div class="search">
      <page-search
        :searchFromConfig="formConfig"
        @resetBtnClick="handleReset"
        @queryBtnClick="handleQuery"
      />
      <page-content
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="users"
        @newBtnClick="newBtnClick"
        @editBtnClick="editBtnClick"
      />
      <page-modal
        :defaultInfo="defaultInfo"
        ref="pageModalRef"
        pageName="users"
        :modalConfig="modalConfigRef"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { formConfig } from './config/search'
import { contentTableConfig } from './config/content-config'
import { modalConfig } from './config/modal-config'
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'
import { useStore } from '@/store'

export default defineComponent({
  components: { PageSearch, PageContent, PageModal },
  name: 'user',
  setup() {
    const { pageContentRef, handleReset, handleQuery } = usePageSearch()
    const store = useStore()
    // pageModal相关的hook逻辑
    const newCb = () => {
      const passwordItem = modalConfig.formItem.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = false
    }
    const editCb = () => {
      const passwordItem = modalConfig.formItem.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = true
    }

    // 动态添加部门和角色列表     网络请求异步函数,setup执行的时候,数据还没请求到,使用computed解决
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItem.find(
        (item) => item.field === 'departmentId'
      )
      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { title: item.name, value: item.id }
      })
      const roleItem = modalConfig.formItem.find(
        (item) => item.field === 'roleId'
      )
      roleItem!.options = store.state.entireRole.map((item) => {
        return { title: item.name, value: item.id }
      })
      return modalConfig
    })

    const { newBtnClick, editBtnClick, pageModalRef, defaultInfo } =
      usePageModal(newCb, editCb)

    return {
      formConfig,
      contentTableConfig,
      modalConfigRef,
      pageContentRef,
      handleReset,
      handleQuery,
      newBtnClick,
      editBtnClick,
      pageModalRef,
      defaultInfo
    }
  }
})
</script>

<style scoped lang="less">
.header {
  color: #333;
}
</style>
