<template>
  <div class = "message">

    <div class = "title">我的档案</div>

    <div class = "login-message">

      <div class = "icon">

        <img src = "~assets/img/profile/profile.svg">

      </div>
      <div class = "login-button">

        <div class = "login-text">

          <div class = "text-tips">登录/注册</div>
          <div class = "text-show">
            <img src = "~assets/img/profile/phone.svg">
            暂无绑定手机号
          </div>

        </div>

        <div class = "login-icon">

          <img src = "~assets/img/profile/right.svg">

        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "ProfileTitle"
}
</script>

<style scoped>
.profile{

  height: 100vh;
  background: white;

}

.message{

  padding: 15px 0;
  color: white;
  background: #ff8198;

}
.title{


  font-size: 20px;
  /*padding: 10px;*/
  text-align: center;

}

.login-message{

  margin-top: 25px;
  display: flex;
  align-items: center;

}

.icon{

  background: #efefef;
  display: flex;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  margin: 0px 20px;

}

.icon img{

  padding: 10px;

}

.login-button{

  flex: 1;
  display: flex;
  /*margin-left: 0px;*/
}

.login-text{

  flex: 1;

}

.login-text div{

  margin-top: 10px;

}

.text-tips{

  padding-left: 5px;

}

.login-icon{

  width: 40px;
  height: 68px;

  display: flex;
  justify-content: center;
  align-items: center;

}

.login-icon img{

  width: 25px;
  height: 25px;

}

.text-show{

  display: flex;
  align-items: center;

}

.text-show img{

  width: 18px;
  height: 17px;

}
</style>