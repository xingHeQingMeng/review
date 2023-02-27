/**
 * promise 是异步编程的一种解决方案：
 * 从语法上讲，promise 是一个对象，从他可以获取异步操作的消息：
 * 从本意上讲，他是承诺，承诺过他一段时间给你一个结果。
 * promise有三种状态：pending（等待），fulfiled（成功态），rejected（失败态）：状态一旦改变就不会再变。
 * 创造 promise 实例后，他会立即执行
 */

// 用途

/**
 * promise是用来解决两个问题的：
 * 回调地狱，代码难以维护，常常第一个函数的输出是第二个函数的输入这种现象
 * promise 可以支持多个并发的请求，获取并发中的请求
 * 这个promise 可以解决异步的问题，本身不能说 promise 是异步的
 */

/**
 * promise like
 * 实现 promise A+ 规范的对象
 * thenable
 */

// promise all
/**
 * promise.all() 用与一个异步操作需要在几个异步操作完成之后再进行时使用。
 * promise.all() 接受一个由 promise 对象组成的数组参数，返回 promise 对象
 * 当数组中所有 promise 都完成了，就执行当前 promise 对象的 then 方法，
 * 如果数组中有一个 promise 执行失败了，就执行当前 promise 对象的 catch 方法
 */

// async awati 区别

/**
 * 1）函数前多了 async 关键字，await关键字只能用在 async 定义的函数内部
 * async函数会隐式的返回一个 promise ，该 promise 的resolve 的值就是函数 return 的值
 * 2）第一点按时我们不能在外层代码中使用await，因为不在 async 函数内
 *   1. async/await是配对使用的，await 存在与async 内部。否则会报错
 *   2. await 表示在这里等待一个 promise 返回。在接下来在执行。
 *   3. await 后面跟着的应该是一个 promise 对象（promise like），（也可以不是，如果不是接下来也没什么意义。。。）
 */

// async/awati 如何抛出异常

/**
 * 如果可能出错的代码比较少的时候可以使用 try/catch 结构来处理，
 * 如果可能出错的代码比较多的时候，
 * 可以利用 async 函数返回一个 promise 对象的原理来处理
 * 给 async 修饰的函数调用后返回的 promise 对象，
 * 调用 catch 方法来处理异常
 */
