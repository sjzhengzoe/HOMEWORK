## 1. 请简述 React 16 版本中初始渲染的流程
生成fiberRoot和rootFiber，并建立两者的关系fiberRoot.current = rootFiber，rootFiber.stateNode = fiberRoot。
处理回调函数的this指向为render函数的第一个参数的dom元素。
设置过期时间，防止因为优先级的原因该任务一直被打断而未能执行，到了过期时间还未执行就强制执行，初始化时不能被打断，所以被设置为一个固定的值，表示是同步任务，不可被打断。
创建update对象并初始化
设置update.payload = {element}
设置update.callback = callback
添加update到enqueueUpdate队列中
构建workInProgressRoot，该阶段分为以下两个步骤。
一、从父到子，构建当前fiber和children之间的parent关系，child和child之间的sibling关系
二、从子到父
    如果当前fiber有子级则返回子级为下一个处理的fiber，没有子级则先收集子级的effects到父effect中
    如有兄弟节点则返回兄弟节点为下一个处理的fiber
    如有父节点则返回父节点的兄弟节点为下一个处理的fiber
render阶段结束
commit阶段开始
    销毁 workInProgress Fiber 树
    第一个子阶段：执行DOM操作
    第二个子阶段：执行DOM操作
    第三个子阶段：指向操作DOM后

## 2. 为什么 React 16 版本中 render 阶段放弃了使用递归
由于递归使用 JavaScript 自身的执行栈，一旦开始就无法停止，直到任务执行完成。如果 VirtualDOM 树的层级比较深，virtualDOM 的比对就会长期占用 JavaScript 主线程，由于 JavaScript 又是单线程的无法同时执行其他任务，所以在比对的过程中无法响应用户操作，无法即时执行元素动画，造成了页面卡顿的现象。

## 3. 请简述 React 16 版本中 commit 阶段的三个子阶段分别做了什么事情
第一个子阶段：执行DOM操作
    处理类组件的 getSnapShotBeforeUpdate 生命周期函数
第二个子阶段：执行DOM操作
    根据要做的dom操作的不同，进行dom操作
第三个子阶段：指向操作DOM后
    类组件处理生命周期函数以及执行callback函数
    函数组件处理钩子函数


## 4. 请简述 workInProgress Fiber 树存在的意义是什么
即实现双缓存技术。
在内存中构建workInProgress Fiber 树，等到构造完成后直接替换，即可解决白屏时间的问题。