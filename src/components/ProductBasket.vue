<template>
  <v-card class="mx-auto" width="344">
    <v-img height="200px" :src="props.image" cover></v-img>
    <v-card-title> название: {{ props.title }} </v-card-title>
    <v-card-subtitle>
      ценаgenbowenbeo[bvw[on]]: {{ props.price }} $
    </v-card-subtitle>
    <v-card-actions>
      <v-btn color="green" text="купить"></v-btn>
      <v-btn color="black" text="удалить"></v-btn>
      <v-spacer> </v-spacer>
    </v-card-actions>
  </v-card>
</template>
<script setup>
import { defineProps } from "vue";
import { useCounterStore } from "../store/store";
const { addBasketProduct } = useCounterStore();
const props = defineProps({
  title: String,
  image: String,
  price: Number,
  id: Number,
});
</script>
<style lang="scss">
img {
  object-fit: center/cover;
  width: 100%;
  height: 100%;
}
</style>
