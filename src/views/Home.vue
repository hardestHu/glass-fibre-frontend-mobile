<template>
  <div class="contain">
    <div>
      <img style="width: 100%;height: 200px;" src="../assets/bg.png"/>
      <!-- <div class="welcome">欢迎您！张三丰</div> -->
    </div>
    <div class="content" >南京玻璃纤维研究院正在向您申请授权获取"玻璃纤维产品检测数据"需要您授权以下信息</div>
    <div class="data-frame" >
      <div class="data-list">
        <img src="../assets/data-icon.png" class="data-icon"/>
        <div>样品名称</div>
      </div>
      <div class = 'border'></div>
      <div class="data-list">
        <img src="../assets/data-icon.png" class="data-icon"/>
        <div>检测要求</div>
      </div>
      <div class = 'border'></div>
      <div class="data-list">
        <img src="../assets/data-icon.png" class="data-icon"/>
        <div>检测类别</div>
      </div>
      <div class = 'border'></div>
      <div class="data-list">
        <img src="../assets/data-icon.png" class="data-icon"/>
        <div>检测依据</div>
      </div>
      <div class="border"></div>
      <div class="data-list">
        <img src="../assets/data-icon.png" class="data-icon"/>
        <div>检测结果</div>
      </div>
    </div>

    <div class="submit" @click="openFullScreen" >确认授权</div>
    <!-- <el-dialog
      title="已成功授权"
      :visible.sync="showSetp"
      width="75%"
      center>
      <el-steps direction="vertical" :active="stepIndex" finish-status="success" style="margin-left: 30%">
        <el-step title="数据组装" description="2020.12.12"></el-step>
        <el-step title="数据签名" description="2020.12.12"></el-step>
        <el-step title="数据推送" description="2020.12.12"></el-step>
      </el-steps>
    </el-dialog> -->
    <van-dialog v-model="showFillDialog" title="请输入您的助记词" show-cancel-button :before-close="confirmFill">
      <div class="custom-tips">请务必记住助记词，否则将无法进行授权</div>
      <van-field class="custom-field" v-model="helpMemoryWord" label="" :border="true" placeholder="请输入助记词"/>
    </van-dialog>
    <van-overlay class="custom-dialog" :show="showStepDialog">
      <div class="custom-area">
        <div class="area-title">已成功授权</div>
        <div class="step-list">
          <div class="step-item">
           
            <div class="step-icon" v-if="isAnimation" >
                <van-icon name="replay" color="#2F54EB" size="30"/>
               
            </div>
            <div class="step-icon" v-else>
                <van-icon name="checked" color="#2F54EB" size="30" />
                <span class="step-line"></span>
            </div>
            <div class="step-desc">
              <span class="desc-title">数据组装</span>
              <span class="desc-date">2021-06-21 17:17:17</span>
            </div>
          </div>
          <div class="step-item">
            <div class="step-icon" v-if="isAnimation">
                <van-icon name="replay" color="#2F54EB" size="30"/>
            </div>
            <div class="step-icon" v-else>
                <van-icon name="checked" color="#2F54EB" size="30" />
            </div>
            <div class="step-desc">
              <span class="desc-title">数据签名</span>
              <span class="desc-date">2021-06-21 17:17:17</span>
            </div>
          </div>

          <div class="step-item">
            <div class="step-icon" v-if="isAnimation">
                <van-icon name="replay" color="#2F54EB" size="30"/>
            </div>
            <div class="step-icon" v-else>
                <van-icon name="checked" color="#2F54EB" size="30" />
            </div>
            <div class="step-desc">
              <span class="desc-title">数据推送</span>
              <span class="desc-date">2021-06-21 17:17:17</span>
            </div>
          </div>
        </div>
      </div>
    </van-overlay>
  
  </div>
</template>

