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
