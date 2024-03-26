<template class="loginBox">
  <div class="loginItem">
    <img
      src="http://10.112.16.136:8989/base-file/images/login.jpeg"
      style="display: inline; vertical-align: sub; width: 100%"
    />
    <div style="text-align: left">
      <h4>欢迎登陆~</h4>
    </div>
    <el-form :model="ruleForm" class="form" status-icon :rules="rules" ref="ruleForm">
      <el-form-item prop="username">
        <span slot="label">
          <i class="el-icon-user"></i>
      </span>
        <el-input style="width:85%" v-model.number="ruleForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span slot="label">
          <i class="el-icon-lock"></i>
      </span>
        <el-input style="width:85%" v-model="ruleForm.password" placeholder="请输入密码" autocomplete="off"
                  show-password></el-input>
      </el-form-item>
      <div>
        <span slot="label" style="float: left;cursor: pointer">
          <i class="el-icon-question"></i>
          <el-button type="text" @click="forgetPassword">忘记密码</el-button>
      </span>
        <span slot="label" style="float: right;cursor: pointer">
          <i class="el-icon-user-solid"></i>
          <el-button type="text" @click="register">注册用户</el-button>
      </span>
      </div>
    </el-form>
    <div class="button">
      <el-button type="primary" @click="submitForm">登陆</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    var checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'));
      } else {
        callback()
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }
    };
    return {
      showPass: false,
      ruleForm: {
        password: '',
        username: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
        ],
      }
    };
  },
  methods: {
    // 提交函数，与Login的组件绑定
    // API的返回值{code:"...",data:{Token:"..."},}
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        var params = {
          name: this.ruleForm.username,
          password: this.ruleForm.password
        }
        if (valid) {
          if (params.name === 'root' && params.password === '123456'){
            this.$router.push('/homePage')
          }
        } else {
          this.$message({
            message: '请完整输入',
            type: 'warning'
          })
        }
      })
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    register() {
      // 注册跳转界面
      this.$router.push({
        path: '/register'
      })
    },
    forgetPassword() {
      // 忘记密码跳转界面
      this.$bus.$emit("login-to-forgetPassword-page")
    }
  }
}
</script>

<style scoped>
.remember-me {
  float: left
}

.loginBox {
  width: 100%;
  text-align: center;
}

.loginItem {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 5%;
  text-align: center;
}

.button button {
  margin-top: 10%;
  width: 80%;
}

.el-form-item {
  margin-bottom: 10%;
}
</style>
