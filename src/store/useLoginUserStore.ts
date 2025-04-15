// 使用用户登录信息
import { defineStore } from "pinia";
import { ref } from "vue";
import { getCurrentUser } from "@/api/user";

// 定义用户登录信息
export const useLoginUserStore = defineStore("loginUser", () => {
  const loginUser = ref({
    username: "",
    id: "",
  });
  // 获取用户登录信息
  async function fetchLoginUser() {
    const res = await getCurrentUser();
    loginUser.value = res.data;
  }
  // 单独设置信息
  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser;
  }
  return { loginUser, fetchLoginUser, setLoginUser };
});
