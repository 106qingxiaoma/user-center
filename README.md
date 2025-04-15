# 用户中心前端系统

基于B站《Vue3+Ant Design实战》教学视频开发的前端用户中心页面，较完整实现前端界面与交互逻辑

##  项目特色

### 教学衍生亮点
- **功能特性**：
  - 动态路由守卫
  - 响应式布局优化
  - 增强型表单验证
- **模块化实践**：
  - API集中管理规范
  - Pinia状态管理方案
  - 组件化开发模式

### 纯前端解决方案
- **无后端演示方案**：
  - 本地存储模拟用户数据（LocalStorage）
  - 完整UI交互流程模拟

##  界面预览

| 登录页 | 注册页 | 用户管理页 | 
|--------|------------|--------|
| ![登录页](/screenshots/HomePage.png) | ![管zhu理页](/screenshots/RegisterPage.png) || ![登录页](/screenshots/ManagePage.png) |


##  技术栈

| 技术        | 用途                 | 完成功能       |
|-------------|----------------------|------------------|
| Vue3        | 前端框架             |  基础搭建    |
| Ant Design  | UI组件库             |  界面设计    |
| Pinia       | 状态管理             |  状态管理    |
| Vue Router  | 路由控制             |   路由配置    |

## 项目结构
src/
├── api/            # 模拟接口层
│   └── user.ts     # 用户相关API
├── assets/         # 静态资源
├── components/     # 公共组件
├── layouts/        # 页面布局
├── pages/          # 页面组件
├── router/         # 路由配置
├── store/          # Pinia状态管理
└── Mock/           # 备用mock数据

##  快速启动

### 纯前端运行（因资源有限，无后端接口，有些功能不够完善，后面会完善）
```bash
# 1. 克隆项目
git clone https://github.com/your-username/user-center.git

# 2. 进入目录
cd user-center

# 3. 安装依赖
npm install

# 4. 启动开发服务器
npm run dev
