// 统一维护api接口
import myAxios from "@/request";

// 用户注册接口：user/register
export const userRegister = async (params: any) => {
  const res = await myAxios.request({
    url: "/user/register",
    method: "post",
    data: params,
  });
  return res.data;
};
// 用户登录接口：user/login
export const userLogin = async (params: any) => {
  const res = await myAxios.request({
    url: "/user/login",
    method: "post",
    data: params,
  });
  return res.data;
};
// 用户信息接口：user/info
export const userLogout = async (params: any) => {
  const res = await myAxios.request({
    url: "/user/logout",
    method: "post",
    data: params,
  });
  return res.data;
};
// 获取当前用户
export const getCurrentUser = async () => {
  const res = await myAxios.request({
    url: "/api/user/current",
    method: "get",
  });
  return res.data;
};
// 获取用户列表
export const getUserList = async (username: any) => {
  const res = await myAxios.request({
    url: "/user/list",
    method: "get",
    params: { username },
  });
  return res.data;
};

export const searchUsers = async (username: any) => {
  const res = await myAxios.request({
    url: "/user/search",
    method: "get",
  });
  return res.data;
};

// 删除用户
export const deleteUser = async (id: string) => {
  const res = await myAxios.request({
    url: "/user/delete",
    method: "post",
    data: id,
    // 传递JSON数据
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};
