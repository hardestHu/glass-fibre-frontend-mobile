<template>
  <div class="contain">
    <img class="success"  src="../assets/success.png"/>
    <div class="content" >您已完成数据授权！</div>
    <div class="tips">正在为您跳转回应用...</div>
<!--    <el-card>-->
<!--      <div>您的助记词是</div>-->
<!--      <div>XXXXXXXXX</div>-->
<!--    </el-card>-->
  </div>
</template>

<script>
  export default {
    name: "Success"
  }
</script>

<style scoped>
  .contain{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: nowrap column;
    padding-top:100px;
  }
  .success{
    width: 120px;
    height: 120px;
  }
  .content{
    text-align: center;
    padding:30px 10px 10px;
    font-size:22px;
    font-weight: bold;
  }

  .tips{
      font-size:18px;
      color:#333;
    }
</style>
