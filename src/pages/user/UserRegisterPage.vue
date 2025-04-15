<template>
    <div id="UserRegisterPage">
        <h2 class="title">用户注册</h2>
        <a-form
            style="max-width:480px; margin:0 auto;"
            :model="formState"
            name="basic"
            label-align="left"
            :label-col="{ span: 4 }"
            :wrapper-col="{ span: 20 }"
            autocomplete="off"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
        >
            <a-form-item
            label="账号"
            name="username"
            :rules="[{ required: true, message: '请输入账号' }]"
            >
            <!-- required: true表示是必填选项 -->
            <a-input v-model:value="formState.username" placeholder="请输入账号"/>
            </a-form-item>

            <a-form-item
            label="密码"
            name="password"
            :rules="[
            { required: true, message: '请输入密码' },
            { min: 6, message: '密码长度不能小于6位' }
            ]"
            >
            <a-input-password v-model:value="formState.password" placeholder="请输入密码"/>
            </a-form-item>

            <a-form-item
            label="确认密码"
            name="checkPassword"
            :rules="[
            { required: true, message: '请输入确认密码' },
            { min: 6, message: '密码长度不能小于6位' }
            ]"
            >
            <a-input-password v-model:value="formState.checkPassword" placeholder="请输入确认密码"/>
            </a-form-item>

            <a-form-item :wrapper-col="{ offset: 12, span: 12 }">
            <a-button type="primary" html-type="submit">注册</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script setup lang="ts" name="UserRegisterPage">
import { useLoginUserStore } from '@/store/useLoginUserStore';
import { message } from 'ant-design-vue';
import { reactive } from 'vue';
import {userRegister} from '@/api/user';
import { useRouter } from 'vue-router';

interface FormState {
  username: string;
  password: string;
  remember: boolean;
  checkPassword: string;
}
const router= useRouter()
const RegisterUserStore = useLoginUserStore();

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
  checkPassword: '',
});
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

// 提交表单
const handleSubmit=async(values:any)=>{
    // 判断两次输入密码是否一致
    if(formState.userPassword!==formState.checkPassword){
        message.error('两次输入密码不一致');
        return
    }
   const res= await userRegister(values)
//注册成功，直接跳转到登录页面
   if(res.data.code===0 && res.data.data){
    message.success('注册成功');
    router.push({
        path:'/user/login',
        replace:true
    })
}else {
    message.error('注册失败'+res.data.description);
}
};
</script>

<style scoped>
    .title {
        text-align: center;
        margin-bottom: 16px;
    }
</style>