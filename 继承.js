function A(x, y) {
  this.x = x;
  this.y = y;
}
A.prototype.run = function () {};

/**
 * 寄生继承
 */
function B(x, y) {
  A.call(this, x, y); // 借用继承
}
B.prototype = new A(); // 原型继承

/**
 * 组合继承
 */
Function.prototype.extends = function (superClass) {
  function F() {}
  F.prototype = superClass.prototype;
  if (superClass.prototype.constructor !== superClass) {
    Object.defineProperty(superClass.prototype, 'constructor', {
      value: superClass,
    });
  }
  let proto = this.prototype;
  this.prototype = new F();
  let name = Reflect.ownKeys(proto);
  for (let i = 0; i < name.length; i++) {
    let desc = Object.getOwnPropertyDescriptor(proto, name[i]);
    Object.defineProperty(this.prototype, name[i], desc);
  }
  this.prototype.super = function (arg) {
    superClass.applay(this, arg);
  };
  this.prototype.supers = superClass.prototype;
};
/**
 * es6 extends 关键字继承
 */

class C {}

class D extends C {
  constructor() {
    super();
  }
}
