<template>
  <div class="contain">
    <div class="center-div">
      <img style="width: 100px;height: 100px" src="../assets/import.png"/>
    </div>

    <div class="memo-tip">
      <div>助记词是您进行数据授权的重要凭证，请务必记住并保存好您的助记词，并且不要轻易出示给其他人</div>
    </div>

    <el-input
      class="input-code"
      type="textarea"
      :rows="2"
      placeholder="请输入不少于8位的字符，助记词可以是任意 汉子、字幕、字符组合"
      v-model="textarea">
    </el-input>

    <div class="memo-tip">
      <div>请注意，数据保险柜无权获取您的助记词信息。如果您丢失了助记词，我们将无法获取宁的数据权限</div>
    </div>

<!--    <div class="center-div">-->
<!--      <el-button style="width: 50%;margin-top: 10px" type="primary">确认授权</el-button>-->
<!--    </div>-->
    <div class="submit" @click="create" >生成</div>

    <el-dialog
      :visible.sync="isCreate"
      width="75%"
      center>
      <span>是否确认生成助记词</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 认</el-button>
      </span>
    </el-dialog>


  </div>
</template>

<script>
  export default {
    name: "MemoCode.vue",
    data() {
      return {
        textarea: '',
        isCreate:false
      }
    },
    methods:{
      create() {
        this.isCreate = true
      }
    }
  }
</script>

<style scoped>
.contain{
  display: flex;
  flex-flow: column nowrap;
}

  .center-div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
  }
  .memo-tip{
    margin-top: 10%;
    margin-bottom: 10%;
    text-align: left;
    margin-left: 10%;
    width: 80%;
    font-size: 16px;
    line-height: 1.5;
  }
  .input-code{
    min-height: 33px;
    margin-left: 10%;
    width: 80%;
  }
.submit{
  color: white;
  width: 90%;
  margin-left: 5%;
  margin-top:40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: red; /* 浏览器不支持时显示 */
  background-image: linear-gradient(to right,#5C47AE, #5C8DF7);
}
</style>
