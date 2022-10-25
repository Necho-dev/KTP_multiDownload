## 课堂派批量下载插件

基于 wokoo脚手架搭建的工程，用于油猴插件开发。该插件支持一键批量下载课堂派作业中的全部附件。

**基础配置：**

- vue
- less
- webpack

## 目录结构

```
.
├── README.md 说明
├── package-lock.json
├── package.json
├── dist 打包文件
│   ├── index.html html 文件
│   ├── app.bundle.js 脚本文件
│   ├── app.bundle.js.map
│   └── app.bundle.js.LICENSE.txt
├── public 静态文件
│   ├── favicon.ico
│   ├── icon.jpg
│   └── index.html html 文件
├── src
│   ├── app.less
│   ├── app.vue
│   └── index.js 项目入口
├── tampermonkey.js 油猴脚本入口文件
├── webpack.config.base.js
└── webpack.config.js webpack 配置
```

## 开发

**启动**
进入项目目录后，在命令行中输入：

```shell
npm start
```

**调试**

1. 打开浏览器，输入`localhost:8080`，查看页面展示是否正常。
2. 安装油猴插件
3. 打开油猴插件编辑界面，将 tampermonkey.js 里的内容复制到编辑框中，保存。
4. 打开课堂派作业页面，比如`https://www.ketangpai.com/#/homework*`，

- 查看油猴 icon 是否有一个 1 的数字标志，如果有说明油猴脚本已经成功激活
- 网页的右上角会出现初始页面

**构建**

```shell
npm run build
```
