<template>
  <div>
      <h1>Элемент с id {{id}}</h1>
      <h2>Название товара - {{title}} </h2>
      <p>Какое-то описание товара {{description}}</p>
      <p>Цена товара - {{price}} </p>
      <button class="btn btn-success" type="button" @click="onLinkCatalog">Назад</button>
      <button class="btn btn-danger" type="button" name="button" @click="delItem(id)">Удалить</button>
      <button class="btn btn-warning" type="button" name="button" @click="editItem(id)">Редактировать</button>
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
    },
    delItem(id){
      this.$http.delete(`http://localhost:3000/goods/${id}`).then(this.onLinkCatalog);
    },
    editItem(id) {
      this.$router.push({path: '/add', query: { id: this.id, title: this.title, description: this.description, price: this.price }});
    }
  }
}
</script>
