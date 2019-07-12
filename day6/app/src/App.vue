<template>
  <div id="app">
    <router-view class="main"/>
    <footer class="footer">
      <router-link to="/home">首页</router-link>
      <router-link to="/my">我的</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang="scss">
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .main{
    flex: 1;
  }
  .footer{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    background: #f5f5f5;
    a{
      flex:1;
      text-align: center;
      color: #888;
    }
    .router-link-exact-active{
      color: lightcoral;
      font-weight: 800;
    }
  }
}
</style>
