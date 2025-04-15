import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 引入Ant Design
import Antd from "ant-design-vue";
// 引入Ant Design样式
import "ant-design-vue/dist/reset.css";
//引入pinia
import { createPinia } from "pinia";
// 引入mock
import "@/Mock";
// 引入全局校验
import "@/access.ts";

// 创建pinia实例
const pinia = createPinia();

createApp(App).use(Antd).use(router).use(pinia).mount("#app");
