<template>

  <div class="parent">
    <div class="child1"> child1</div>
    <div class="child2"> child2</div>
  </div>
</template>
<script>

</script>
<style>
  /*注意将assistor和parent大小设置为一样*/
  /*assistor :助推器,帮助者*/
  .parent {
    width: 500px;
    height: 300px;
    overflow: auto;
    position: absolute;
  }

  .child1 {
    width: 400px;
    height: 200px;
    background-color: #42b983;
    position: absolute;
    z-index: 1;
  }

  .child2 {
    width: 300px;
    height: 200px;
    background-color: red;
    position: absolute;
    z-index: 2;
  }
</style>
