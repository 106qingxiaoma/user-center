<template>
    <div id="UserManagePage">
        <a-input-search
            style="width: 320px; margin-bottom: 20px;margin-left: 600px"
            v-model:value="searchValue"
            placeholder="请输入用户名搜索"
            enter-button
            @search="onSearch"
        />
        <a-table :columns="columns" :data-source="data">
            <template #bodyCell="{ column,record }">
                <template v-if="column.dataIndex === 'avatarUrl'">
                    <a-image :src="record.avatarUrl" :width="120"/>
                </template>
                <template v-else-if="column.dataIndex === 'userRole'">
                    <div v-if="record.userRole===1">
                        <a-tag color="green">管理员</a-tag>
                    </div>
                    <div v-else>
                        <a-tag color="blue">普通用户</a-tag>
                    </div>
                </template>
                <template v-else-if="column.dataIndex === 'createTime'">
                    {{ dayjs(record.createTime).format('YYYY-MM-DD HH:mm:ss') }}
                </template>
                <template v-else-if="column.dataIndex==='action'">
                    <a-button danger @click="doDelete(record.id)">删除</a-button>
                </template>
            </template>
        </a-table>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { deleteUser, getUserList } from '../../api/user';
import { message } from 'ant-design-vue';
import dayjs from 'dayjs';


const searchValue = ref('');

const onSearch = () => {
     // 执行搜索，获取数据
//     fetchData(searchValue.value);   //直接调用，并将值传递给后端

}

const doDelete=async (id:string)=>{
    // 调用后端接口，删除数据
    if(!id){   //id不存在，则不进行删除
        return;
    }   
    const res=await deleteUser(id);   //调用后端deleteUser函数
    if (res.data.data===0) {
        message.success('删除成功')
    }else {
        message.error('删除失败')
    }
 }

    const columns = [
    {
        title: 'id',
        dataIndex: 'id',
    },
    {
        title: '用户名',
        dataIndex: 'name',
    },
    {
        title: '账号',
        dataIndex: 'username',
    },
    {
        title: '头像',
        dataIndex: 'avatarUrl',
    },
    {
        title: '性别',
        dataIndex: 'gender',
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
    },
    {
        title: '状态',
        dataIndex: 'status',
    },
    {
        title: '操作',
        dataIndex: 'action',
    },
    ];

    const data = [
        // 如果有接口，此处应该是一个空数组，从后端调用数据
    {
        key: '1',
        name: 'John Brown',
    },
    {
        key: '2',
        name: 'Jim Green',
    },
    {
        key: '3',
        name: 'Joe Black',
    },
    {
        key: '1',
        name: 'John Brown',
    },
    {
        key: '1',
        name: 'John Brown',
    },
    {
        key: '1',
        name: 'John Brown',
    },
    {
        key: '1',
        name: 'John Brown',
    },
    {
        key: '1',
        name: 'John Brown',
    },
    ];

</script>
