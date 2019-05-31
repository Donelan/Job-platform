<template>
  <div class="home-login">
    <div class="common overflow">
      <div class="login-logo fl">
        <div class="logo fl">
          <img :src="require('@/assets/聊天图.png')" alt>
        </div>
        <div class="logo-info fl">
          <div class="info-app">职介平台APP</div>
          <div class="info-content">y一站式求职平台，家门口的“招聘会”</div>
          <div class="info-button">立即查看</div>
        </div>
      </div>
      <div class="login-form fr">
        <div class="login-title">验证码登录</div>
        <div class="phone-number">
          <input type="text" placeholder="请输入手机号">
        </div>
        <div class="validate-code">
          <input type="text" placeholder="获取验证码">
        </div>
        <div class="login-button flex between">
          <div class="login">登录</div>
          <div class="register">注册</div>
        </div>
      </div>
    </div>
  </div>
</template>
 <script lang="ts">
// import Vue from "vue";
// export default class LoginItem extends Vue {
//   // 跳转页面
//   jumpLoadPage(): void {
//     this.$router.push({ name: `download` });
//   }
// }
import Vue from 'vue'
export default Vue.extend({
  
})
</script>

<style rel="stylesheet/scss" lang="scss"  scoped>
.home-login {
  height: 200px;
  padding-top: 17px;
  padding-bottom: 20px;
  background-color: rgb(232, 242, 250);
  box-sizing: border-box;
  .login-logo {
    padding-left: 105px;
    padding-top: 8px;
    .logo-info {
      padding-left: 60px;
      padding-top: 20px;
      color: #1b82d2;
      .info-app {
        padding-bottom: 20px;
        font-size: 36px;
      }
      .info-content {
        padding-bottom: 18px;
        font-size: 22px;
      }
      .info-button {
        width: 86px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        background-color: #1b82d2;
        color: #fff;
        font-size: 16px;
        border-radius: 2px;
        cursor: pointer;
      }
    }
  }
  .login-form {
    width: 280px;
    margin-right: 85px;
    .login-title {
      margin-bottom: 17px;
      color: #1b82d2;
    }
    .phone-number {
      width: 280px;
      margin-bottom: 14px;
      height: 30px;
      > input {
        width: 100%;
        border: 1px solid #dbdbdb;
        height: 100%;
        border-radius: 4px;
        padding-left: 12px;
      }
    }
    .validate-code {
      width: 280px;
      margin-bottom: 15px;
      height: 30px;
      > input {
        width: 100%;
        border: 1px solid #dbdbdb;
        height: 100%;
        border-radius: 4px;
        padding-left: 12px;
      }
    }
    .login-button {
      > .login {
        background-color: #1b82d2;
        color: #fff;
        height: 30px;
        width: 134px;
        border-radius: 4px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
      }
      > .register {
        background-color: #f6ab00;
        color: #fff;
        height: 30px;
        width: 134px;
        border-radius: 4px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
}
</style>