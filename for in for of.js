// for in 和 for of 循环的区别
/**
 * for in
 * 用于遍历对象的键（‘key’）,会遍历自身所有的和原型链上的可枚举属性。
 * 如果是数组，会将数组索引作为对象的 key 来遍历。
 * 其他的 object 也是一样的
 *
 * for of
 * es6 引入的语法，用于遍历所有迭代器 iterator
 * 其中包裹 HTMLCollection, NodeList, Array, Map, Set, String, TypedArray, arguments 等对象的值
 */
