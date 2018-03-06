<!--客观题-打分-->
<template>
  <div id="score">
    <div class="score-info">
      <img class="score-avatar" src="../img/s_logo.png"/>
      <span class="score-name">赵一峰</span>
    </div>
    <div class="score-pager">
      <img :src="img_pic"/>
    </div>
    <div class="score-mark">
      <span v-bind:class="{score_grade_one_on:grade_one,score_grade_one_off:!grade_one}" @click="oneClick()">优</span>
      <span v-bind:class="{score_grade_two_on:grade_two,score_grade_two_off:!grade_two}" @click="twoClick()">良</span>
      <span v-bind:class="{score_grade_thr_on:grade_thr,score_grade_thr_off:!grade_thr}" @click="thrClick()">中</span>
      <span v-bind:class="{score_grade_for_on:grade_for,score_grade_for_off:!grade_for}" @click="forClick()">差</span>
    </div>
    <div class="score-operate">
      <button class="score-all-btn" @click="sure()">确定</button>
      <div class="score-line"></div>
      <button class="score-operate-btn" @click="cancel()">取消</button>
    </div>
  </div>
</template>

<script>
  import pic from '../../static/img/test.jpg'

  export default {
    name: 'Test',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        img_pic: pic,
        grade_one: false,
        grade_two: false,
        grade_thr: false,
        grade_for: false,
      }
    },
    methods: {
      oneClick() {
        this.grade_one = !this.grade_one
        this.grade_two = false
        this.grade_thr = false
        this.grade_for = false
      },
      twoClick() {
        this.grade_one = false
        this.grade_two = !this.grade_two
        this.grade_thr = false
        this.grade_for = false
      },
      thrClick() {
        this.grade_one = false
        this.grade_two = false
        this.grade_thr = !this.grade_thr
        this.grade_for = false
      },
      forClick() {
        this.grade_one = false
        this.grade_two = false
        this.grade_thr = false
        this.grade_for = !this.grade_for
      },
      sure() {
        alert("确定")
      },
      cancel() {
        alert("取消")
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #score {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #F5F6F8;
  }

  .score-info {
    width: 100%;
    height: 10%;
    background: #2dabff;
  }

  .score-avatar {
    float: left;
    margin: 10px;
  }

  .score-name {
    float: left;
    margin-top: 5%;
    color: white;
    font-size: 14px;
  }

  .score-pager {
    width: 100%;
    height: 40%;
    background: #2dabff;
  }

  .score-pager img {
    width: 95%;
    height: 95%;
  }

  .score-mark {
    width: 88%;
    height: 15%;
    margin-top: 20px;
    margin-left: 6%;
    border-radius: 50px;
    border: 1px solid #D9D9D9;
    display: flex;
    justify-content: center;
  }

  .score-mark span {
    width: 20%;
    height: 75%;
    background: white;
    display: block;
    border-radius: 50%;
    margin-top: 10px;
    text-align: center;
    line-height: 65px;
    font-size: 20px;
    font-weight: bolder;
    margin-left: 8px;
  }

  .score-mark span:nth-of-type(1) {
    border: 1px solid #FD9E3D;
  }

  .score-mark .score_grade_one_off {
    color: #FD9E3D;
    background: none;
  }

  .score-mark .score_grade_one_on {
    color: #ffffff;
    background: #FD9E3D;
  }

  .score-mark span:nth-of-type(2) {
    border: 1px solid #00B55B;
  }

  .score-mark .score_grade_two_off {
    color: #00B55B;
    background: none;
  }

  .score-mark .score_grade_two_on {
    color: #ffffff;
    background: #00B55B;
  }

  .score-mark span:nth-of-type(3) {
    border: 1px solid #2F9EC8;
  }

  .score-mark .score_grade_thr_off {
    color: #2F9EC8;
    background: none;
  }

  .score-mark .score_grade_thr_on {
    color: #ffffff;
    background: #2F9EC8;
  }

  .score-mark span:nth-of-type(4) {
    border: 1px solid black;
  }

  .score-mark .score_grade_for_off {
    color: black;
    background: none;
  }

  .score-mark .score_grade_for_on {
    color: white;
    background: black;
  }

  .score-operate {
    width: 40%;
    height: 16%;
    margin-left: 30%;
    margin-top: 10%;
    border-radius: 16px;
    border: 1px solid #D9D9D9;
  }

  .score-all-btn {
    width: 100%;
    height: 50%;
    background: white;
    border-radius: 16px 16px 0 0;
    border: none;
    color: black;
    font-size: 16px;
    font-weight: 600;
    outline: none;
  }

  .score-line {
    width: 100%;
    height: 1px;
    background: #D9D9D9;
  }

  .score-operate-btn {
    width: 100%;
    height: 50%;
    background: white;
    border-radius: 0 0 16px 16px;
    border: none;
    color: black;
    font-size: 16px;
    font-weight: 600;
    outline: none;
  }

</style>
