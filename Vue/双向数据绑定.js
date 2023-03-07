// Vue 双向数据绑定原理是什么
/**
 * 在 Vue 2.x 中，双向数据绑定是通过 数据劫持 结合 发布订阅模式实现的。
 * 也就是数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之改变。
 * 核心：关于 Vue 双向数据绑定，其核心是 Object.defineProperty 方法
 * 
 * 在 Vue 3.x 中，使用 ES6 语法 Proxy 对象来实现
 * 
 * Object.definePropety 的缺点
 *  - 只能监听对象，不能监听数组的变化，无法触发 push pop shifit unshift splice sort reverse
 *  - 必须遍历对象的每个属性
 *  - 只能劫持当前对象属性，如果像深度劫持，必须深层便利嵌套的对象
 * 
 * Proxy的优点
 *  - 可以直接监听对象而非属性
 *  - 可以直接监听数组的变化，
 *  - 有多达十三种拦截方法，不限于 apply onwKeys deleteProperty has 
 *  - 返回的是一个新对象，我们可以只操作新对象达到目的，而 Object.defineProperty 只能遍历都西昂属性直接修改
 *  - 作为新标准将受到浏览器厂商重点持续的性能优化
 */