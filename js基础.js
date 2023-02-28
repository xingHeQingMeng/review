// JS 的数据类型有哪些？如何判断数据类型？他们的优缺点是什么？
/**
 * 数据类型
 *  - String
 *  - Number
 *  - Boolean
 *  - undefined
 *  - null
 *  - Array
 *  - Object
 *  - Symbol
 *  - BigInt
 *  - Set
 *  - Map
 *  - WeekSet
 *  - WeekMap
 *
 * 判断数据类型
 *  - typeof 判断数据类型
 *  检测的不管是数组还是正则，都会返回 'object',
 *  所以 typeof 不能判断一个值是否为数组
 *
 *  - instanceof/constructor
 *  检测一个实例是否属于某一个类。
 *  使用 instanceof/constructor 可以检测数组和正则
 *  用 instanceof 来检测的时候，只要当前的这个类在实例的原型链上，
 *  检测出来的结果都是 true
 *  基本数据类型的值是不可以用 instanceof 来检测的
 *  在类的原型继承中，instanceof检测出来的结果其实是不准确的
 *
 *  - Object.prototype.toString.call(value) -> 找到 Object 原型上的 toString 方法，绑定 this 为 value 执行方法，
 *  检测的类型比较多，也比较精准
 */

// 如何理解symbol

/**
 * Symbol 是 ES6 新推出的一种基本类型，他表示独一无二的值
 * 他可以选择接受一个字符串作为参数，也可以不传，但是，相同参数的两个 Symbol 值不相等
 *
 * 通过 typeof 可以判断是否为 Symbol 类型
 *
 *  - Symbol.for() 用来检测该字符串参数作为名称的 Symbol 值是否已经被登记，
 * 返回一个已登记的 Symbol 类型的 key
 *  let a1 = Symbol.for('a');
 *  Symbol.keyFor(a1); // 'a'
 *  let a2 = Symbol('a');
 *  Symbol.keyFor(a); // undefined
 *
 *  - description 用来返回 Symbol 数据的描述
 *  let a = Symbol('abc');
 *  a.decription; // 'abc'
 *  Symbol.keyFor(a); // undefined
 */

// 数组常用方法

/**
 * concat 链接两个或更多的数组，并返回结果
 * join 把数组的所有元素放入一个字符串，元素通过传入的分隔符进行分割。
 * pop 删除并返回数组的最后一个元素
 * shift 删除并返回数组的第一个元素
 * push 向数组的末尾添加一个或更多元素，并返回新的长度
 * unshift 向数组的开头添加一个或更多元素，并返回新的长度
 * reverse 反转数组
 * slice 选取数组中的指定元素返回
 * sort 对数组元素进行排序
 * splice 删除指定元素，并在对应位置添加新元素
 * toSource 返回该对象的源代码
 * toString 把数组转换为字符串，并返回结果
 * toLocaleString 把数组转换为本地数组，并返回结果
 * valueOf 返回数组对象的原始值
 */

// 对象遍历方法
/**
 *
 * for in
 * 基本语法
 * for(let key in obj){循环体程序}
 * 需要注意的是
 *  1. 变量中存储的键名，通过键名获取存储的键值
 *     因为是变量，点语法不支持，需要使用obj[key]形式获取
 *  2. 循环便令，定义 let 和 var 执行效果是不同的
 *
 * Object.keys(obj)
 *  Object.keys 返回对象所有可枚举键值组成的数组，
 *  遍历该数组再执行操作
 *
 * Object.values(obj)
 * 返回对象中所有值组成的数组
 */

// 数组扁平化
/**
 * 所谓数组扁平化就是将多维数组转化为一维数组，
 * 一般数组扁平化数组中存储的多维数据都是数组，不会是对象或函数
 */
/**
 * 最常用的方法就是，数组 toString()方法转为字符串
 * 结果就是 获取数组中的每个单元的数据组成一个字符串，使用逗号间隔
 * 在以逗号为间隔，将字符串转化为数组
 *
 */
function flat1(arr) {
  return arr.toString().split(',');
}
/**
 * 还可以使用 数组.some 方法判断数组中是否还存在数组
 * 再使用 展开运算符 赋值
 */
function flat2(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
/**
 * es6 中，新增flat函数也可以实现数组的扁平化，参数是固定的
 */
var arr = [].flat(Infinity);


