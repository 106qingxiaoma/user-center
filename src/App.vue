<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts" name="BasicLayout">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useLoginUserStore } from "@/store/useLoginUserStore";

const userLoginStore = useLoginUserStore();
userLoginStore.fetchLoginUser();
</script>

<style>

</style>
