<template>
  <div class="globalheader">
    <!-- 使用Grid布局，分为三个区域 -->
    <a-row>
      <a-col flex="150px">
        <div class="title-bar">
          <img src="@/assets/logo.png" alt="logo" class="logo" />
          <div class="title">用户中心</div>
        </div>
      </a-col>

      <a-col flex="auto">
        <a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
          @click="handleMenuClick"
        />
      </a-col>

      <a-col flex="80px">
        <div class="user-login-status">
          <div v-if="loginUserStore.loginUser.id">
            {{ loginUserStore.loginUser.username||"无名" }}
          </div>
          <div v-else>
            <a-button type="primary" href="/user/login">登录</a-button>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>


<script lang="ts" setup>
import { h, ref } from "vue";
import { HomeOutlined, CrownOutlined } from "@ant-design/icons-vue"; //引入图标
import { MenuProps } from "ant-design-vue";
import { useRouter } from "vue-router";
import { useLoginUserStore } from "@/store/useLoginUserStore";
const loginUserStore = useLoginUserStore();

const router = useRouter();

// 定义点击菜单的handleMenuClick路由跳转事件
// 查阅文档https://www.antdv.com/components/menu-cn/#Menu-Props
const handleMenuClick = ({ key }: { key: string }) => {
  router.push({
    path: key,
  });
};

// 实现页面刷新完之后还是高亮显示
const current = ref<string[]>(["mail"]);
router.afterEach((to) => {
  current.value = [to.path];
});

const items = ref<MenuProps["items"]>([
  {
    key: "/",
    icon: () => h(HomeOutlined),
    label: "主页",
    title: "主页",
  },
  {
    key: "/user/login",
    label: "用户登录",
    title: "用户登录",
  },
  {
    key: "/user/register",
    label: "用户注册",
    title: "用户注册",
  },
  {
    key: "/admin/manage",
    icon: () => h(CrownOutlined),
    label: "用户管理",
    title: "用户管理",
  },
  {
    key: "others",
    label: h(
      "a",
      {
        href: "http://www.baidu.com",   //由于资源有限，这里跳转到了百度，可任意修改
        target: "_blank",
      },
      "编程导航"
    ),
    title: "编程导航",
  },
]);
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
  /* 垂直居中 */
}
.logo {
  height: 48px;
}
.title {
  color: black;
  font-size: 18px;
  margin-left: 16px;
}
</style>
