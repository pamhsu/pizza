<script>

import prdtcard from "../components/prdt.vue" 
import {usePrdtStore} from "../store/products.js"
import {useCartStore} from "../store/cart.js"

export default{
  data(){
    return{
      prdtstore:usePrdtStore(),
      cartstore:useCartStore()
    }
  },
  computed: {

  },
  methods: {
      addToCart(prdt){
        this.cartstore.addToCart(prdt)
      }
  },
  mounted() {
    this.prdtstore.fetchProduct()
  },
  components:{
    prdtcard
  }
 }
</script>

<template>
    <main class="page">
      <section class="hero">
        <h1>菜單</h1>
        <p>
          選擇您喜愛的披薩口味，立即加入購物車
        </p>
      </section>

      <section v-if="prdtstore.isLoading">
        <p>菜單載入中...</p>
      </section>

      <section v-else-if="prdtstore.errmsg">
        <p>{{ prdtstore.errmsg }}</p>
      </section>
      
      <section v-else class="products">
        <prdtcard v-for="item in prdtstore.prdt" :key="item.id" :prdt="item" @add="addToCart"></prdtcard>
      </section>

    </main>
</template>