<script>
import {Dialog, Field, Overlay, Toast,Icon} from 'vant'
export default {
  name: 'Home',
  components:{[Dialog.Component.name]: Dialog.Component,
    [Field.name]: Field,
    [Overlay.name]: Overlay,
    [Toast.name]: Toast,
    [Icon.name]: Icon,
  },
  data() {
    return {
      cancelOrCreate: false,
      cancelOrSubmit:false,
      createFail:false,
      showSetp:false,
      input:'',

      show: false,
      hasCert: false, // 是否拥有证书
      userInfo: [], // 用户信息
      step: 0, // 设置助记词步骤
      tablePage: { // 分页配置
        total: 100,
        pageNum: 1,
        pageSize: 10
      },
      baseInfo: {}, // 证书基本信息
      currentTab: 'ca', // 当前选择Tab
      caStep: 0, // 步骤
      usageRecordTableLoading: false, // 证书使用查询模块loading
      params: {
        usageTime: []
      },
      usageRecordTableData: [], // 证书使用记录
      stepIndex: 0,

      showFillDialog:false,
      helpMemoryWord:'',
      showStepDialog:true,
      isAnimation:false,
    };
  },
  props: {
    msg: String
  },
  mounted() {
  },
  methods:{
    handleSubmitEvent(){
      this.showSetp = true
      setInterval(this.handleStepAdd,1000)
    },
    handleStepAdd() {
      if (this.stepIndex++ > 3)
        this.$router.push({ path: '/memocode-ing' })
        // return;
    },
    goto(){
      this.cancelOrCreate = true
      // this.$router.push('/')
    },
    goCreat(){
      this.cancelOrSubmit = true
    },
    openFullScreen() {
      // this.showSetp = true;
      this.showFillDialog = true;
      // Dialog.alert({
      //   title: '请输入',
      //   message: '弹窗内容',
      // }).then(() => {
      //   // on close
      // });

      // const loading = this.$loading({
      //   lock: true,
      //   text: 'Loading',
      //   spinner: 'el-icon-loading',
      //   background: 'rgba(0, 0, 0, 0.7)'
      // });
      // setTimeout(() => {
      //   loading.close();
      //   this.$router.push({ path: '/memocode-ing' })
      // }, 1000);
    },
    confirmFill(action,done){
      // debugger
      console.log(action)
      if(action === 'confirm'){
         if(this.helpMemoryWord){
          this.showStepDialog = true
          done()
        }else{
          Toast('请填写助记词')
          done(false)
        }
      }else{
        done()
      }
     
    },

      
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .welcome{
    position: absolute;
    top: 25px;
    left: 250px;
    color: white;
    font-size: 17px;
  }
  .contain{
    display: flex;
    flex-flow: nowrap column;
    margin-top: -50px;
  }
  .content{
    /* text-align: left; */
    /* padding:8%; */
    padding:10px 20px;
    font-size:16px;
    line-height:30px;
  }
  .bg{
    position: absolute;
    /*background: url('./assets/bg.png') center 100%  no-repeat;*/
    width: 100%;
    height: 64%;
    background-size:100% 100%;
  }
  .data-frame{
    width: 100%;
    height: 210px;
  }
  .data-list{
    display: flex;
    flex-flow: row nowrap;
    padding:10px;
  }
  .data-icon{
    width: 6%;
    margin-right: 1%;
  }
  .border{
    border:1px solid #f0f9eb;
    width: 100%;
  }
  .submit{
    margin-top:40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: white;
    background-color: red; /* 浏览器不支持时显示 */
    background-image: linear-gradient(to right,#5C47AE, #5C8DF7);
  }
  .sec-text{
    text-align: center;
  }
  .text-contain{
    width: 70%;
    margin-left: 32%;
    margin-top:10px;
  }
  .custom-tips{
    margin-top:10px;
    font-size:14px;
    text-align: center;
    color:#4A4A4A;
  }
  .custom-field{
    margin:10px 0;
  }
  .custom-dialog{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .custom-area{
    width:300px;
    min-height:200px;
    border-radius: 5px;
    background-color:#fff;
    text-align: center;
    box-sizing: border-box;
    padding:30px 50px;
  }
  .area-title{
    font-size:22px;
    color:#333333;
    margin-bottom:10px;
  }
  .step-item{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom:20px;
  }
  
  .step-icon{
    margin-right:10px;
    position: relative;
    z-index: 1;
    background-color: #fff;
  }
  .step-icon .step-line{
    width:2px;
    height:55px;
    background-color:#2F54EB;
    position: absolute;
    left:50%;
    bottom:-100%;
    z-index: 0;
  }
  .step-icon .icon-complete{
    width:20px;
    height:20px;
    color:#fff;
    text-align: center;
    background-color: #2F54EB;
    font-size:20px;
    border-radius: 10px;
    font-family: consolas;
  }
  .step-desc{
    display: flex;
    flex-flow: column;
    /* justify-content: start; */
    text-align: left;
  } 
  .step-desc .desc-title{
    font-size:18px;
    color:#444;

  }
  .step-desc .desc-date{
    font-size:14px;
    color:#ddd;
    margin-top:10px;
  }
</style>
