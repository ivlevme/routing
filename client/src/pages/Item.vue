<template>
  <div>
      <h1>Элемент с id {{id}}</h1>
      <h2>Название товара - {{title}} </h2>      
      <p>Какое-то описание товара {{description}}</p>
      <p>Цена товара - {{price}} </p>
      <div class="btn btn-success" @click="onLinkCatalog">Назад</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params['id'],
      title: this.$route.query.title,
      description: this.$route.query.description,
      price: this.$route.query.price            
    }
  },
  methods: {
      onLinkCatalog () {
          this.$router.push('/catalog');
      }
  }
}
</script>

