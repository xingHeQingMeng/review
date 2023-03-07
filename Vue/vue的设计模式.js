// vue 使用哪种设计模式
/**
 * 属于发布订阅模式。
 * 在 vue 中使用 observer 和 definereactive 两个方法的结合对数据进行递归劫持，
 * 然后通过 watch 这个类来对属性进行订阅，Dep 类用于解耦合，当数据变更的时候，
 * 先触发数据的 set 方法，然后调用 dep.notify 通知更新视图
 */