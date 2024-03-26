<template>
  <div>
    <div style="margin-top: 1%" v-for="(item,index) in functionalList" @click="item.singleClick">
      <van-cell
        :key=index
        :title=item.title
        :is-link=item.isLink
        :value=item.value
        :icon=item.icon
      ></van-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "functionalBar",
  data() {
    return {
      functionalList: [{
        title: '电话信息',
        isLink: false,
        value: JSON.parse(sessionStorage.getItem('singleUserInfo')).phone,
        icon: 'phone-o',
        singleClick: this.phoneClick
      }, {
        title: '个人信息',
        isLink: true,
        icon: 'user-o',
        singleClick: this.userInfo
      }, {
        title: '人员管理',
        isLink: true,
        icon: 'friends-o',
        singleClick: this.userManage
      }, {
        title: '退出登陆',
        isLink: true,
        icon: 'revoke',
        singleClick: this.backToLogin
      },]
    }
  },
  methods:{
    backToLogin() {
      this.$dialog.confirm({
        title: '标题',
        message: '确认要退出吗？'
      }).then(() => {
        sessionStorage.removeItem('userInfo')
        sessionStorage.removeItem('singleUserInfo')
        this.$router.push('/')
        this.$message( {
          message: '退出成功',
          type: 'info'
        })
      })
      .catch(() => {
        this.$message( {
          message: '取消退出',
          type: 'info'
        })
      })
    },
    phoneClick(){},
    userInfo(){
      this.$router.push('/userInfo')
    },
    userManage(){
      this.$router.push('/userManage')
    }
  }
}
</script>

<style scoped>

</style>
