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
有三个相关类，分别是Dep、Watch、Observe
Dep负责收集依赖，即将观察者watch放入subs中。
Watch负责生成一个观察者，会触发渲染。
Observe负责为每一个对象设置响应式。

初始化的时候，为对应的属性、数据等设置响应式，new Dep()。
首次渲染的时候，会new Watch()并触发渲染，渲染过程中会触发get方法，开始收集依赖到dep.subs数组中。
更新过程中，会触发set方法，设置新数据为响应式，调用对应dep.subs数组中的watch中的get方法进行渲染。

总的来说就是，
一开始遍历对象设置set和get方法，
当渲染的时候，就会触发get进行收集依赖到dep中，
当更新的时候就会触发set重新对新数据进行响应式，然后触发依赖dep中收集的watch对象的update方法进行更新，即调用对应watch的get方法。

## 3、请简述虚拟 DOM 中 Key 的作用和好处。


## 4、请简述 Vue 中模板编译的过程。