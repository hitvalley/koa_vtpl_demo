# koa_vtpl_demo
use koa with valleytpl

## 依赖环境

	NodeJS > 8.0

## 运行代码

	npm i -g nodemon # 需要sudo权限
	npm i
	npm start
	直接访问: http://localhost:3001

## 路由说明

在 routers 的目录下，参照 routers/main.js。

如果在main.js下的路由，会直接被解析，如

```javascript
// [main.js]
router.get('/test', ctx => { ctx.body = 'test'; });
// 访问: http://localhost:3001/test
```

如果其他的路由文件下的路由，会加入当前文件的文件名作为前缀，如

```javascript
[info.js]
router.get('/main', ctx => { ctx.body = 'test'; });
// 访问: http://localhost:3001/info/main
```

## 模板文件

模板文件在 assets/views 目录下，具体参照 assets/views/main.tpl

模板语法请参照 [valleytpl](https://github.com/hitvalley/valleytpl)

## 配置文件

* 主要配置文件 config/config.js
    * PORT: 运行端口
    * ENV: 运行环境
    * VIEW_PATH: 模板路径
    * STATIC_PATH: 静态文件路径
* 日志文件 config/log.js
    * 日志配置可以参照: [koa-log4](https://github.com/dominhhai/koa-log4js)
    * 日志打印方法: glog.info, glog.app, glog.error, glog.debug

## 查看日志

运行后在logs文件夹下

