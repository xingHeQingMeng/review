// vue 中的 key
/**
 * key不是一定要有的， 不写代码也可以跑，但建议加上
 * v-for可以使用 key 表单元素也可以，减少缓存
 *
 * key 是为 Vue 中的 vnode 标记的唯一 id ，通过这个 key ，我们的 diff操作可以更准确、快速。
 * diff 算法的过程中，先回进行新旧节点的首尾交叉对比，当无法匹配的时候会使用新节点的key与就节点进行比对。
 *
 * diff过程可以概括为 oldCh 和 newCh 各有两个头尾的变量StartIdx和EndIdx,
 * 他们两个变量互相比较，一共有四种比较方式。
 * 如果四种都没有匹配，如果设置了key就会用key进行比较，在比较的过程中，变量回往中间靠，
 * 一旦 StartIdx > EndIdx 表明 oldCh 和 newCh 至少有一个已经遍历完了，
 * 就会结束比较。
 * 四种比较方式就是 首、尾、旧尾新头、旧头新尾
 *
 * 如果不加 key，那么vue会选择服用节点，导致之前节点的状态被保留下来，会产生一些列的bug，
 *
 * key的唯一性可以被Map数据结构充分利用，相比于遍历查找的时间复杂度 O(n)，Map的时间复杂度仅为O(1)
 *
 */
