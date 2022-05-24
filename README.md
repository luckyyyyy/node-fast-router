# node-fast-router

一个 nodejs 简易 router 的实现，与现有 koa express hapi 的路由不同 支持动态刷新和删除
这种路由一般用于 MockServer 或特殊场景 本项目只提供一个思路 无任何支持

## dev

yarn dev

## 功能

* 仅支持非正则 /api/test/{id}
* 或者普通的 /api/test/id

## 性能

不使用任何正则 不依赖任何库 无任何负担 理论上性能还可以 但代码写的不够认真 请自行查阅源码
内存占用可以降低 但因为nodejs项目 大家都不是很在意内存 所以稍微消耗点无所谓
