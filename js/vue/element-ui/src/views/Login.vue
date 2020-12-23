<template>
  <div class="login">
    <div class="login-container">
      <h2>旅梦后台管理系统</h2>
      <div class="wrap">
        <el-input
          placeholder="请输入用户名"
          prefix-icon="el-icon-user"
          v-model="account"
        >
        </el-input>
        <el-input
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
          v-model="password"
          show-password
        ></el-input>
        <el-button type="primary" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.account == "admin" && this.password == "123") {
        this.$router.push({path: '/home', query: { user : this.account}});
      } else {
        alert("账号或密码错误！");
      }
    },
  },
};
</script>

<style>
.login {
  text-align: center;
  height: 100vh;
}
.login-container {
  text-align: center;
  width: 300px;
  height: 260px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  box-shadow: 0px 0px 5px #999;
  border-radius: 5px;
}
.wrap {
  padding: 10px 50px;
}
input {
  margin: 10px 0;
}
</style>