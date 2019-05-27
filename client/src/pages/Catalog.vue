<template>
  <div>
      <h1>Каталог</h1>
      <ul>
        <li v-for="good in goods" :key="good.id">
          <router-link exact :to="{path: '/item/' + good.id,
          query: {
            title: good.title,
            description: good.description,
            price: good.price
            }}">{{good.title}}</router-link>
         </li>
      </ul>
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
