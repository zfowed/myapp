# 我的应用

> 一个在前台可以自定义路由，自定义API，管理用户的权限的系统。

*   对路由增删改查。
*   对API增删改查，支持文件上传，统一接口。
*   可增加删除工具方法，在路由控制器、API控制器内调用。
*   工具方法可操作全局状态管理，数据库等操作。
*   文件管理系统，对HTML模板文件、静态文件管理，可以上传下载。
*   具有用户管理系统，可针对每个角色分配路由、API的访问权。
*   居于KOA2.0开发，ES7异步/等待支持。

## 目录结构

*   function 内部方法
    *   ...若干个内部方法
*   middlewares 中间件
    *   ...若干个中间件
*   public 存放静态文件的文件夹（可通过配置文件修改）
*   store 集中状态管理
    *   apis 处理API
        *   ...若干个核心API
    *   databases 数据库
        *   app 应用级数据库
            *   index.js 处理应用级数据库，默认sqlite3数据库，可改为自己的数据库
        *   config 配置管理
            *   index.js 处理配置文件
        *   core 核心级数据库
            *   index.js 核心级数据库，默认sqlite3数据库
        *   data 存储数据库文件的文件夹
            *   database_app.db 应用级数据库（可通过配置文件修改）
            *   database_core.db 核心级数据库（可通过配置文件修改）
            *   config_db.json 存储配置文件
    *   routers 处理路由
        *   ...若干个核心路由
    *   tools 处理工具方法
        *   ...若干个核心工具方法
*   upload_files 临时存放上传文件的文件夹（可通过配置文件修改）
*   views 存放视图模板文件的文件夹（可通过配置文件修改）
*   app.js 启动文件
*   config.js 初始配置文件
*   admin.zip 前台管理员页面（可静态打开）

## 简单的例子

![简单的例子](https://github.com/zfowed/myapp/raw/master/screenshots/simple_example.gif)

## 跟多功能自行摸索

![简单的例子](https://github.com/zfowed/myapp/raw/master/screenshots/more.png)