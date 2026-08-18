<script>
import courseLogo from "./assets/course-logo.svg"
import prdtcard from "./components/prdt.vue" 
import cart from "./components/cart.vue"

export default{
  data(){
    return{
      courseLogo,
      prdt:[],
      isLoading:false,
      errmsg:"",
      cart:[]
    }
  },
  methods: {
    async fetchPrdt(){
      this.isLoading=true;
      this.errmsg=""
      try{
        const response=await fetch("/data/products.json")
        if(!response.ok){
          throw new Error(`HTTP${response.status}`)
        }
        const data=await response.json()
        this.prdt=data
      }catch(error){
        console.error(error)
      }finally{
        this.isLoading=false
      }
    },
    addToCart(p){
      const exitem=this.cart.find(item=>item.id===p.id)
      if(exitem){
        exitem.qty++
      }else{
        this.cart.push({
          ...p,
          qty:1
        })
      }
    }
  },
  mounted() {
    this.fetchPrdt()
  },
  components:{
    prdtcard,
    cart
  }
 }
</script>

<template>
    <main class="page">
      <section class="hero">
        <img :src="courseLogo" alt="course LOGO" class="course-logo">
        <div>
          <p class="eyebrow">Vite data folder path</p>
        </div>
      </section>

      <section>
        <img src="/images/course-banner.svg"  >
      </section>

      <section v-if="isLoading">
        <p>product loading...</p>
      </section>

      <section v-else-if="errmsg">
        <p>{{ errmsg }}</p>
      </section>
      
      <section v-else>
        <prdtcard v-for="item in prdt" :key="item.id" :prdt="item" @add="addToCart"></prdtcard>
      </section>

      <cart :cart="cart"></cart>
   
    </main>

</template>