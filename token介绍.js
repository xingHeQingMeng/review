// token

/**
 * token 一般存放在本地储存中。
 * token 的存在本身只关心请求的安全性，而不关心 token 本身的安全，
 * 因为 token 时服务器端生成的，可以理解为一种加密技术。
 * 但如果存在 cookie 内的话，浏览器的请求默认会自动在请求头中携带 cookie，
 * 所以容易收到csrf攻击（跨站请求伪造）
 */