<template>
  <div class="hero mt-[53px]">
    <div class="container">
      <div class="hero__content flex justify-between">
        <div class="hero__content__nav flex justify-between min-w-[65%]">
          <button v-for="(item, id) in categoryItem" :key="id">
            {{ item.title }}
          </button>
        </div>
        <div class="hero__content__sort">
          <v-menu transition="slide-y-transition" style="border: none">
            <template v-slot:activator="{ props }">
              <v-btn color="none" v-bind="props">
                сортировать по
                {{ selectedItems.length < 2 ? "..." : selectedItems }}</v-btn
              >
            </template>
            <v-list>
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-title @click="selectedItems = item.title">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCounterStore } from "../store/store";
const selectedItems = useCounterStore().selectedItems
const items = [
  { id: 1, title: "популярности" },
  { id: 2, title: "по цене" },
  { id: 3, title: "по алфавиту" },
];
const categoryItem = [
  { id: 1, title: "Все" },
  { id: 2, title: "Мясные" },
  { id: 3, title: "Вегетарианская" },
  { id: 4, title: "Гриль" },
  { id: 5, title: "Острые" },
  { id: 6, title: "Закрытые" },
];
console.log(selectedItems, "fwggegweeggege");
</script>
<style lang="scss">
.hero {
  &__content {
    &__nav {
      button {
        padding: 9px 20px;
        border-radius: 30px;
        color: rgb(58, 51, 51);
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 1.5%;
        text-align: center;
        background: rgb(249, 249, 249);
        transition: 0.2s ease-out;
      }
      button:hover {
        transition: 0.3s ease-in-out;
        border-radius: 30px;
        background: rgb(40, 40, 40);
        color: rgb(255, 255, 255);
      }
    }
  }
}
</style>
