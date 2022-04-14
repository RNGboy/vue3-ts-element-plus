<template>
  <div class="role">
    <page-search
      :searchFromConfig="formConfig"
      @resetBtnClick="handleReset"
      @queryBtnClick="handleQuery"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="role"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content-config'
import { formConfig } from './config/search'
import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  name: 'role',
  components: {
    PageContent,
    PageSearch
  },
  setup() {
    const { pageContentRef, handleReset, handleQuery } = usePageSearch()
    return {
      contentTableConfig,
      formConfig,
      pageContentRef,
      handleReset,
      handleQuery
    }
  }
})
</script>

<style scoped></style>
