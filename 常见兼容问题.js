// 常见兼容问题

// 获取标签节点
document.getElementsByClassName;
/**
 * 在低版本ie中不兼容，解决方法是使用其他方法获取
 * document.getElementById
 * document.getElementByTagName
 * document.getElementByName
 * document.querySelector
 * document.querySelectorAll
 */

// 卷去高度
/**
 * 当有文档声明的时候
 */
document.documentElement.scrollTop;
document.documentElement.scrollLeft;
/**
 * 当没有文档声明的时候
 */
document.body.scrollTop;
document.body.scrollLeft;
/**
 * 解决办法
 * 使用兼容性写法
 * 获取
 * var t = document.documentElement.scrollTop || document.body.scrollTop
 * var l = document.documentElement.srollLeft || document.body.scrollLeft
 *
 * 设置
 * document.documentElement.scrollTop = document.body.scrollTop = 数值
 * document.documentElement.srollLeft = document.body.scrollLeft = 数值
 */

// 获取样式
/**
 * W3C标准浏览器
 */
window.getComputedStyle;
/**
 * 低版本IE
 */
元素.currentStyle;

/**
 * 解决办法
 * 使用封装的方式兼容
 * function getStyle(ele,attr){
 *      if(window.getComputedStyle){
 *          return window.getComputedStyle(ele)[attr]
 *      }
 *      return ele.currentStyle[attr]
 * }
 */

// 事件监听
/**
 * W3C 浏览器
 */
ele.addEventListener;
/**
 * 低版本IE
 */
ele.attachEvent;

/**
 * 解决办法
 * 使用封装的方式兼容
 * function bindEvent(ele,type,handler){
 *      if(ele.addEventListener){
 *          ele.addEventListener(type,handler)
 *      }else if(ele.attachEvent){
 *          ele.attachEvent('on'+type,handler)
 *      }else{
 *          ele['on'+type] = handler
 *      }
 * }
 */

// 事件解绑
/**
 * W3C 浏览器
 */
ele.removeEventListener;
/**
 * 低版本 IE
 */
ele.detachEvent;
/**
 * 解决方法
 * 使用封装的方式兼容
 * function unBind(ele,type,handler){
 *      if(ele.removeEventListener){
 *          ele.removeEventListener(type,handler)
 *      }else if(ele.detachEvent){
 *          ele.detachEvent('on'+type,handler)
 *      }else{
 *          ele['on'+type] = null
 *      }
 * }
 */

// 事件对象的获取
/**
 * W3C 浏览器
 */
元素.on事件类型 = function (e) {};
元素.addEventListener(事件类型, fn);
function fn(e) {}
/**
 * 低版本 IE 中
 */
元素.on事件类型 = function () {
  window.event;
};
元素.addEventListener(事件类型, fn);
function fn() {
  window.event;
}

/**
 * 解决方法
 * 短路运算符解决
 * 元素.on事件类型 = function(e){
 *  var e = e || window.event
 * }
 * 元素.addEventListener(事件类型,fn)
 * function fn(e){
 *  var e = e || window.event
 * }
 */

// 阻止默认行为 阻止事件冒泡
/**
 * W3C浏览器
 */
元素.on事件类型 = function (e) {
  // 默认行为
  e.preventDefault();
};
/**
 * 低版本IE
 */
元素.on事件类型 = function () {
  // 默认行为
  window.event.returnValue = false;
};
/**
 * 解决方法
 * 通过封装解决
 * 元素.on事件类型 = function(e){
 *      var e = e || window.event
 *      阻止默认事件
 *      e.preventDefault?e.preventDefault():e.returnValue=false
 *      阻止事件冒泡
 *      e.stopPropagation?e.stopPropagation():e.cancelBubble=true
 *  }
 */

// 获取精准的目标元素
/**
 * W3C 浏览器
 */
元素.on事件类型 = function (e) {
  e.target;
};
/**
 * 低版本IE中
 */
元素.on事件类型 = function () {
  window.event.srcElement;
};
/**
 * 解决方法
 * 通过短路运算符解决
 * 元素.on事件类型 = function(e){
 *      var e = e || window.event
 *      var target = e.target || e.srcElement;
 *  }
 */

// 获取键盘码

/**
 * W3C 浏览器
 */
元素.on事件类型 = function (e) {
  e.keyCode;
};
/**
 * 低版本火狐中
 */
元素.on事件类型 = function (e) {
  e.which;
};
/**
 * 结局方法
 * 通过短路运算符解决
 * 元素.on事件类型 = function(e){
 *      var e = e || window.event
 *      var keycode = e.keyCode || e.which;
 * }
 */
