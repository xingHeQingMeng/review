// 闭包

/**
 * 当一个函数被当作返回值返回的时候，也就相当于返回了一个通道。
 * 这个通道可以访问这个函数词法作用域中的变量，即函数所需要的数据结构保存了下来，
 * 数据接口中的值实在外层函数执行时创建，外层函数执行完毕时理应销毁，
 * 但由于内部函数作为值返回出去，这些值得以保留下来，而且无法直接访问，必须通过返回的函数。
 *
 * 闭包的形成很简单，再执行过程完毕后，返回函数，或者将函数保留下来，且在该函数内访问当前执行函数的数据，即形成闭包
 */

// 闭包的用途
/**
 * 防抖
 */
function debounce(fn, interval) {
  let timer = null;
  return function () {
    if (timer !== null) clearInterval(timer);
    let _this = this;

    timer = setTimeout(() => {
      fn.call(_this, [...arguments]);
    }, interval);
  };
}

/**
 * 节流
 */

function thro(fn, interval) {
  let timer = null;
  return function () {
    const _this = this;
    if (timer !== null) return;
    timer = setTimeout(() => {
      fn.call(this, [...arguments]);
      clearInterval(timer);
      timer = null;
    }, interval);
  };
}

/**
 * 柯里化
 */
function curryingCheck(reg) {
  return function (txt) {
    return reg.test(txt);
  };
}

// 闭包的问题和优化
/**
 * 闭包：是指有权访问另一个函数作用域中的变量的函数
 * 创建闭包的常见方式就是在函数内部创建另一个函数并返回该函数
 *
 * 作用：
 *  1. 可以读取函数内部的变量
 *  2. 相当于划出了一块私有作用域，避免数据污染
 *  3. 让变量始终保存在内从中
 *
 * 闭包的三个特性：
 *  1. 函数嵌套函数
 *  2. 函数内部可以引用外部的参数和变量
 *  3. 参数和变量不会被垃圾回收机制回收
 *
 * 闭包的问题：
 *  闭包会产生不销毁的上下文，会导致栈/堆内存消耗过大，有时候也会导致内存泄漏等，
 *  影响页面运行性能。
 *
 * 优化：不必要的情况下不在函数内部声明函数
 */
// 优化前
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function () {
    return this.name;
  };
  this.getMessage = function () {
    return this.message;
  };
}
// 优化后
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getMessage = function () {
  return this.message;
};
MyObject.prototype.getName = function () {
  return this.name;
};
