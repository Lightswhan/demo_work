<template class="registerBox">
  <div class="registerItem">
    <img
      src="http://10.112.16.136:8989/base-file/images/login.jpeg"
      style="display: inline; vertical-align: sub; width: 100%"
    />
    <div style="text-align: left">
      <h4>欢迎注册~</h4>
    </div>
    <el-form :model="ruleForm" class="form" status-icon :rules="rules" ref="ruleForm">
      <el-form-item prop="username">
        <span slot="label">
          <i class="el-icon-user"></i>
      	</span>
        <el-input style="width:85%" v-model.number="ruleForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
<!--      <el-form-item prop="age">-->
<!--        <span slot="label">-->
<!--          <i class="el-icon-user"/>-->
<!--      	</span>-->
<!--        <el-input style="width:85%" v-model.number="ruleForm.age" placeholder="请输入年龄"></el-input>-->
<!--      </el-form-item>-->
      <el-form-item prop="sex">
        <span slot="label">
          <i class="el-icon-s-custom"></i>
      	</span>
        <el-radio-group style="width:85%" v-model.number="ruleForm.sex">
          <el-radio :label="0">男</el-radio>
          <el-radio :label="1">女</el-radio>
        </el-radio-group>
      </el-form-item>
<!--      <el-form-item prop="phone">-->
<!--        <span slot="label">-->
<!--          <i class="el-icon-user"/>-->
<!--      	</span>-->
<!--        <el-input style="width:85%" v-model.number="ruleForm.phone" placeholder="请输入电话"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item prop="email">-->
<!--        <span slot="label">-->
<!--          <i class="el-icon-user"/>-->
<!--      	</span>-->
<!--        <el-input style="width:85%" v-model.number="ruleForm.email" placeholder="请输入邮箱"></el-input>-->
<!--      </el-form-item>-->
      <el-form-item prop="password">
        <span slot="label">
          <i class="el-icon-lock"/>
      	</span>
        <el-input type="password" style="width:85%" v-model="ruleForm.password" placeholder="请输入密码" autocomplete="off" show-password></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <span slot="label">
          <i class="el-icon-s-check"/>
      	</span>
        <el-input type="password" style="width:85%" v-model="ruleForm.checkPass" placeholder="请再次输入密码" autocomplete="off" show-password></el-input>
      </el-form-item>
      <el-form-item prop="secret">
        <span slot="label">
          <i class="el-icon-magic-stick"/>
      	</span>
        <el-input type="password" style="width:85%" v-model="ruleForm.secret" placeholder="请输入密钥(选填)" autocomplete="off" show-password></el-input>
      </el-form-item>
    </el-form>
    <div>
      <span style="float: right;cursor: pointer">
        <el-button @click="toLogin" type="text">已注册，去登陆</el-button>
      </span>
    </div>
    <div class="button">
      <el-button type="primary" @click="submitForm">注册</el-button>
      <br><br>
      <el-button @click="toLogin">返回</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      isRemember:true,
      ruleForm: {
        password: '',
        checkPass: '',
        username: '',
        // secret: '',
        // age: null,
        sex: null,
        // phone: '',
        // email: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        // age: [
        //   { required: true, message: '请输入年龄', trigger: 'blur' },
        // ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'blur' },
        ],
        // phone: [
        //   { required: true, message: '请输入电话号码', trigger: 'blur' },
        // ],
        // email: [
        //   { required: true, message: '请输入邮箱', trigger: 'blur' },
        // ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        checkPass: [
          { required: true, message: '请确认密码', trigger: 'blur' },
        ]
      }
    };
  },
  methods: {
    // 提交函数，与Login的组件绑定
    // API的返回值{code:"...",data:{Token:"..."},}
    submitForm() {
      this.$router.push('/')
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toLogin(){
      // 注册跳转界面
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>
<style scoped>
.registerBox {
  width: 100%;
  text-align: center;
}
.registerItem {
  width: 90%;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 5%;
  text-align: center;
}
.button button {
  margin-top: 5%;
  width:80%
}
</style>
