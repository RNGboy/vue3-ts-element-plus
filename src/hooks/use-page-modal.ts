import { ref } from 'vue'
import PageModal from '@/components/page-modal'
type cbFn = () => void

export function usePageModal(newCb: cbFn, editCb: cbFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})

  const newBtnClick = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCb && newCb()
  }
  const editBtnClick = (row: any) => {
    defaultInfo.value = { ...row }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb()
  }

  return { pageModalRef, defaultInfo, newBtnClick, editBtnClick }
}
