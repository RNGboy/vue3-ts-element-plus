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
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { formConfig } from './config/search'
import { contentTableConfig } from './config/content-config'
import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  components: { PageSearch, PageContent },
  name: 'user',
  setup() {
    const { pageContentRef, handleReset, handleQuery } = usePageSearch()
    return {
      formConfig,
      contentTableConfig,
      pageContentRef,
      handleReset,
      handleQuery
    }
  }
})
</script>

<style scoped lang="less">
.header {
  color: #333;
}
</style>
