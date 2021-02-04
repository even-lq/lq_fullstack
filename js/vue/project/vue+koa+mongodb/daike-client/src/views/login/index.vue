<template>
  <div class="login-container">
    <img src="@/assets/daike.png" alt="" class="logo" />

    <van-cell-group class="box">
      <van-field v-model="username" label="用户名" placeholder="请输入用户名" />
      <van-field
        v-model="password"
        label="密码"
        placeholder="请输入密码"
        type="password"
      />

      <van-field
        v-show="!isLogin"
        v-model="rePassword"
        label="重复密码"
        placeholder="请再次输入密码"
        type="password"
      />
    </van-cell-group>

    <van-row>
      <van-button size="small" type="default" @click="isLogin = !isLogin">{{
        isLogin ? "注册" : "已有账号"
      }}</van-button>
      <van-button
        size="small"
        type="primary"
        class="btn-login"
        @click="handleLogin"
        >{{ isLogin ? "登录" : "注册并登录" }}</van-button
      >
      <!-- <van-col span="8">span: 8</van-col> -->
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      rePassword: "",
      isLogin: true,
    };
  },
  methods: {
    showLoginTip(status) {
      this.$toast.loading({
        message: status,
        forbidClick: true,
        loadingType: "spinner",
        duration: 0,
      });
    },
    login() {
      this.$http
        .login({
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
        });
    },
    register() {
      this.$http
        .register({
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          this.$toast.clear()
          this.$router.push('/home')
        })
    },
    handleLogin() {
      // 用户名或密码为空提示
      if (this.username.trim() == "" || this.password.trim() == "") {
        this.$toast.fail("用户名或密码不能为空");
        return;
      }
      // 登录提示
      if (this.isLogin) {
        this.showLoginTip("登陆中...");
        this.login();
      } else {
        if (this.rePassword !== this.password) {
          this.$toast.fail("两次密码有误");
          return;
        }
        this.showLoginTip("注册并登陆中...");
        this.register();
      }
    },
    handleRegister() {},
  },
};
</script>

<style lang="less" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .logo {
    width: 300px;
    margin: 100px 0 20px;
  }

  .box {
    width: 280px;
    margin-bottom: 20px;
  }

  .btn-login {
    margin-left: 20px;
  }
}
</style>
