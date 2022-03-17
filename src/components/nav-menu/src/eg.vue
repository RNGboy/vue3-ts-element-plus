<template>
  <div>
    {{ title }}
    {{ introduce }}
    <button @click="updateIntro()">改变介绍内容</button>
  </div>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <component :is="getC" />
        </el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>

    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
    <el-menu-item index="5" v-for="item in icons" :key="item.title">
      <el-icon><component :is="item.key" /></el-icon>
      <template #title>{{ item.title }}</template>
    </el-menu-item>
  </el-menu>
  <div>
    <div v-for="item in icons" :key="item.title">
      {{ item.title }}
      <component :is="item.key" />
    </div>
  </div>
</template>
<script>
import { toRefs, reactive, ref, getCurrentInstance } from 'vue'
import { Location, Document, IconMenu } from '@element-plus/icons-vue'
export default {
  name: 'homeIndex',
  components: {
    Location,
    Document,
    IconMenu
  },
  computed: {
    getC() {
      return this.com
    }
  },

  setup(a, b) {
    console.log(a, b)
    console.log(getCurrentInstance())
    const { ctx } = getCurrentInstance()
    console.log(ctx)
    console.log(ctx.message)
    // const icons = [{
    //     title: 'www',
    //     icon: Location
    // }]
    console.log('lotg')
    const icons = [Location, Document]
    const state = reactive({
      title: '我是主页',
      introduce: '我是介绍',
      icons: [
        {
          title: 1111
        },
        {
          title: 22222
        }
      ]
    })
    state.icons.forEach((item, index) => {
      item.key = icons[index]
    })

    const updateIntro = () => {
      state.introduce = '改变后的介绍内容'
    }
    const isCollapse = ref(true)
    const com = ref(Location)
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      ...toRefs(state),
      updateIntro,
      isCollapse,
      handleOpen,
      handleClose,
      com
      // optionsA
    }
  }
}
</script>

<style scoped lang="less"></style>
