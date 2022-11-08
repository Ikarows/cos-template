<div align="center">
<p><img width="150" src="https://avatars0.githubusercontent.com/u/25151659?s=460&v=4"></p>

<h1>cos-template</h1>

<p>
   <strong>vue3 + vite + ts 开箱即用开发模板</strong>,
</p>

<p>
  <sub>Made with ❤︎ by
    <a href="https://github.com/Ikarows">Ikarows</a>
  </sub>
</p>

</div>

<br>
<br>

## 项目地址

```shell
git clone https://github.com/Ikarows/cos-template.git
```

<br />

## `node` 版本推荐

因为该模板采用目前较新技术栈，所以推荐大家使用 `node` 当前的长期维护版本 `v16`， 大于 `v16.13.1` 即可。
<br />

## 技术栈

- Vue3
- Vite3
- TypeScript
- VueRouter4
- Axios
- Pinia
- Eslint
- Mocks

## 开发

```bash

# install cnpm
npm install cnpm -g --registry=https://registry.npm.taobao.org;

# install dependencies
cnpm i

# strat
npm run serve

# build
npm run build

# eslint
npm run lint
```

## 项目目录

```bash
├── .vscode            # vscode配置
├── public             # 静态文件
├── src                # 项目文件夹
│   ├── api            # API接口
│   ├── assets         # 资源文件夹
│   │   ├── img        # 图库
│   │   ├── js         # 脚本
│   │   └── css        # 样式（scss, css, less）
│   ├── components     # 公用组件
│   ├── config         # 配置文件
│   │   ├── http.ts    # axios 封装
│   │   └── request.ts # 请求封装(get，post)
│   ├── mock           # mock数据
│   ├── pages          # 页面目录
│   ├── router         # 路由目录
│   ├── store          # Pinia 目录
│   ├── utils          # 公用函数目录
│   ├── App.vue        # vue 根文件
│   ├── main.ts        # vue 入口js
│   ├── style.css      # 默认样式
│   └── vite-env.d.ts  
│
├── .env.development   # 开发环境变量
├── .env.production    # 生产环境变量
├── .eslintignore      # eslint忽略文件
├── .eslintrc.cjs      # eslint配置
├── .gitignore         # git忽略文件
├── .prettierignore    # prettier忽略文件
├── .prettierrc        # prettier风格配置
├── index.html         # 首页入口文件
├── package.json       # 依赖包
├── README.md          # 项目说明
├── tsconfig.json      # ts 配置文件
├── tsconfig.node.json # ts 配置文件
├── upload.mjs         # 自动化部署
└── vite.config.ts     # vite配置文件
```

## 自动化部署

- upload.mjs 文件中配置

**例子如下**

```javascript
const serve = {
  dev: {
    // 测试服务器
    host: '', // 服务器的IP地址
    port: '22', // 服务器端口， 一般为 22
    username: '', // 用户名
    password: '', // 密码
    // privateKey: require('fs').readFileSync('D:\\key.ppk'),
    passphrase: 'private_key_password',
    path: '' // 项目部署的服务器目标位置
  },
  pro: {
    // 正式服务器
    host: '', // 服务器的IP地址
    port: '22', // 服务器端口， 一般为 22
    username: '', // 用户名
    password: '', // 密码
    // privateKey: require('fs').readFileSync('D:\\key.ppk'),
    passphrase: 'private_key_password',
    path: '' // 项目部署的服务器目标位置
  }
}
```

- 打包发布到`测试`服务器

```shell
npm run deploy -- dev
```

- 打包发布到`正式`服务器

```shell
npm run deploy -- pro
```

## 代理模式

- vite.config.ts 文件中配置

**例子如下**

```javascript
proxy: {
  '/api': {
    target: 'http://127.0.0.1:8000',
    changeOrigin: true,
    secure: false,
    rewrite: path => path.replace(/^/api/, '')
  }
}
```
