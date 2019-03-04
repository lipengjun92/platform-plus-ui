# 介绍

platform-plus-ui基于vue、element-ui构建开发，实现platform-plus后台管理前端功能。

# 功能

```
- 管理员列表
- 角色管理
- 菜单管理
- 组织机构
- 系统参数
- 数据字典管理
- 文件上传
- 定时任务
- 系统日志
- SQL监控
- 代码生成器
- 缓存信息
- 在线用户管理
- 短信配置

- 前后端分离，通过token进行数据交互，可独立部署
- 主题定制，通过scss变量统一一站式定制
- 动态菜单，通过菜单管理统一管理访问路由
- 发布时，可动态配置CDN静态资源／切换新旧版本
- 更多，持续迭代中...
```

# 技术栈

你需要在本地安装 nodejs，提前了解和学习这些知识会对使用本项目有很大的帮助。

- [nodejs](http://nodejs.org/)
- [ES6](http://es6.ruanyifeng.com/)
- [vue-cli](https://github.com/vuejs/vue-cli)
- [vue](https://cn.vuejs.org/index.html)
- [vue-router](https://github.com/vuejs/vue-router)
- [vuex](https://github.com/vuejs/vuex)
- [axios](https://github.com/axios/axios)
- [vue-cookie](https://github.com/alfhen/vue-cookie)
- [element-ui](https://github.com/ElemeFE/element)
- [iconfont](http://www.iconfont.cn/)

# 目录结构

本项目已经通过vue-cli脚手架为你生产完整的开发框架（有根据业务需求做调整修改），下面是整个项目的目录结构。

```bash
├── build                      // 构建相关  
├── config                     // 构建配置相关
├── dist                       // 构建打包生成部署文件
│   ├── 1902151513             // 静态资源（19年02月15日15时13分）
│   ├── config                 // 配置
│   ├── index.html             // index.html入口
├── src                        // 源代码
│   ├── assets                 // 静态资源
│   ├── components             // 全局公用组件
│   ├── element-ui             // element-ui组件配置
│   ├── element-ui-theme       // element-ui组件主题配置
│   ├── icons                  // 所有 svg icons
│   ├── router                 // 路由
│   ├── store                  // 全局 store管理
│   ├── utils                  // 全局公用方法
│   ├── views                  // view
│   ├── App.vue                // 入口组件
│   ├── main.js                // 入口
├── static                      // 第三方不打包资源
│   ├── config                 // 全局变量配置
│   ├── img                    // favicon图标
│   ├── plugins                // 插件
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── index.html                 // html模板
└── package.json               // package.json
```

# 部署Nginx配置参考
```
  location / {
        # 指向我们打包后上传的前端文件
        root /usr/local/nginx/dist;
        index index.html;
    }
    location /platform-plus {
        # 转发请求到后端
        proxy_pass                         http://localhost:8080;
        proxy_set_header  Host             $host;
        proxy_set_header  X-Real-IP        $remote_addr;
        proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;
    }
```
# 安装

```bash
# 安装依赖
npm install

# 启动服务
npm run dev
```

安装过程中，可能会出现安装过慢、报错等情况，请尝试以下方式：

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org

cnpm install

# 启动服务
npm run dev
```


启动完成后会自动打开浏览器访问 [http://localhost:8000]()。


**项目演示**
- 演示地址：http://fly2you.cn/platform-plus/#/login
- 账号密码：admin/admin


**效果图：**

##### 菜单管理
![https://platform-wxmall.oss-cn-beijing.aliyuncs.com/upload/platform-plus/platform-plus.jpg](https://platform-wxmall.oss-cn-beijing.aliyuncs.com/upload/platform-plus/platform-plus.jpg "菜单管理")
##### 字典管理
![https://platform-wxmall.oss-cn-beijing.aliyuncs.com/upload/platform-plus/dict.png](https://platform-wxmall.oss-cn-beijing.aliyuncs.com/upload/platform-plus/dict.png "字典管理")
##### 在线人数
![https://platform-wxmall.oss-cn-beijing.aliyuncs.com/upload/platform-plus/users.png](https://platform-wxmall.oss-cn-beijing.aliyuncs.com/upload/platform-plus/users.png "在线人数")


#### 提交反馈

1. 欢迎提交 issue，请写清楚遇到问题的原因，开发环境，复显步骤。

2. 不接受`功能请求`的 issue，功能请求可能会被直接关闭。  

3. 官方QQ群：<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=2d02d83d8be4c2cb6848bbae1df1037ba2acddecd2a1aa8cef7b3e4ab4ff75aa"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="微同软件 ①群" title="微同软件 ①群"></a><a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=990a15d445ef791dba99d22d9772c06ac7894ffa6ac639b1eec530554c432583"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="微同软件 ②群" title="微同软件 ②群"></a>


#### 常用API
- [Vue](https://cn.vuejs.org/v2/api/)
- [element-ui](http://element-cn.eleme.io/#/zh-CN/component/installation)
- [echarts](https://www.echartsjs.com/api.html#echarts)
- [iconfont](https://www.iconfont.cn/search/index)
