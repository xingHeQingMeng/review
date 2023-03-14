// Vue 中的父子通信
/**
 * 父 -> 子
 * 通过 props 向子组件传递数据，子组件通过 props 属性来接收
 *
 * <blog-post title="My journey with Vue"></blog-post>
 *
 * Vue.component('blog-post',{
 * props:['title'],template:'<h3>{{title}}</h3>'})
 *
 * 子 -> 父
 *
 * <blog-post v-on:enlarge-text='postFontSize += $event'></blog-post>
 *
 * Vue.component('blog-post',{
 * props:['title],
 * template:'<h3 v-on:click="$emit('enlarge-text', 0.1)">{{ title }}</h3>'
 * })
 *
 */

// 如何实现 vue 组件通信和传值两个方式
/**
 *  父与子 子与父 子与子 跨层级
 *
 * 1. props 和 $emit
 * 父组件向子组件传递数据是通过 prop 传递的，子组件传递数据给父组件是通过 $emit 触发事件
 *
 * 2. $attr 和 $listeners
 *
 * 3. 中央事件总线 bus
 *
 * 4. provide 和 inject
 * 负组件中通过 provider 来提供变量，然后在子组件中通过 inject 来诸如变量。
 * 不论子组件有多深，只要调用了 inject ，那么就可以注入 provider 中的数据。
 * 而不是局限于只能从父组件的 prop 属性来获取，只要在父组件的生命周期内，子组件都可以调用
 *
 * 5. v-model
 * 父组件通过v-model 传递值给子组件是，会自动传递一个 value 的 props 属性，子组件中通过
 * this.$emit('input',val)自动修改v-model
 *
 * 6. $parent 和 $children
 *
 * 7. boradcast 和 dispatch
 *
 * 8. vuex
 * 处理组件之间的数据交互，如果业务逻辑复杂，很多组件之间需要同时处理一些公共的数据，
 * 这个时候上面这些方法可能不利于项目的维护，vuex的做法就是将这些公共数据抽离出来，
 * 然后其他组件就可以对这个公共数据进行读写操作，这样达到了解耦的目的
 */
