<template>
  <div class="container_all">
    <div class="container_top">
      <div class="container_top_left">
        <span class="container_top_text">
          正确率
        </span>
        <i-circle class="container_top_circle" :percent="80" stroke-color="#FFFFFF" trail-color="#5CBDFC">
          <span class="element_top_text">80%</span>
        </i-circle>
      </div>
      <div class="container_top_right">
        <span class="container_top_text">
          完成率
        </span>
        <i-circle class="container_top_circle" :percent="100" stroke-color="#FFFFFF" trail-color="#5CBDFC">
          <span class="element_top_text">100%</span>
        </i-circle>
      </div>
    </div>
    <div class="container_center">
      <div id="myChart" :style="{width: '350px', height: '350px'}"></div>
    </div>
    <div class="container_bottom">
      <Card :bordered="true" style="border-radius: 8px;border-color: black; margin: 8px;width: 100%">
        <ul>
          <p class="title_bottom_list" @click="testErrorList">答错学生名单</p>
          <li v-for="item in error_answer_list" v-bind:key="item.name" class="item_bottom_li">
          <span class="item_bottom_left_container">
           <img src="../../static/img/111.jpg" style="width: 50px;height: 50px">
           <span class="item_bottom_left_name">{{item.name}}</span>
          </span>
            <span class="tem_bottom_right_result">{{item.choice_result}}</span>
          </li>
        </ul>
      </Card>
    </div>
  </div>
</template>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')

  export default {
    name: "ResultForChoice",
    data: function () {
      return {
        error_answer_list: [
          {
            avatar: "../static/img/111.jpg",
            name: "大卫",
            choice_result: "B"
          },
          {
            avatar: "../static/img/111.jpg",
            name: "珊莎",
            choice_result: "C"
          },
          {
            avatar: "../../static/img/111.jpg",
            name: "小丽",
            choice_result: "D"
          },
          {
            avatar: "../static/img/111.jpg",
            name: "大林",
            choice_result: "A"
          },
          {
            avatar: "../static/img/111.jpg",
            name: "小薇",
            choice_result: "A"
          },
          {
            avatar: "../static/img/111.jpg",
            name: "小丽子",
            choice_result: "D"
          },
          {
            avatar: "../static/img/111.jpg",
            name: "大林字",
            choice_result: "A"
          }
        ]
      }
    },
    methods: {
      testErrorList: function () {
        var screenWidth = window.screen.width * 5 / 6;
        var screenHeight = window.screen.height;
        console.log("testErrorList click  width = " + screenWidth + " height = " + screenHeight)
      },
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: {text: '正确答案是B'},
          color: "#3FBBE1",
          tooltip: {},
          xAxis: {
            data: ["A", "B", "C", "D"]
          },
          yAxis: {},
          series: [{
            name: '人数',
            type: 'bar',
            data: [5, 6, 10, 20]
          }]
        });
      }
    },
    mounted() {
      this.drawLine();
    },
    components: {}
  }
</script>
<style>
  .container_all {
    width: 100%;
    height: auto;
    overflow:auto;
    /*display: flex;*/
    /*flex-direction: column;*/
  }

  .container_top {
    width: 100%;
    height: 200px;
    background-color: #2dabff;
  }

  .container_top_left {
    width: 50%;
    height: 200px;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container_top_right {
    width: 50%;
    height: 200px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container_top_text {
    color: white;
    font-size: 15px;
  }

  .container_top_circle {
    margin-left: 12px;
    height: 220px;
  }

  .element_top_text {
    font-size: 25px;
    color: white;
  }

  .container_center {
    width: 100%;
    height: 350PX;
  }

  .container_bottom {
    width: 100%;
    height: auto;
    background-color: #EEEEEE;
  }

  .item_bottom_li {
    display: flex;
    margin-top: 5px;
    margin-bottom: 5px;
    justify-content: space-between;
  }

  .title_bottom_list {
    background-color: #36acf4;
    color: white;
    font-size: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .item_bottom_left_container {
    margin-left: 20px;
    display: flex;
    align-content: center;
    align-items: center;
  }

  .item_bottom_left_name {
    align-items: center;
    align-content: center;
    display: flex;
    margin-left: 10px;
    font-size: 15px;
    color: black;
  }

  .tem_bottom_right_result {
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: row-reverse;
    align-self: center;
    font-size: 15px;
    margin-right: 20px;
  }
</style>
