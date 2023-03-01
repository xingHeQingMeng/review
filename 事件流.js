// 什么是事件流以及事件流的传播机制

/**
 * 事件出发后，从开始找目标元素，然后执行目标元素的事件，再到离开目标元素的整个过程称之为事件流
 *
 * W3C 标准浏览器事件流的传播分为三个阶段：捕获阶段，目标阶段，冒泡阶段
 *  - 捕获阶段指找到目标元素的过程，这个找的过程是从最大的 document 对象找到 html ，再到body。。。直到目标元素
 *  - 找到目标元素后，调用执行它绑定事件时对应的处理函数，这个过程被称之为目标阶段
 *  - 当目标元素的事件执行结束后，再从目标元素，到他的父元素。。。body、html、再到 document的过程，是冒泡阶段
 */

// js 中如何阻止事件冒泡
/**
 * 使用事件对象阻止事件冒泡
 * W3C 浏览器
 * 事件对象.stopPropagation()
 *
 * 低版本IE浏览器
 * 事件对象.cancelBubble = true
 *
 * 现在 W3C浏览器中也支持 IE 低版本浏览器写法
 */

// js 中事件绑定的方法
/**
 * 事件绑定
 * 要让 js 对用户的操作做出响应，首先要对 dom 元素绑定事件处理函数。
 * 所谓事件处理函数，就是处理用户操作的函数，不同的操作对应不同的名称。
 *
 * 在 JavaScipt 中，有三追踪常用的绑定事件的方法
 *  - 在 DOM 元素中直接绑定：
 *    <input type='button' value='click' onclick='hello()'/>
 *    <script>
 *      function hello(){alert('hello world!')}
 *    </script>
 *  - 在 JavaScript 代码中绑定
 *      document.getElementById('btn').onclick = function(){alert('hello world!')}
 *  - 绑定事件监听函数
 *      利用 addEventListener() 或 attachEvent() 来绑定事件监听函数
 *
 * 事件监听
 * 关于事件监听，W3C 规范中定义了3个时间阶段，依次是捕获阶段，目标阶段，冒泡阶段
 * 优点：
 *  - 可以绑定多个事件；常规绑定方法后绑定的事件会替换先绑定的事件
 *  - 可以接触相应的绑定 removeEventListener() 或 detachEvent
 */
