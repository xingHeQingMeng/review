/**
 * 节流
 * 触发有冷却
 * 触发一次后，一定时间内不再触发
 */
function thro(cb, wait) {
  let timeOut;
  return () => {
    if (timeOut) {
      return;
    }
    timeOut = setTimeout(() => {
      cb();
      clearTimeout(timeOut);
      timeOut = null;
    }, wait);
  };
}

/**
 * 防抖
 * 触发无冷却，但延迟执行
 * 在延迟期间内重复触发，只执行最后一次触发
 */
function debunce(cb, wait) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => cb(), wait);
  };
}
