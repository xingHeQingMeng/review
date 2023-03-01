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

// typeof 原理
/**
 * 利用 typeof 是根据返回值的结果来判断数据类型
 * 具体返回值一共是
 *  number string object boolean function undefined
 * 其中 数组 null 的返回值都是 object
 * 这样的话具体的数据类型就不能区分的非常明确
 * 在实际项目中就不能准确的区分
 * 如果想要具体的区分数据类型
 * 需要使用 Object.prrototype.toString.call 的方法
 * 返回值分别为
 * Object String 字符串
 * Object Number 数值类型
 * Object Boolean 布尔类型
 * Object Undefined undefined 类型
 * Object Null null类型
 * Object Function 函数类型
 * Object Array 数组类型
 */

// instanceof
/**
 * js中常用 typeof 来判断数据类型，但是用 typeof 是存在一个缺陷，
 * 在判断引用类型存储值时，无论什么类型的对象，他都返回 object ，
 * 因此 ECMAScript 引入了一个 Java 运算符 instanceof 来解决这个问题。
 * instanceof 运算符 与typeof 运算符相似，用于识别正在处理的对象的类型。
 * 与 typeof 方法不同的时，instanceof 方法要求开发者明确的确认对象为某特定类型。
 *
 * 1. instanceof
 *  var strObj  = new String("aaaa")
 *  console.log(strObj instanceof String) // true
 *  改代码段判断的是变量 strObj 是否为 String 对象的实例。
 *  尽管不像 typeof 方法那样灵活，但是在 typeof 方法返回 object 的情况下 instanceof 就很有用
 *  
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

// 执行上下文
/**
 * 执行上下文：之当前执行环境中的变量，函数声明，参数，作用域链，this 等信息。
 * 分为全局执行上下文，函数执行上下文，
 * 区别在于，全局执行上下文只有一个，函数执行上下文在每次调用函数的时候会创建一个新的函数执行上下文
 *
 * 变量对象是与执行上下文相关的数据作用域，存储了上下文中定义的变量和函数声明
 *
 * 变量对象是一个抽象的概念，在不同的上下文中表示不同的对象
 *
 * 全局执行上下文的变量对象
 * 全局执行上下文中，变量对象就是全局对象
 * 在顶层js代码中，this指向全局对象，全局变量会作为该对象的属性来被查询。
 * 在浏览器中，window就是全局对象，在node中 global 是全局对象
 *
 * 函数执行上下文的变量对象
 * 函数上下文中，变量对象VO就是活动对象AO
 * 初始化时，带有 arguments 书香
 * 函数代码分成两个阶段执行，
 *  进入执行上下文时，变量对象包括
 *   - 形参
 *   - 函数声明，不会替换已有变量对象
 *   - 变量声明，不会替换形参和函数
 *  函数执行
 *
 * 执行上下文栈得到作用是用来跟踪代码的，
 * 由于 JS 是单线程的，没次只能做一件事情，其他的事情会放在指定的上下文栈中排队等待执行
 *
 * JS 解释器在初始化代码的时候，首先会创建一个新的全局执行上下文到执行上下文栈顶中，
 * 然后随着每次函数的调用都会创建一个新的执行上下文放到栈顶中，
 * 随着函数执行完毕后，被执行上下文栈顶弹出，
 * 知道回到全局得到执行上下文中
 *
 * 首先创建了全局执行上下文，
 * 当全局执行上下文处于活跃状态
 * 全局代码中有两个函数 getName 和 getYear，
 * 然后掉用 getName 函数，JS 引擎停止执行全局执行上下文,
 * 创建了新的函数执行上下文，且把该函数执行上下文放入执行上下文栈顶
 * getName 函数里又调用了 getYear 函数，此时暂停了 getName 的执行上下文，创建了 getYear 函数的新执行上下文，
 * 且把该函数执行上下文放入执行上下文栈顶。
 * 当 getYear 函数执行完成后，其执行上下文从栈顶出栈，回到了 getName 执行上下文中继续执行
 * 当 getName 函数执行完后，其执行上下文从栈顶出栈，回到了全局执行上下文中
 */

// document.ready 和 document.load 的区别
/**
 * ready
 * 表示文档发结构已经加载完成，
 * 不包含图片等绯闻自媒体文件，只要html标签结构加载完毕就可以
 * 此时dom结构已经加载完成，可以对dom进行操作
 * 一般情况，一个页面响应加载的顺序是：
 *  域名解析 - 加载html - 加载js和css - 加载图片等其他信息。
 * 那么dom ready就应该在加载js和css和加载图片等其他信息之间。是可以操作dom的
 *
 * load
 * 表示页面包含图片在内的所有元素都加载完成
 * document文档加载完后可以对dom进行操作，document 文档包括了加载图片等其他信息
 * dom load 在页面响应加载的顺序中位于 加载图片等其他信息 之后
 */

// setTimeout setInterval
/**
 * setTimeout 在指定的毫秒数后调用函数或计算表达式，只执行一次
 * setInterval 按照指定的周期来调用函数或计算表达式。方法会不停地调用函数，知道 clearInterval 被调用或窗口被关闭
 */

// 避免回调地狱
/**
 * 使用 async await 配合 promise 是解决回调地狱的终极方法
 * async/await 特点
 *  1. async/await 更加语义化，async 是"异步"的简写
 *     async function 用于声明一个 function 是异步的；
 *     await 可以认为是 async await 的简写，用于等待一个异步方法执行完成
 *  2. async/await 是一个用同步思维解决一部问题的方案（等结果出来后才会继续往下执行）
 *  3. 可以通过多层 async function 的同步写法代替传统的 callback 嵌套
 *
 * async function语法
 *  1. 自动将常规函数转换城 Promise ，返回值也是一个 Promise 对象
 *  2. 只有 async 函数内部的异步操作执行完，才会执行 then 方法指定的回调函数
 *  3. 异步函数内部可以使用 await
 *
 * await 语法
 *  1. await 放置在 Promsie 调用之前，await 强制后面的代码等待，
 *     直到 Promise 对象 resolve 得到 resolve 的值作为 await 表达式的运算结果
 *  2. await 只能在 async 函数内部使用，用在普通函数里就会报错
 *
 */
