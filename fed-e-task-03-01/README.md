# 一、简答题
## 1、当我们点击按钮的时候动态给 data 增加的成员是否是响应式数据，如果不是的话，如何把新增成员设置成响应式数据，它的内部原理是什么。
let vm = new Vue({
 el: '#el'
 data: {
  o: 'object',
  dog: {}
 },
 method: {
  clickHandler () {
   // 该 name 属性是否是响应式的
   this.dog.name = 'Trump'
  }
 }
})

回答：
  因为在一开始初始化的时候只会给当前data和data内部的变量绑定get和set方法进行监听是否发生数据改变，所以对于新增的dog属性并没有绑定set和get方法，就不是响应式数据。

  如果要把新增成员设置成响应式数据，需要给新增成员绑定get和set方法，可以将walk和compile暴露出来，将新增加的成员和原本的data成员进行合并，然后调用_proxyData(newData)绑定vue实例中的data，再调用walk(newData)绑定$data，再调用compile(vm.$el)重新编译，即可设置新增成员为响应式数据。

 
## 2、请简述 Diff 算法的执行过程
Diff算法是对同级的节点进行比较。
如 ./Diff 算法的执行过程.png 所示。
按照顺序对节点进行遍历和处理。

# 二、编程题
## 1、模拟 VueRouter 的 hash 模式的实现，实现思路和 History 模式类似，把 URL 中的 # 后面的内容作为路由的地址，可以通过 hashchange 事件监听路由地址的变化。

回答：代码在 code/Vue-Router

## 2、在模拟 Vue.js 响应式源码的基础上实现 v-html 指令，以及 v-on 指令。

回答：代码在 code/minivue

## 3、参考 Snabbdom 提供的电影列表的示例，利用Snabbdom 实现类似的效果，如图：
