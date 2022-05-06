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
      @newBtnClick="newBtnClick"
      @editBtnClick="editBtnClick"
    />
    <page-modal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      :modalConfig="modalConfig"
      pageName="role"
    >
      <div class="menu-tree">
        <el-tree
          :data="menus"
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          show-checkbox
          @check="handleCheckChange"
        />
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { contentTableConfig } from './config/content-config'
import { formConfig } from './config/search'
import { usePageSearch } from '@/hooks/use-page-search'
import { modalConfig } from './config/modal-config'

import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'role',
  components: {
    PageContent,
    PageSearch,
    PageModal
  },
  setup() {
    const { pageContentRef, handleReset, handleQuery } = usePageSearch()

    const newCb = () => {
      console.log('新建')
    }
    const editCb = () => {
      console.log('操作')
    }
    const { newBtnClick, editBtnClick, pageModalRef, defaultInfo } =
      usePageModal(newCb, editCb)

    const store = useStore()
    const menus = computed(() => store.state.entireMenu)

    const otherInfo = ref({})

    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
      console.log(otherInfo.value)
    }

    return {
      contentTableConfig,
      formConfig,
      pageContentRef,
      handleReset,
      handleQuery,
      modalConfig,
      pageModalRef,
      defaultInfo,
      newBtnClick,
      editBtnClick,
      menus,
      otherInfo,
      handleCheckChange
    }
  }
})
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 25px;
}
</style>
