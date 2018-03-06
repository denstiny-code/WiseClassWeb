<!--选择题,测评中-->
<template>
  <div>
    <div class="container-top">
      <!--percent="80" :size="120" :stroke-width="8" stroke-color="#FFFFFF" trail-width="4" trail-color="#5CBDFC"-->
      <i-circle :percent="80" stroke-color="#FFFFFF" trail-color="#5CBDFC" class="circle">
        <span class="element-circle-text" style="font-size:35px">80%</span>
      </i-circle>
      <div class="circle_duration_text">{{currentTimeText}}</div>

      <div class="circle_subject_text">选择题</div>
    </div>
    <div class="container_middle">
      <div class="container_middle_top">
        <div class=" content_left"></div>
        <Button type="primary" class="content_center" shape="circle" @click="stopEvalute">结束</Button>
        <div class="content_right"></div>
      </div>
      <div class="container_middle_bottom">
        <div>
          <div class="content_desc_left">正确率</div>
          <div class="content_percent_left">{{accuracy}}</div>
        </div>
        <div>
          <div class="content_complete_num">{{compelte_num}}</div>
          <div class="content_desc_right">已完成</div>
        </div>
      </div>
      <div class="container_bottom">

        <!--<schart :canvasId="canvasId"-->
                <!--:type="type"-->
                <!--:width="width"-->
                <!--:height="height"-->
                <!--:data="data"-->
                <!--:options="options"-->
        <!--&gt;</schart>-->
      </div>
    </div>
    <!--<div>正确答案</div>-->
  </div>
</template>
<script>
//  import Schart from 'vue-schart';

  var interval;
  export default {
    name: "TestForChoice",
    data: function () {
      return {
        currentTimeText: "开始",
        compelte_num: "10/50",
        accuracy: "67%",
        currentTime: 0,
        duration_temp_time: 0,

        canvasId: 'myCanvas',
        type: 'bar',
        width: 450,
        height: 360,
        data: [
          {name: 'A', value: 25},
          {name: 'B', value: 20},
          {name: 'C', value: 11},
          {name: 'D', value: 5},
        ],
        options: {
//          axisColor: "#F9F9F9",          // 坐标轴颜色
          padding: 30,                   // canvas 内边距
          title: '正确答案A',
          yEqual: 4,                     // y轴分成4等分
          titlePosition: 'bottom'      // 图表标题位置: top / bottom
        },
      }
    },
    created() {
      console.log("TestForChoice created");
      this.startInterval();
    },
    mounted() {
      if (this.$route.params.durationTimeForChoice == undefined) {
        console.log("TestForChoice mounted ... undefined");
        this.duration_temp_time = 2000;
      }
      this.duration_temp_time = this.$route.params.durationTimeForChoice;
    },
    methods: {
      startInterval: function () {
        interval = setInterval(() => {
          this.setIntervalText();
        }, 1000);
      },
      setIntervalText: function () {
        this.currentTime += 1000;
        this.currentTimeText = "当前时间是" + this.currentTime / 1000;
        if (this.duration_temp_time * 1000 == this.currentTime) {
          var isConfirm = confirm("时间到,是否结束当前测评?");
          clearInterval(interval);  //关闭定时器
          if (isConfirm) {
            this.stopEvalute();
          } else {
            alert("点击了取消.");
          }
        }
      },
      stopEvalute: function () { //停止测评
        this.$router.push({path: "/resultforchoice"});
      }
    },
    components: {
//      Schart
    }
  }
</script>
<style>
  .container-top {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 20%;
    background-color: #2dabff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
  }

  .circle {
    position: absolute;
    z-index: 1;
  }

  .circle_subject_text {
    position: absolute;
    z-index: 3;
    left: 0;
    color: white;
    margin-left: 20px;
  }

  .circle_duration_text {
    position: absolute;
    z-index: 2;
    right: 0px;
    color: white;
    margin-right: 20px;
  }

  .container_middle {
    width: 100%;
    height: 20%;
    position: fixed;
    left: 0;
    top: 20%;
    background-color: #2dabff;
    display: flex;
    flex-direction: column;
  }

  .container_bottom {
    position: fixed;
    left: 0;
    top: 40%;
    width: 100%;
    height: 55%;
    background-color: white;
  }

  .container_middle_top {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container_middle_bottom {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .element-circle-text {
    margin: 0 auto;
    font-size: 35px;
    color: white;
  }

  .content_left {
    width: 35%;
    background-color: white;
    height: 1px;
    vertical-align: 45px;
    padding-left: 5px;
    margin-left: 2%;
    margin-right: 3%;
  }

  .content_right {
    background-color: white;
    width: 35%;
    height: 1px;
    margin-left: 2%;
    margin-right: 3%;
    /*float: right;*/
    vertical-align: 35px;
    padding-right: 5px;
    text-align: center;
  }

  .content_center {
    width: 18%;
    margin-left: 1%;
    margin-right: 1%;
    background-color: #2dabff;
    border: 1px solid #ffffff;
    padding-top: 5px;
    padding-bottom: 5px;
    /*float: left*/
  }

  .content_desc_left {
    margin-left: 15px;
    font-size: 14px;
    color: white;
    text-align: center;
    line-height: 45px;
    float: left;
    align-content: space-between;
  }

  .content_percent_left {
    margin-left: 15px;
    font-size: 25px;
    color: white;
    text-align: center;
    line-height: 45px;
    float: left;
    align-self: flex-start;
  }

  .content_desc_right {
    margin-right: 15px;
    font-size: 15px;
    color: white;
    text-align: center;
    line-height: 45px;
    float: right;
    display: inline-block;
  }

  .content_complete_num {
    margin-right: 15px;
    font-size: 25px;
    color: white;
    text-align: center;
    line-height: 45px;
    float: right;
    display: inline-block;
  }
</style>
