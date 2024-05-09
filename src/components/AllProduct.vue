<template>
  <section class="allproduct mt-[80px]">
    <div class="container">
      <div class="allproduct__content">
        <div class="allproduct__content__wrapper flex flex-wrap gap-4">
          <ProductDetail
            v-for="(item, id) in data"
            :key="id"
            :title="item.title"
            :image="item.imageUrl"
            :price="item.price"
            :id="item.id"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref, watchEffect } from "vue";
import axios from "axios";
import ProductDetail from "./ProductDetail.vue";
import { useCounterStore } from "../store/store";
const data = ref([]);
onMounted(async () => {
  try {
    const response = await axios.get(
      "https://65f0158ada8c6584131ab87d.mockapi.io/pizza"
    );
    data.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
watchEffect(() => {
  console.log(useCounterStore().searchData);
  const { searchData } = useCounterStore();
  data.value = data.value.filter((el) =>
    el.title.toLowerCase().includes(searchData.toLowerCase())
  );
  console.log(data.value);
});
</script>
<style lang="scss"></style>
