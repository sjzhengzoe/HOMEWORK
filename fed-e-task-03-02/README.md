# 一、简答题

## 1、请简述 Vue 首次渲染的过程。

Vue初始化相关的实例成员、静态成员。
通过new Vue()调用this._init()方法进行初始化。
初始化相关的变量。
调用重写后的$mount进行渲染。
如果用户没有传render参数，则需要判断是否有template，根据情况获取template的值。通过compileToFunctions将template转换成render函数。
调用重写前的$mount函数。
new Watcher()
调用watch实例的get方法，将watch实例入栈，并调用updateComponent，通过_render获取虚拟dom，通过_update更新到dom上。

具体可看 notes/内容总结.xmind Part 3· Vue.js 框架源码与进阶->首次渲染过程。
## 2、请简述 Vue 响应式原理。

## 3、请简述虚拟 DOM 中 Key 的作用和好处。

## 4、请简述 Vue 中模板编译的过程。