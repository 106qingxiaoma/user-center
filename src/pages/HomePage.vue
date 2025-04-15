<template>
  <div id="HomePage">
    <h1>{{msg}}</h1>
  </div>
</template>

<script setup lang="ts" name="HomePage">
    const msg="欢迎来到用户中心"
</script>

<style scoped>
    #HomePage h1{
        text-align: center;
        font-size: 28px;
    }
</style>