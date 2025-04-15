<template>
  <!-- header.content.footer框架 -->
  <div class="basic">
    <a-layout>
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="http://baidu.com" target="_blank"> 编程导航-页面底部 </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts" name="BasicLayout">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<style>
.basic .footer {
  background: #efefef;
  text-align: center;
  position: fixed;
  bottom: 0%;
  left: 0;
  right: 0;
  padding: 16px;
}
.basic .content {
  padding: 20px;
  margin-bottom: 20px;
  /* 添加背景渐变 */
  background: linear-gradient(to right, #efefef, #fff);
}
.basic .header {
  background: #fff;
  margin-bottom: 16px;
  color: unset;
  /* unset未设置，覆盖样式 */
  padding-inline: 20px;
}
</style>
