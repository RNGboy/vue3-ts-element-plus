<template>
  <div class="user">
    <div class="search">
      <page-search :searchFromConfig="formConfig"></page-search>
      <page-content :contentTableConfig="contentTableConfig"></page-content>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
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
