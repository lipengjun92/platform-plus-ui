#### [腾讯云2019新春采购节](https://cloud.tencent.com/redirect.php?redirect=1036&cps_key=30280f92fc381dfc9e1d9e0e23d25a18&from=console)：
【开年好云 钜惠来袭】2019新春采购节，30款云产品感恩回馈。
[![腾讯云2019新春采购节](https://platform-wxmall.oss-cn-beijing.aliyuncs.com/active/tx/520_120.jpg)](https://cloud.tencent.com/redirect.php?redirect=1036&cps_key=30280f92fc381dfc9e1d9e0e23d25a18&from=console)

#### [阿里云开年采购季](https://www.aliyun.com/acts/product-section-2019/new-users?userCode=i8s6n64p)：
入门爆款云服务器，降低采购成本，开发者和小微企业首选。
[![阿里云开年采购季](https://platform-wxmall.oss-cn-beijing.aliyuncs.com/active/ali/540x250.jpg)](https://www.aliyun.com/acts/product-section-2019/new-users?userCode=i8s6n64p)

## 介绍
platform-plus-ui基于vue、element-ui构建开发，实现platform-plus后台管理前端功能。

## 实现功能
```
- 系统管理
    - 菜单管理
    - 组织机构
    - 系统参数
    - 字典管理
    - 文件上传
    - 系统日志
- 权限管理
    - 管理员列表
    - 角色管理
- 短信平台
    - 短信配置
- 任务调度
    - 定时任务
- 开发工具
    - 在线用户管理
    - 缓存信息
    - SQL监控
    - 接口文档
    - 代码生成器
```

# 技术栈
你需要在本地安装 nodejs。

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

# 部署Nginx配置参考
```
  location / {
        # 指向我们打包后上传的前端文件
        root /usr/local/nginx/dist;
        index index.html;
    }
    location /platform-plus {
        # 转发请求到后端
        proxy_pass                         http://localhost:8888;
        proxy_set_header  Host             $host;
        proxy_set_header  X-Real-IP        $remote_addr;
        proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;
    }
```

**项目演示**
- 演示地址：http://fly2you.cn/platform-plus/#/login
- 账号密码：admin/admin

**效果图：**
- 菜单管理
![https://platform-wxmall.oss-cn-beijing.aliyuncs.com/upload/platform-plus/platform-plus.jpg](https://platform-wxmall.oss-cn-beijing.aliyuncs.com/upload/platform-plus/platform-plus.jpg "菜单管理")
- 字典管理
![https://platform-wxmall.oss-cn-beijing.aliyuncs.com/upload/platform-plus/dict.png](https://platform-wxmall.oss-cn-beijing.aliyuncs.com/upload/platform-plus/dict.png "字典管理")
- 在线人数
![https://platform-wxmall.oss-cn-beijing.aliyuncs.com/upload/platform-plus/users.png](https://platform-wxmall.oss-cn-beijing.aliyuncs.com/upload/platform-plus/users.png "在线人数")
- 缓存数据
![https://platform-wxmall.oss-cn-beijing.aliyuncs.com/upload/platform-plus/doc.png](https://platform-wxmall.oss-cn-beijing.aliyuncs.com/upload/platform-plus/redis.png "缓存数据")
- 接口文档
![https://platform-wxmall.oss-cn-beijing.aliyuncs.com/upload/platform-plus/doc.png](https://platform-wxmall.oss-cn-beijing.aliyuncs.com/upload/platform-plus/doc.png "接口文档")

#### 提交反馈
1. 欢迎提交 issue，请写清楚遇到问题的原因，开发环境，复显步骤。
2. 不接受`功能请求`的 issue，功能请求可能会被直接关闭。  
3. 官方QQ群：
- <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=ac742b7481b95fac926a3f2196085108bceeebcdf14bd716cbea519751e69445"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="微同软件 ①群" title="微同软件 ①群"></a>
- <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=dcb460bfa21213a2712677bab7292fd8eb2138a1914af5af397b58e7c02690c5"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="微同软件 ②群" title="微同软件 ②群"></a>
- <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=c7657db5d4e65a40e46ee5998534f7b9b9fa56d0347c3af3157c7f6240c0d0dd"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="微同软件 ③群" title="微同软件 ③群"></a>

#### 常用API
- [Vue](https://cn.vuejs.org/v2/api/)
- [element-ui](http://element-cn.eleme.io/#/zh-CN/component/installation)
- [echarts](https://www.echartsjs.com/api.html#echarts)
- [iconfont](https://www.iconfont.cn/search/index)
