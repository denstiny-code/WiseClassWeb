<template>
  <div>
    <tab class="screen" :tabtitles="tabs" :slidable="false">
      <div class="tab-content-container">
        <ul id="J_List">
          <li v-for="item in items" v-bind:key="item.name" @click="mark()">
            <img src="../../static/img/test.jpg"/>
            <span class="test-paper-name">{{item.name}}</span>
            <span class="test-paper-grade">{{item.score}}</span>
            <img class="test-paper-check" src="../img/photo_check.png"/>
          </li>
        </ul>
      </div>
      <div class="tab-content-container">
        bajian2
      </div>
      <div class="tab-content-container">
        bajian3
      </div>
      <div class="tab-content-container">
        bajian4
      </div>
    </tab>
    <div class="test-bottom">
      <div class="test-bottom-div">
        <img class="test-bottom-screen" src="../img/icon_tingzhi.png" @click="screen()"/>
      </div>
    </div>
  </div>
</template>

<script>
  import tab from './vue-tab'

  export default {
    components: {
      tab
    },
    data() {
      return {
        'tabs': ['优', '良', '中', '差'],
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
    }
  }
</script>

<style>
  .screen {
    color: #2c3e50;
    width: 100%;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    /*text-align: center;*/
    margin-bottom: 10%;
  }

  .tab-content-container {
    width: 99%;
    height: 100%;
    margin: 0px auto;
  }

  /*TO change the active color u like*/
  .tab-title.active, .tab-title:active {
    border-bottom: 2px solid #36acf4;
    color: #36acf4;
  }

  .tab-content-container ul li {
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
    width: 60px;
    height: 60px;
    margin-top: -5%;
  }
</style>
