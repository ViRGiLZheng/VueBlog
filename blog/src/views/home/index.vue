<template>
    <el-container class="wrapper">
        <el-scrollbar class="container-left" wrap-class="container-left-wrap" :class="{'slide-hide': isCollapse, 'slide-in-left': menuShow}">
            <div class="logo">
                <span style="width:200px;font-weight:bold">VRzheng Blog</span>
            </div>
            <el-menu
            class="menu"
            style="border: none;"
            text-color="rgb(191, 203, 217)"
            background-color="rgb(48, 65, 86)"
            active-text-color="rgb(64, 158, 255)">
              <sidebar-item  :item='siderMaps' ></sidebar-item>
            </el-menu>
        </el-scrollbar>

        <el-container class="container-box" v-bind:class="{'slide-hide': isCollapse, 'slide-in-left': menuShow}">
 <el-header class="header">
                <div class="header-left">
                 <div class="header-toggle" @click="menuShow = !menuShow; ">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="slide-toggle" :class="{'slide-toggle-open': isCollapse}" @click="isCollapse = !isCollapse;">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </el-header>
            <!--遮板-->
            <div class="main-mask"
                 v-show="menuShow"
                 @click="menuShow = !menuShow"></div>
            <el-main class="main">
                <transition name="move" mode="out-in">
                    <router-view></router-view>
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import SidebarItem from "./SidebarItem.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      menuShow: false,
      isCollapse: true
    };
  },
  components: {
    SidebarItem
  },
  computed: {
    ...mapGetters({
      siderMaps: "siderMaps"
    })
  }
};
</script>


<style lang="scss">
@import "../../style/mixin";
.el-header {
  /*background-color: #eef1f6;*/
  color: #333;
  padding: 0 10px;
}

.el-aside {
  color: #333;
}

.el-main {
  position: relative;
  padding: 0 10px 10px;
  background-color: #fff;
  margin-left: 7px;
  margin-top: 5px;
}

.main-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  z-index: 100;
  background-color: #000;
  opacity: 0.3;
}

.move-enter-active,
.move-leave-active {
  transition: opacity 0.5s;
}

.move-enter,
.move-leave {
  opacity: 0;
}

.wrapper {
  height: 100%;
  overflow-y: hidden;
  background-color: #f5f7f9;
}

.container-box {
  height: 100%;
  transition: -webkit-transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
  overflow-y: auto;
}

.container-left {
  background-color: rgb(48, 65, 86);
  transition: left 0.23s ease-in-out;
  height: 100%;
  flex: 0 0 auto;
}

.container-left-wrap {
  overflow-x: hidden !important;
}

.header {
  position: relative;
  text-align: left;
  font-size: 12px;
  line-height: $header-height;
  border-bottom: 1px solid #d8dce5;
  background-color: #fff;
}

/*宽屏时出现*/
.slide-toggle {
  display: inline-block;
  height: $header-height;
  line-height: $header-height;
  text-align: center;
  cursor: pointer;
}

.slide-toggle span {
  display: inline-block;
  width: 2px;
  height: 12px;
  background-color: rgba(135, 141, 153, 0.8);
  margin-left: 5px;
}
.slide-toggle-open span {
  display: block;
  margin-left: 4px;
  margin-top: 4px;
  width: 16px;
  height: 2px;
}
.slide-toggle-open {
  padding-top: 17px;
}

.logo {
  display: block;
  width: 100%;
  line-height: 80px;
  text-align: center;
  color: #fff;
  transition: display 0.7s ease-in-out;
  span {
    display: inline-block;
  }
}

@media screen and (min-width: 768px) {
  .main-mask {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .main {
    overflow-y: scroll !important;
    -webkit-overflow-scrolling: touch;
  }

  .slide-hide.slide-in-left {
    -webkit-transform: translate3d(64px, 0, 0) !important;
    transform: translate3d(64px, 0, 0) !important;
  }
  .container-left.slide-hide.slide-in-left {
    left: -64px;
    width: 64px;
  }
  .container-left.slide-in-left {
    left: 0;
  }
  .container-left {
    margin-right: 0;
    opacity: 1;
    position: absolute !important;
    top: 0;
    left: -225px;
    z-index: 10;
    padding: 0;
  }

  .container-box.slide-in-left {
    min-width: 0;
    opacity: 1;
    -webkit-transform: translate3d(187px, 0, 0);
    transform: translate3d(187px, 0, 0);
    overflow: initial;
  }
  .header-toggle {
    display: block;
    /*background-color: #26a2ff;*/
    border-radius: 4px;
    /*border: 1px solid #fff;*/
    height: 40px;
    margin: 10px 0;
    padding: 2px 6px;
    outline: none;
    width: 40px;
    z-index: 10;
  }

  .header-toggle span {
    display: block;
    width: 100%;
    height: 4px;
    margin: 5px auto;
    background-color: rgba(135, 141, 153, 0.8);
  }

  .logo {
    display: none;
  }
  .slide-toggle {
    display: none;
  }
}
</style>
