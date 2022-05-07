<template>
  <nav>
    <!-- 路由链接：自动渲染为a标签 ，href的值由to的值指定
         to属性，值可以是字符串，也可以是对象
         可以通过v-bind(缩写是:)绑定to这个属性,
         query:{id:123,name:'张三'}   这样会把参数加到链接后面，只能用query这个词-->
    <router-link to="/">Home</router-link> |
    <router-link :to="{name:'about',query:{id:123,name:'张三'}}">About</router-link>
  </nav>
  <router-view></router-view>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
