// vue 动态权限绑定渲染列表
/**
 * 1. 首先请求服务器，获取当前用户的权限数据，比如请求 this.$http.get('right/list')
 * 2. 获取到权限数据之后，在列表中使用 v-if v-if-else 的组合来展示不同的内容
 */