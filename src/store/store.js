import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const basketProduct = ref([]);
  const selectedItems = ref("wqwvmqe[");
  const storedBasket = localStorage.getItem("basket");
  if (storedBasket) {
    basketProduct.value = JSON.parse(storedBasket);
  }
  function addBasketProduct(el) {
    basketProduct.value.unshift(el);
    localStorage.setItem("basket", JSON.stringify(basketProduct.value));
  }

  return { basketProduct, selectedItems, addBasketProduct };
});
