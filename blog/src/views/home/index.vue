<template>
    <el-container class="wrapper">
        <el-scrollbar>
            <div>
                <span>VRzheng博客</span>
            </div>
            <el-menu>

            </el-menu>
        </el-scrollbar>

        <el-container>
 <el-header class="header">
                <div class="header-left">
                    <!-- <div class="header-toggle" @click="menuShow = !menuShow; showSideBar()">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="slide-toggle" :class="{'slide-toggle-open': isCollapse}" @click="toggleSideBar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> -->
                </div>
                <!-- <div class="header-tabs-box">
                    <el-breadcrumb class="app-levelbar" separator="/">
                        <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path">
                        <span v-if='item.redirect==="noredirect"||index==levelList.length-1'
                              class="no-redirect">{{item.name}}</span>
                            <router-link v-else :to="item.redirect||item.path">{{item.name}}</router-link>
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div> -->

                <div class="header-right">
                    <!-- <el-dropdown trigger="click">
                        <span>{{username}}<i class="el-icon-arrow-down el-icon--right"></i></span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item><span @click="handlePassword">修改密码</span></el-dropdown-item>
                            <el-dropdown-item><span @click="loginOut">退出登录</span></el-dropdown-item>
                            <el-dropdown-item disabled divided>主题切换</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown> -->
                </div>


                <!--新增界面-->
                <el-dialog title="修改密码" :visible.sync="passwordFormVisible" width="85%" top="5vh">
                    <el-form :model="passwordFormData" :rules="passwordFormDataRules" ref="passwordFormData">
                        <!-- <el-form-item label="原始密码" prop="old_password">
                            <el-input type="password" v-model="passwordFormData.old_password" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="新密码" prop="new_password">
                            <el-input type="password" v-model="passwordFormData.new_password" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="check_new_password">
                            <el-input type="password" v-model="passwordFormData.check_new_password" auto-complete="off"></el-input>
                        </el-form-item> -->
                    </el-form>
                    <!-- <div slot="footer" class="dialog-footer">
                        <el-button @click.native="passwordFormVisible = !passwordFormVisible">取消</el-button>
                        <el-button type="primary" @click.native="addSubmit('passwordFormData')" :loading="passwordLoading">提交</el-button>
                    </div> -->
                </el-dialog>

            </el-header>

            <!--遮板-->
            <!-- <div class="main-mask"
                 v-show="menuShow"
                 @click="menuShow = !menuShow"></div> -->

            <el-main class="main">
                <transition name="move" mode="out-in">
                    <router-view></router-view>
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {};
</script>


<style lang="scss">
</style>
