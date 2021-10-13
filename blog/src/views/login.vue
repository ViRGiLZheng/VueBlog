<template>
    <div class='login-container'>
  
    <el-form class="login-form">
               <h3 class='title'>个人Blog系统登录</h3>
          <el-form-item prop="username" class="item">
                <el-input placeholder="用户名">
                </el-input>
            </el-form-item>
                    <el-form-item prop="password" class="item">
                <el-input
                    placeholder="密码">
                </el-input>
            </el-form-item>
             <div>
                <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading"
                           @click.native="handleLogin()">登录
                </el-button>
            </div>
    </el-form>
    </div>
</template>

<script>
export default {};
</script>

<style type="text/scss" lang="scss">
@import '../style/mixin';

$bg: #2d3a4b;  
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container{
    @include relative;
    height:100%;
    background-color: $bg;

    .login-form {
        @include fxied-center;
        top: 40%;
        width: 22em;
        padding: 0.4666rem 0.4666rem 0.2rem 0.4666rem;
    }    

        .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0 auto 0.5333rem auto;
        text-align: center;
        font-weight: bold;
    }

}
</style>


