// ajax 同步和异步区别
/**
 * 在使用 ajax 请求数据的时候，通常情况下，我们都是把 async:true 当作默认来处理，
 * 让我们的请求成为一个异步的请求。但是在某种情况下，我们需要把 async 设置为 false，
 * 方便我们进行观察数据的走向、去处。
 *
 * 区别：
 *  - 同步
 *      $.ajax({
 *          async:false,
 *          type:'POST',
 *          url:'xxx',
 *          dataType:'html',
 *          success:functioon(res){ // f1()
 *              // xxx
 *          },
 *          falure:function(res){
 *              // xxx
 *          }
 *      })
 *      function2()
 *  在这个 ajax 块 发出请求后，他会等在 f1 的位置，直到 f1 部分执行完毕
 *
 *  - 异步
 *      $.ajax({
 *          async:true, // 默认为 true
 *          type:'POST',
 *          url:'xxx',
 *          dataType:'html',
 *          success:functioon(res){ // f1()
 *              // xxx
 *          },
 *          falure:function(res){
 *              // xxx
 *          }
 *      })
 *      function2()
 *  当 ajax 块发出后，他将停留 f1 ,等待返回结果，同时 function2 可以执行
 * 
 */
