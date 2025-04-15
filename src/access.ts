// 全局权限校验-全局路由守卫
import { message } from 'ant-design-vue'
import { userLogin } from './api/user'
import router from './router'
import { useLoginUserStore } from '@/store/useLoginUserStore'


router.beforeEach((to, from, next) => {
    // 获取登录用户信息
    const loginUserStore=useLoginUserStore()
    const loginUser=loginUserStore.loginUser
    const toUrl=to.fullPath
    if (toUrl.startsWith('/admin')) {
        if(!loginUser){
            message.error('您没有权限访问该页面')
            next('/user/login?redirect=${to.fullPath}')
            return;
        }
    }
    next()
})