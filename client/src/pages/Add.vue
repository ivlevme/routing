<template>
    <div>
      <h1 class="main__title" style="text-align: center">Добавить товар</h1>
        <div class="container">
          <div class="row">
            <!-- <div class="form-group w-100">
              <label for="id">id {{id}}</label>
              <input type="id" id="id" class="form-control" v-model="id">
            </div> -->
            <div class="form-group w-100">
              <label for="title">Заголовок</label>
              <input type="text" id="title" class="form-control" v-model="title">
            </div>
            <div class="form-group w-100">
              <label for="description">Описание</label>
              <input type="text" id="description" class="form-control" v-model="description">
            </div>
            <div class="form-group w-100">
              <label for="price">Цена</label>
              <input type="text" id="price" class="form-control" v-model="price">
            </div>
            <div class="btn btn-success" @click="onSave">Сохранить</div>
            <div class="btn btn-primary" @click="onLoad">Получить</div>
          </div>
          <div class="row mt-1" v-for="good in goods" :key="good.id">
            <div class="col-3">{{good.title}}</div>
            <div class="col-3">{{good.description}}</div>
            <div class="col-3">{{good.price}}</div>
            <div class="col-3">{{good.id}}</div>
          </div>
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
        goods: '',
        id: ''
      }
  },
  methods: {
    onSave() {
      let good = {
        title: this.title,
        description: this.description,
        price: this.price,
        id: this.id
      };
      this.$http
        .post("http://localhost:3000/goods", good)
        .then(res => res.json())
        .then(res => console.log(res));
    },
    onLoad() {
      this.$http
        .get("http://localhost:3000/goods")
        .then(res => res.json())
        .then(res => (this.goods = res));
    }
  },
  computed: {
    // onLoading() {
    //   this.$http
    //     .get("http://localhost:3000/goods")
    //     .then(res => res.json())
    //     .then(res => (this.goods = res));
    // }
  }
}
</script>
