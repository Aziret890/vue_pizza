<template>
  <header class="header mt-[2pc]">
    <div class="container">
      <div class="header__content flex justify-between items-center">
        <div
          class="header__content__logo flex justify-between items-center w-[250px] max-h-[40px]"
        >
          <div class="header__content__logo-img max-w-[40px]">
            <router-link to="/">
              <img src="/public/svg/logo.svg" alt="logo REACT PIZZA" />
            </router-link>
          </div>
          <div class="flex flex-col gap-0">
            <h1 class="m-0">VUE PIZZA</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div
          class="header__content__search flex justify-between items-center gap-2"
        >
          <input
            @input="(event) => (valueInput = event.target.value)"
            type="text"
            placeholder="искать пиццу"
          />
          <v-btn @click="foo"> искать </v-btn>
        </div>
        <div class="header__content__nav">
          <button>
            <span>{{ allPrice }} $</span>
            <hr />
            <span
              ><RouterLink
                class="flex justify-between gap-4 items-center"
                style="color: white"
                to="/basket"
                ><img src="/public/svg/basket.svg" alt="" />
                {{ basketProduct.length }}</RouterLink
              ></span
            >
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { useCounterStore } from "../store/store";
import { ref } from "vue";

const { basketProduct } = useCounterStore();
const valueInput = ref("");
function foo() {
  console.log(valueInput.value);
}
const data = JSON.parse(localStorage.getItem("basket"));
const allPrice = ref(data.reduce((acc, el) => acc + parseFloat(el.price), 0));
console.log(data);
console.log(allPrice.value);
</script>
<style lang="scss">
.header__content__nav {
  button {
    display: flex;
    justify-content: space-between;
    gap: 5px;
    align-items: center;
    padding: 9px 20px;
    border-radius: 30px;
    background: rgb(254, 95, 30);
    hr {
      margin: 0 5px;
      background: rgba(255, 255, 255, 0.25);
      width: 1px;
      border: none;
      height: 25px;
    }
    span {
      display: flex;
      gap: 7px;
      color: rgb(255, 255, 255);
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0%;
      text-align: left;
    }
  }
}
.header__content__search {
  input {
    width: 250px;
    height: 40px;
    border-radius: 9px;
    border: 1px solid #000;
    padding-left: 20px;
  }
}
</style>
