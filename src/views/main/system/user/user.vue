<template>
  <div class="user">
    <div class="search">
      <page-search :searchFromConfig="formConfig"></page-search>
      <page-content
        :contentTableConfig="contentTableConfig"
        pageName="users"
      ></page-content>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { formConfig } from './config/search'
import { contentTableConfig } from './config/content-config'

export default defineComponent({
  components: { PageSearch, PageContent },
  name: 'user',
  setup() {
    return {
      formConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped lang="less">
.header {
  color: #333;
}
</style>
