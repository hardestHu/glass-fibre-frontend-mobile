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
          <span class="step-line" :class="{'custom-opacity':isAnimationStep > 0}" ></span> 
            <transition name="fade">
    
              <div class="step-item" v-if="isAnimationStep >=0">
                <div class="step-icon" v-if="isAnimationStep === 0">
                    <van-icon name="replay" class="circle-icon" color="#2F54EB" size="30"/>
                </div>
                <div class="step-icon" v-else>
                    <van-icon name="checked" color="#2F54EB" size="30" />
                </div>
                <div class="step-desc">
                  <span class="desc-title">数据组装</span>
                  <span class="desc-date">2021-06-21 17:17:17</span>
                </div>
              </div>
            </transition>
          <div class="step-item" v-if="isAnimationStep >=1">
            <div class="step-icon" v-if="isAnimationStep === 1">
                <van-icon name="replay"  class="circle-icon"  color="#2F54EB" size="30"/>
            </div>
            <div class="step-icon" v-else>
                <van-icon name="checked"  color="#2F54EB" size="30" />
            </div>
            <div class="step-desc">
              <span class="desc-title">数据签名</span>
              <span class="desc-date">2021-06-21 17:17:17</span>
            </div>
          </div>

          <div class="step-item" v-if="isAnimationStep >= 2">
            <div class="step-icon" v-if="isAnimationStep === 2">
                <van-icon name="replay"  class="circle-icon"  color="#2F54EB" size="30"/>
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
      showStepDialog:false,
      isAnimationStep: -1,
      timeCount:'',
    };
  },
  props: {
    msg: String
  },
  mounted() {
  },
  methods:{
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
      if(action === 'confirm'){
         if(this.helpMemoryWord){
          this.showStepDialog = true
          this.isAnimationStep = 0;
          let self = this;
          
          this.timeCount = setInterval(() => {
            if(self.isAnimationStep === 3){
              self.$router.push({name:'Success'})
              self.showStepDialog = false;
              clearInterval(self.timeCount)
              self.isAnimationStep = -1;
            }else{
              self.isAnimationStep++
            }
          },3000)
          
          done()
        }else{
          Toast('请填写助记词')
          done(false)
        }
      }else{
        done()
      }
     
    },

      
      
  },
  beforeDestroy(){
    clearInterval(this.timeCount)
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
    min-height:320px;
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
  .step-list{
    position: relative;
  }
  .step-item{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 50px;
    margin-bottom: 20px;
    position: relative;
  }
  
  .step-icon{
    /* margin-right:10px; */
    width:30px;
    height:30px;
    position: absolute;
    left:0px;
    top:50%;
    transform: translate(0,-50%);
    background-color: #fff;
    z-index:10;
  }
  .step-line{
    width:2px;
    height:120px;
    background-color:#2F54EB;
    position: absolute;
    left:15px;
    top:40px;
    z-index: 2;
    opacity: 0;
    animation: process-step 6s linear 3s 1;
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
  .circle-icon{
    animation: turn-around 1s linear 3;
  }
  
  @keyframes turn-around {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes	process-step{
    0%{
      height:0px;
      opacity: 1;
    }
    50%{
      height:70px;
      opacity: 1;
    }
    100%{
      opacity: 1;
      height:120px;
    }
  }
  .custom-opacity{
    opacity: 1;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
