<template>
  <div class="user">
    <div class="search">
      <page-search :searchFromConfig="formConfig"></page-search>
      <div class="content">
        <hy-table :listData="userList" :propList="propList" :title="title">
          <!-- header中的插槽 -->
          <template #headerHandler>
            <el-button type="primary" size="medium">新建用户</el-button>
          </template>
          <!-- 列中的插槽 -->
          <template #status="scope">
            <el-button
              plain
              size="small"
              :type="scope.row.enable ? 'success' : 'danger'"
              >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
            >
          </template>
          <template #createAt="scope">
            <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
          </template>
          <template #updateAt="scope">
            <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
          </template>
          <template #handler>
            <div class="handle-btns">
              <el-button :icon="Edit" size="small" type="text">编辑</el-button>
              <el-button :icon="Delete" size="small" type="text"
                >删除</el-button
              >
            </div>
          </template>
        </hy-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import PageSearch from '@/components/page-search'
import HyTable from '@/base-ui/table'
import { Delete, Edit } from '@element-plus/icons-vue'

import { formConfig } from './config/search'

export default defineComponent({
  components: { PageSearch, HyTable },
  name: 'user',
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    const title = '用户列表'

    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      },
      {
        label: '操作',
        minWidth: '150',
        slotName: 'handler'
      }
    ]

    return {
      formConfig,
      userList,
      userCount,
      propList,
      title,
      Delete,
      Edit
    }
  }
})
</script>

<style scoped lang="less">
.header {
  color: #333;
}

.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
