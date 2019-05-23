<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse">
    <div class="navbar-nav">
      <!-- <a class="nav-item nav-link" href="/">Main</a>
      <a class="nav-item nav-link" href="/catalog">Catalog</a> -->
      <router-link 
        active-class="active" 
        exact 
        class="nav-item nav-link" :to="'/'">Главная</router-link>
      <router-link 
        active-class="active" 
        exact 
        class="nav-item nav-link" :to="'/catalog'">Каталог</router-link>   
      <router-link 
        active-class="active" 
        exact 
        class="nav-item nav-link" :to="'/add'">Добавить</router-link>    
    </div>
  </div>
</nav>
    <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Routing'
    }
  }
}
</script>