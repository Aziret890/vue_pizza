<template>
  <div class="container">
    <div class="flex items-center justify-center mt-[14pc]">
      <div v-if="data.length == 0">
        <h1 class="text-[60px] text-black text-center">Корзина пустая</h1>
        <p class="text-center max-w-[750px] text-[23px] mt-[1pc]">
          Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
          пиццу, перейди на главную страницу.
        </p>
        <div class="flex justify-center mt-[3pc]">
          <v-btn color="orange-darken-3"
            ><router-link to="/"> перейти на главную страницу</router-link>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <ProductBasket
        v-for="(item, index) in data"
        :key="index"
        :title="item.title"
        :image="item.imageUrl"
        :price="item.price"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductBasket from "../components/ProductDetail.vue";

const data = ref([]);

data.value = JSON.parse(localStorage.getItem("basket")) || [];
</script>

<style></style>
