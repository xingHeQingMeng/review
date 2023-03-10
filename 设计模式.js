/**
 * 共23中设计模式，以下六种较为广泛
 */

/**
 * 发布订阅模式：
 * 这种设计模式可以大大降低程序模块之间的耦合度，
 * 便于更加灵活的扩展和维护
 */

/**
 * 中介者模式：
 * 观察者模式通过维护一堆列表来管理对象间的多对多关系，
 * 中介者模式通过统一接口来维护一对多关系，
 * 且通信者之间不需要知道彼此之间的关系，
 * 只需要约定好API即可
 */

/**
 * 代理模式：
 * 为其他对象提供一种代理以控制这个对象的访问，
 * 代理模式是的代理对象控制具体对象的引用。
 * 代理几乎可以是任何对象：文件，资源，内存中的对象，或者是一些难以复制的东西
 */

/**
 * 单例模式：
 * 保证一个类只有一个实例，
 * 并提供一个访问它的全局访问点
 * （调用一个类，任何时候返回的都是同一个实例）
 */

/**
 * 工厂模式：
 * 工厂模式定义一个创建对象的接口，这个接口由子类决定实例化哪一个类。
 * 该模式是一个类的实例化延迟到了子类
 * 而子类可以重写接口方法以便创建的时候指定自己的对象类型
 */

/**
 * 装饰着模式：
 * 装饰着（decorator）模式能够在不改变对象自身的基础上，
 * 在程序运行期间给对象动态的添加职责（方法或属性）
 * 与继承相比，装饰者是一种更轻便灵活的做法
 */