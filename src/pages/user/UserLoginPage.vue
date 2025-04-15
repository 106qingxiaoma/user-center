<template>
    <div id="UserLoginPage">
        <h2 class="title">用户登录</h2>
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
            label="Password"
            name="password"
            :rules="[
            { required: true, message: '请输入密码' },
            { min: 6, message: '密码长度不能小于6位' }
            ]"
            >
            <a-input-password v-model:value="formState.password" placeholder="请输入密码"/>
            </a-form-item>

            <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
            <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
            </a-form-item>

            <a-form-item :wrapper-col="{ offset: 12, span: 12 }">
            <a-button type="primary" html-type="submit">登录</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script setup lang="ts" name="UserLoginPage">
      import { useLoginUserStore } from '@/store/useLoginUserStore';
      import { message } from 'ant-design-vue';
      import { reactive } from 'vue';
      import {userLogin} from '@/api/user';
      import { useRouter } from 'vue-router';

      interface FormState {
        username: string;
        password: string;
        remember: boolean;
      }
      const router= useRouter()
      const loginUserStore = useLoginUserStore();

      const formState = reactive<FormState>({
        username: '',
        password: '',
        remember: true,
      });
      const onFinish = (values: any) => {
        console.log('Success:', values);
      };

      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

      // 提交表单
      const handleSubmit=async(values:any)=>{
        const res= await userLogin(values)
        if(res.data.code===0 && res.data.data){
          await loginUserStore.fetchLoginUser();
          message.success('登录成功');
          router.push({
              path:'/',
              replace:true
          })
      }
          console.log("success",values)
      };
</script>
<style scoped>
    #UserLoginPage {
        
    }
    .title {
        text-align: center;
        margin-bottom: 16px;
    }
</style>