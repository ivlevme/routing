<template>
  <div class="main">
      <h1 class="main__header">Каталог</h1>
      <div class="">
      <ul class="list">
        <li class="list-item" v-for="good in goods" :key="good.id">
          <router-link exact :to="{path: '/item/' + good.id,
          query: {
            title: good.title,
            description: good.description,
            price: good.price
            }}">{{good.title}}</router-link>
         </li>
      </ul>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      price: '',
      id: '',
      goods: []
    }
  },
  methods: {
    onLoad() {
      this.$http
        .get("http://localhost:3000/goods")
        .then(res => res.json())
        .then(res => (this.goods = res));
    }
  },
  mounted: function () {
   this.onLoad()
  }
}
</script>

<style media="screen">

  .main {
    margin-top: 20px;
  }

  .main__header {
    text-align: center;
    margin-bottom: 40px;
  }

  .list {
    margin: 0 auto;
    padding: 0;
    list-style: none;

    /* background-color: red; */

    height: inherit;
  }

  .list-item {
    list-style: none;
    margin-bottom: 10px;
    padding-left: 10px;

    position: relative;
    align-items: stretch
  }

  .list-item::before {
    content: "";

    position: absolute;
    top: 4px;
    left: 0;

    width: 20px;
    height: 20px;
  }

  .list-item:last-child {
    margin-bottom: 0;
  }

  .list-item a {
    font-family: Arial, sans-serif;
    font-size: 20px;
    color: black;
  }
</style>
