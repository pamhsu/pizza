<script>

import prdtcard from "../components/prdt.vue"
//import cart from "../components/cart.vue"
import { usePrdtStore } from "../store/products.js"
import { useCartStore } from "../store/cart.js"

export default {
  data() {
    return {
      prdtstore: usePrdtStore(),
      cartstore: useCartStore()
    }
  },
  computed: {
    productcategory() {
      return this.prdtstore.getPrdtByCategory(this.$route.params.category)
    }

  },
  methods: {
    addToCart(prdt) {
      this.cartstore.addToCart(prdt)
    }
  },
  mounted() {
    this.prdtstore.fetchProduct()
  },
  components: {
    prdtcard
  }
}
</script>

<template>
  <main class="page">



    <section v-if="prdtstore.isLoading">
      <p>菜單載入中...</p>
    </section>

    <section v-else-if="prdtstore.errmsg">
      <p>{{ prdtstore.errmsg }}</p>
    </section>

    <section v-else class="products">
      <prdtcard v-for="item in productcategory" :key="item.id" :prdt="item" @add="addToCart"></prdtcard>
    </section>



  </main>

</template>