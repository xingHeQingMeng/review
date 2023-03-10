// 模块化思想
/**
 * 模块化就是京不同功能的代码封装在不同的文件中，
 * 在相互引用时不会发生命名冲突的一种思想，
 * 大多数情况下，一个文件就是一个模块化
 */

// 模块化语法 commonjs amd cmd es6 module

/**
 * commonJS 是 nodejs 自带的一种模块化语法，
 * 将一个文件看作是一个模块，
 * 可以在文件导出的时候，
 * 被另一个文件导入使用。
 * 导出使用 module.exports = 数据
 * 导入使用 require('模块文件路径') 函数导入
 */

/**
 * AMD 是社区开发的模块化语法，需要依赖require.js实现
 * 分为定义模块，导出数据和导入模块，使用数据。
 * AMD语法的导入是依赖前置的，
 * 也就是说，需要用到的文件需要在第一次打开页面全部加载完成。
 * 造成的后果是首屏加载很慢，后续操作会很流畅
 *
 * 在定义模块时就要声明其依赖的模块：
 * 导入模块：require(['模块'],callback),
 * 定义模块：difine('模块名称',函数)
 *
 */

/**
 * CMD 是玉伯开发的模块化语法，需要依赖 sea.js 实现，
 * 提倡就近依赖（按需加载）
 * 也分为模块定义导出，和模块导入使用数据。
 * CMD语法可以依赖前置，也可一按需导入，缓解了 AMD 语法的 前置依赖
 * 定义模块：define(function(require,exports,module){}),
 * 使用模块：seajs.use()
 */

/**
 * ES6 的模块化
 * 模块功能主要由两个命令构成，export 和 import
 * export 用于规定模块对外接口，
 * import用于输入其他模块提供的功能，
 * 一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。
 * 如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字导出该变量。
 *
 */
