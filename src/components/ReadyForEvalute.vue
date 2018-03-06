<template>
  <div>
    <div class="container_top">
      <img class="top_img" src="http://img.taopic.com/uploads/allimg/120727/201995-120HG1030762.jpg">
    </div>
    <div class="container_middle">
      <div class="middle_left_text">{{connectDesc}}</div>
      <div class="middle_right_text">{{connectNum}}</div>
    </div>
    <div class="container_select_time">
      <RadioGroup v-model="durationTime" type="button" class="container_radio_button">
        <Radio label="30秒"></Radio>
        <Radio label="1分钟"></Radio>
        <Radio label="2分钟"></Radio>
        <Radio label="5分钟"></Radio>
        <Radio label="不限时"></Radio>
      </RadioGroup>
    </div>
    <div class="container_bottom">
      <!--padding:上,右,下,左-->
      <Button type="primary" size="large" @click="beginEvalution"
              class="element_button_start">开始
      </Button>
    </div>
  </div>
</template>
<script>
  export default {
    name: "ReadyEvalution",
    data: function () {
      return {
        connectDesc: "已连接人数",
        connectNum: "20/40",
        durationTime: "2分钟",
      }
    },
    methods: {
      beginEvalution: function () {
        if (this.durationTime == 0) {
          this.$Message.info('你还没有选择时间呢...');
          return;
        }
        switch (this.GLOBAL.subjectType) {
          case "1":
            this.$Message.info('当前是选择题');
            this.$router.push({name: "TestForChoice", params: {durationTimeForChoice: this.getDurationTime()}});
            break;
          case "2":
            this.$Message.info('当前时判断题');
            this.$router.push({path: "/resultforchoice"});
            break;
          case "3":
            this.$Message.info('当前是主观题');
            this.$router.push({path: "/testforsub"})
            break;
          default:
            this.$Message.info('并不是一个有效的URL');
            break;
        }
      },
      getDurationTime: function () {
        var tempDuration = 0;
        switch (this.durationTime) {
          case "30秒":
            tempDuration = 30;
            break;
          case "1分钟":
            tempDuration = 60;
            break;
          case "2分钟":
            tempDuration = 120;
            break;
          case "5分钟":
            tempDuration = 300;
            break;
          default:
            tempDuration = -1;
            break;
        }
        return tempDuration;
      }
    }
  }
</script>
<style>

  .container_top {
    width: 100%;
    height: 60%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #2c3e50;
  }

  .top_img {
    max-width: 100%;
    max-height: 100%;
  }

  .container_select_time {
    width: 100%;
    height: 15%;
    position: fixed;
    left: 0;
    top: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container_bottom {
    width: 100%;
    height: 20%;
    position: fixed;
    left: 0;
    top: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container_radio_button {

  }

  .container_middle {
    width: 100%;
    height: 10%;
    position: fixed;
    left: 0;
    top: 60%;
    background-color: cornflowerblue;
    text-align: center;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .middle_left_text {
    text-align: center;
    color: white;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
    float: left;
  }

  .middle_right_text {
    display: flex;
    justify-content: center;
    color: white;
    float: right;
    margin-right: 30px;
    align-items: center;
    font-size: 25px;
  }
  .element_button_start {
    padding: 10px  25px  10px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
