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
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import HyForm from '@/base-ui/form'

export default defineComponent({
  components: {
    HyForm
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      defalut: () => ({})
    }
  },
  setup(props) {
    const dialogVisible = ref(false)

    const formData = ref<any>({})

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
      formData
    }
  }
})
</script>
<style lang="less" scoped></style>
