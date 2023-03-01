// JavaScript 如何存储 cookie
/**
 * 基本语法是 document.cookie = '键名=键值;expires=事件对象;path=路径'
 * 时效 如果不设定，默认是 session 会话失效
 * 路径 如果不设定，默认是当前文件所在文件夹
 * 
 * 设定时效 审定一个事件对象，事件对象的时间戳就是失效期
 * 注意计算 当前时区和世界标准时间的时间差
 * 
 * 路径一般设定为根目录 也就是 '/'
 */

// cookie 的常见属性
/**
 * 键名 cookie键值对应的键名
 * 键值 cookie键名对应的键值
 * expires cooklie的失效，分为 session 会话时效，时间时效，时间时效是服务器时间，接就是世界标准时
 * path 路径 符合路径的文件才能访问到cookie
 * httponly 设置为 true 了之后，可以防止js程序访问，防止XSS攻击，增加cookie的安全性
 * secure 设置为 true 之后 cookie 只能通过 https 协议发送，http协议是不能发送的，也是为了cookie的安全性
 */