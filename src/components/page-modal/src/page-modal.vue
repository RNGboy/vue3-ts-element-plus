<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      center
      destroy-on-close
    >
      <hy-form v-bind="modalConfig" v-model="formData"></hy-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirm">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import HyForm from '@/base-ui/form'

import { useStore } from '@/store'

export default defineComponent({
  components: {
    HyForm
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
    defaultInfo: {
      type: Object,
      defalut: () => ({})
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const store = useStore()
    const dialogVisible = ref(false)

    const formData = ref<any>({})

    const handleConfirm = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultInfo!).length) {
        // 编辑
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo?.id
        })
      } else {
        // 新建
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        })
      }
    }

    watch(
      () => props.defaultInfo,
      (newVal: any) => {
        for (const item of props.modalConfig.formItem) {
          formData.value[`${item.field}`] = newVal[`${item.field}`]
        }
      }
    )
    return {
      dialogVisible,
      formData,
      handleConfirm
    }
  }
})
</script>
<style lang="less" scoped></style>
