<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {
      var arrs = this.getRequest();
      for (var temp in arrs) {
        console.log("key = " + temp + " value = " + arrs[temp]);
        if (temp === "subject") {
          this.GLOBAL.subjectType = arrs[temp];
        }
      }
    },
    methods: {
      getRequest: function () { //获取url中"?"符后的字串
        var url = location.search;
        console.log(url);
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
          var str = url.substr(1);
          var strs = str.split("&");
          for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
          }
        }
        return theRequest;
      },
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
