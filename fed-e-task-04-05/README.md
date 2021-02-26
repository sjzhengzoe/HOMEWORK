# 1.通过该项目，请简要说明 typescript 比 javascript 的优势在哪？

1、拼写错误能够及时发现并进行改正
2、进行函数等传参或者赋值的时候很容易写少、写多、写错类型的错误 及时提醒和改正 避免在编译后发现错误 节省开发时间
3、智能提示更加方便

# 2.请简述一下支付流程

# 3.react-redux 的主要作用是什么，常用的 api 有哪些，什么作用？

主要就是状态管理，将整个页面的数据状态一个容器 store 中，方便各个组件获取状态，避免组件状态一层传一层。
主要 API：
Provider 通过该 API 来给各个组件提供获取的 store 数据。
useDispatch 通过该 API 获取 dispatch，dispatch 可用于派发 action。
useSelector 通过该 API 获取容器中的 state 状态

# 4.redux 中的异步如何处理？

该项目使用了 react-saga 中间件来处理异步，当 dispatch 派发 action，先通过中间件 react-saga 进行处理，处理后再交给 reducer 处理。
