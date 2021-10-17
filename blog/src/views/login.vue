<template>
    <div class='login-container'>
  
    <el-form class="login-form">
               <h3 class='title'>个人Blog系统登录</h3>
          <el-form-item prop="username" class="item">
                <el-input 
                placeholder="用户名"
                    name="userName"
                    autoComplete="on"
                    v-model="ruleForm.userName">
                    <i slot="prefix" class="el-input__icon"><icon-svg icon-class="user"/></i>
                </el-input>
            </el-form-item>
                    <el-form-item prop="password" class="item">
                <el-input
                    placeholder="密码"                   
                     name="pwd" :type="isShowPwd ? 'text' : 'password'"
                    @keyup.enter.native="handleLogin"
                    v-model="ruleForm.pwd"
                    autoComplete="on">
                    <i slot="prefix" class="el-input__icon"><icon-svg icon-class="yinsibaohu"/></i>
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
export default {
  data() {
    let validatePwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userName: "admin",
        pwd: "admin"
      },
      rules: {
        userName: [
          { required: true, message: "请输入登录名", trigger: "blur" }
        ],
        pwd: [{ validator: validatePwd, trigger: "blur" }]
      },
      isShowPwd: false, // 是否显示密码
      loading: false, // 登录loading
      showDialog: false, // 显示dialog
      redirect: null // 回调地址
    };
  },
  methods: {
    handleLogin() {
      // this.$store.
    }
  }
};
</script>

<style type="text/scss" lang="scss">
@import "../style/mixin";

$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

//相对布局
.login-container {
  @include relative;
  height: 100%;
  background-color: $bg;

  //中间绝对
  .login-form {
    @include fxied-center;
    top: 40%;
    width: 22em;
    padding: 0.4666rem 0.4666rem 0.2rem 0.4666rem;
  }

  // 3个类选择器设定flex布局
  .item {
    .el-form-item__content {
      display: flex;
      flex-flow: row;
    }
  }

  .el-input {
    display: inline-block;
  }

  .title {
    font-size: 26px;
    color: $light_gray;
    margin: 0 auto 0.5333rem auto;
    text-align: center;
    font-weight: bold;
  }

  .svg-container {
    padding: 0.08rem 0.0666rem 0.08rem 0.2rem;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
}
</style>


