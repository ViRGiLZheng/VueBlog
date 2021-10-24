<template>
    <div v-if="!item.hidden">
        <router-link v-for="sub in item.children" :key="sub.path"  :to="item.path+'/'+sub.path" >            
            <el-menu-item>
                <span>{{sub.name}}</span>
            </el-menu-item>
        </router-link>
    </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    item: {}
  }
};
</script>
