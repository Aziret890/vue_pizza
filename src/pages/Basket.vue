<template>
    <ProductBasket
      v-for="(item, index) in data"
      :key="index"
      :title="item.title"
      :image="item.imageUrl"
      :price="item.price"
    />
</template>

<script setup>
import { ref } from "vue";
import ProductBasket from "../components/ProductDetail.vue";

const data = ref([]);

  data.value = JSON.parse(localStorage.getItem("basket")) || [];
  console.log(data.value, 'fqipgbqewpigvnqepigepignwepigepigngpiqebgieobgsdlkvbsdvjksdbvdbvsdjkvvuowrbvwdjovn');
</script>

<style>
</style>
<!-- <template>
  <div>
    <h1>Страница корзины</h1>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style> -->