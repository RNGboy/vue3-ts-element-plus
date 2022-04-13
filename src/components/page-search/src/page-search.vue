<template>
  <div class="page-search">
    <hy-form v-bind="searchFromConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh" @click="handleReset"
            >重置</el-button
          >
          <el-button icon="el-icon-serch" type="primary" @click="handleQuery"
            >搜索</el-button
          >
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form'

export default defineComponent({
  components: { HyForm },
  props: {
    searchFromConfig: {
      type: Object,
      require: true
    }
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件的field决定的
    const formItems = props.searchFromConfig?.formItem ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 重置
    const handleReset = () => {
      // 重置功能第一种方式
      // formData.value = formOriginData

      // 重置功能第二种方式
      for (const key in formOriginData) {
        formData.value[key] = formOriginData[key]
      }
      emit('resetBtnClick')
    }
    // 搜索
    const handleQuery = () => {
      emit('queryBtnClick', formData.value)
    }

    return {
      formData,
      handleReset,
      handleQuery
    }
  }
})
</script>
<style lang="less" scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
