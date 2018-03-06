<!--客观题-测评中-->
<template>
  <div>
    <div class="test-top">
      <i-circle :percent="80" :size="120" :stroke-width="8" stroke-color="#FFFFFF" trail-width="4" trail-color="#5CBDFC" class="test-circle-percent">
        <span class="demo-Circle-inner" style="font-size:12px;font-family: Helvetica;color: white">80%</span>
      </i-circle>
      <div class="test-top-end">
        <div class="test-top-line-left"></div>
        <button class="test-top-end-btn">结束</button>
        <div class="test-top-line-right"></div>
      </div>
    </div>
    <div class="test-paper">
      <ul id="J_List">
        <li v-for="item in items" v-bind:key="item.name" @click="mark()">
          <img src="../../static/img/test.jpg"/>
          <span class="test-paper-name">{{item.name}}</span>
          <span class="test-paper-grade">{{item.score}}</span>
          <img class="test-paper-check" src="../img/photo_check.png"/>
        </li>
      </ul>
    </div>
    <div class="test-bottom">
      <div class="test-bottom-div">
        <button class="test-bottom-all-btn">全选</button>
        <img class="test-bottom-screen" src="../img/pic_touping.png" @click="screen()"/>
        <button class="test-bottom-cancel-btn">全部取消</button>
      </div>
    </div>
  </div>
</template>

<script>
import ICircle from '../../node_modules/iview/src/components/circle/circle.vue'

export default {
  components: {ICircle},
  name: 'Test',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [
        {
          name: '刘亭亭',
          score: '优'
        },
        {
          name: '刘亭',
          score: '优'
        },
        {
          name: '程爱华',
          score: '优'
        },
        {
          name: '程爱华',
          score: '优'
        },
        {
          name: '程爱华',
          score: '优'
        },
        {
          name: '程爱华',
          score: '优'
        },
        {
          name: '程爱华',
          score: '优'
        },
        {
          name: '程爱华',
          score: '优'
        }
      ]
    }
  },
  methods: {
    mark () {
      this.$router.push({path: '/scoreforsub'})
    },
    screen () {
      this.$router.push({path: '/screenforsub'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .test-top {
    width: 100%;
    height: 35%;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    position: fixed;
    flex-direction: column;
    left: 0;
    top: 0;
    z-index: 99;
    background-color: #2dabff;
  }
  .test-circle-percent {
    margin-top: 14%;
  }
  .test-top-end {
    width: 100%;
    height: 20%;
    display:flex;
    flex-flow: row;
    align-content:center;
    margin-top: 2%;
    flex-direction:row;
  }
  .test-top-line-left {
    width: 35%;
    height: 1px;
    margin: 20px 0;
    background-color: #81cdff;
  }
  .test-top-line-right {
    width: 35%;
    height: 1px;
    margin: 20px 0;
    background-color: #81cdff;
  }
  .test-top-end-btn {
    width: 25%;
    height: 80%;
    margin: 1% 3%;
    font-size: 14px;
    align-content: center;
    border: 1px solid white;
    background-color: #57bdff;
    border-radius: 50px;
    color: white;
  }
  .test-paper {
    position: absolute;
    margin-top: 55%;
    margin-bottom: 12%;
    background-color: #F5F6F8;
  }

  ul li {
    position: relative;
    float: left;
    padding: 20px 0px;
    margin: 4px 3px;
    width: 48%;
    height: 160px;
    background-color: black;
  }
  ul li img {
    width: 100%;
    height: 100%;
  }
  .test-paper-name {
    position: absolute;
    width: 60px;
    height: 25px;
    left: 30%;
    bottom: 5%;
    border: 1px solid white;
    padding: 4px 3px;
    background-color: rgba(15, 15, 15, 0.8);
    color: white;
    font-size: 12px;
  }
  .test-paper-grade {
    position: absolute;
    width: 25px;
    height: 25px;
    padding: 4px;
    left: 80%;
    top: 5%;
    border: 1px solid black;
    font-size: 12px;
    color: white;
    background-color: rgba(144, 54, 55, 0.8);
  }
  .test-paper-check {
    position: absolute;
    left: 80%;
    bottom: 5%;
    width: 24px;
    height: 24px;
  }
  .test-bottom {
    width: 100%;
    height:8%;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    position: fixed;
    flex-direction: row;
    left: 0;
    bottom: 0;
    background:white;
  }
  .test-bottom-div{
    width: 100%;
    height: 8%;
    margin: 0 auto;
    background: white;
    position: fixed;
    bottom: 0;
    text-align: center;
  }
  .test-bottom-screen {
    width: 70px;
    height: 70px;
    margin-left: 25%;
    margin-top: -10%;
  }
  .test-bottom-all-btn {
    width: 30px;
    height: 20px;
    font-size: 15px;
    margin-left: 0px;
    background-color: white;
    border: 0px solid white;
  }
  .test-bottom-cancel-btn {
    width: 60px;
    height: 20px;
    margin-left: 15%;
    font-size: 15px;
    background-color: white;
    border: 0px solid white;
  }
</style>
