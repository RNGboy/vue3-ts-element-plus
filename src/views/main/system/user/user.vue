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
        :modalConfig="modalConfig"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { formConfig } from './config/search'
import { contentTableConfig } from './config/content-config'
import { modalConfig } from './config/modal-config'
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  components: { PageSearch, PageContent, PageModal },
  name: 'user',
  setup() {
    const { pageContentRef, handleReset, handleQuery } = usePageSearch()

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

    const { newBtnClick, editBtnClick, pageModalRef, defaultInfo } =
      usePageModal(newCb, editCb)

    return {
      formConfig,
      contentTableConfig,
      modalConfig,
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
