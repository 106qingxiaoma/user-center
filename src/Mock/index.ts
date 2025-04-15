import Mock from 'mockjs'
Mock.mock("/api/user/current","get",{
    "username":"@cname",
    "avatar":"@image('100x100')",
})