// 知道 nextTick 的作用吗，谈谈对它的理解，是什么，怎么用
/*
...
<div id="example">{{message}}</div>
...
var vm = new Vue({
el: '#example',
data: {
message: 'old message'
}
})
vm.message = 'new message' // 更改数据
vm.$el.textContent // 'old message'
Vue.nextTick(function () {
vm.$el.textContent // 'new message'
})

 */
/**
 * 当设置 vm.message = 'new message' 时，该组件不会立即渲染。
 * 当队列刷新时，组件会在下一个事件循环 tick 中更新。
 * 多数情况下，我们不关心这个过程，但如果想要基于更新后的 dom 状态来做点什么，可能会有些棘手
 * 为了在数据之后等待Vue完成更新 dom ，可以在数据变化之后立即使用 Vue.nextTick(callback)
 * 这样 callback 将在 dom 完成更新后被调用
 */

// nextTick 和 setTimeout 区别
/**
 * 首先 Vue 在更新 DOM 时是异步执行的，也就是说，数据变了，DOM 不会立即改变，那么，我们是如何知道 DOM 什么时候会改变呢？也就是说如何知道异步后的触发时机呢？
 *
 * 可以通过 netxTick 方法，这个方法在源码内先监听是否具备 Promise.then，
 * 利用 promise 来监听，若果当前环境不支持 promise,那么就降级采用 MutationObserver,
 * 如果 MutationObserver 不支持的话，那么久降级采用 setImmediate，
 * 如果 setImmediate 不支持的话，那么就使用 setTimeout(fn,0)
 *
 * 所以，nextTick 和 setTimeout 的区别就是，nextTick 会先尝试使用 promise MutationObserver、
 * setImmediate 这些技术监听，如果都不支持才会采用 setTimeout
 */
