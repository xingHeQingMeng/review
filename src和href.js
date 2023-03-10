/**
 * src 和 href 都是用于外部资源的引入，
 * 比如图片，css文件，html文件，以及其他的web页面等等，
 *
 * 区别：
 * 1. 请求资源类型不同
 *  - href 时 Hypertext Reference 缩写，表示超文本引用。
 *    用来建立当前元素和文档之间的链接，常用的由 link  a 标签
 *  - 在请求 src 资源时会啊将其指向的资源下载并应用到文档中，
 *    常用的由 script img iframe
 * 2. 作用结果不同
 *  - href 用于在当前文档和引用资源之间确立联系
 *  - src 用于替换当前内容
 * 3. 浏览器解析方式不同
 *  - 若在文档同添加 href ，浏览器会识别该文档为 css 文件，会并行下载资源，
 *    并且不会停止对当前文档的处理。这也是为什么建议使用 link 方式加载 css，而不是 @import
 *  - 当浏览器解析到 src ，会暂停其他资源的下载和处理，知道将该资源加载、编译、执行完毕，图片和框架等也如此，
 *    类似于将所指向资源应用到当前内容。这也是为什么建议把js脚本放在底部而不是头部的原因。
 *
 */
