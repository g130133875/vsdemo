<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avarar_box">
        <img src="~@/assets/img/pig.jpg" alt="">
      </div>
      <!-- 表单区域 -->
      <el-form class="login_form">
        <!-- 用户名 -->
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-row>
          <el-button type="primary" round>登陆</el-button>
          <el-button type="warning" round>重置</el-button>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>
  .login_container {
    height: 100%;
    /* position:relative;
    text-align:center;
    line-height:300px;
    color:white;  */
  }
  .login_container::before{    
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:transparent url(~@/assets/img/night.jpg) center center no-repeat;
    filter:blur(15px);
    z-index:-1;
    background-size:cover;
}
  .login_box {
    position: relative;
    width: 40em;
    height: 40em;
    background-color: blanchedalmond;
    margin: 50% 50%;
    transform: translate(-50%,-50%);
  }
  .avarar_box {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 1.5em;
    transform: translate(-50%);
  }
  .avarar_box img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .login_form el-form-item el-input {
    width: 30em;
    border-radius: 50%;
  }
</style>