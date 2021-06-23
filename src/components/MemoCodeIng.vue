<template>
  <div class="contain">
    <img class="success"  src="../assets/success.png"/>
    <div class="content" >您已完成数据授权！</div>
<!--    <el-card>-->
<!--      <div>您的助记词是</div>-->
<!--      <div>XXXXXXXXX</div>-->
<!--    </el-card>-->
  </div>
</template>

<script>
  export default {
    name: "MemoCodeIng.vue"
  }
</script>

<style scoped>
  .contain{
    display: flex;
    justify-content: center;
    flex-flow: nowrap column;
    margin-top: -50px;
  }
  .content{
    text-align: center;
    padding:8%;
  }
  .success{
    width: 30%;
    height: 30%;
    margin-left: 35%;
    margin-top: 20%;
  }
</style>
