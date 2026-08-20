<script>
import {useCartStore} from "./store/cart.js"
import {useMemberStore} from "./store/member.js"

export default{
  data(){
    return{
      cartstore:useCartStore(),
      memberstore:useMemberStore()
    }
  },
  computed: {
    isAdminLayout() {
      return this.$route.meta.layout === 'admin'
    }
  },
  methods:{
    logout(){
      this.memberstore.logout()
      this.$router.push("/")
    }
  }
}
</script>

<template>
  <div>
    <header v-if="!isAdminLayout" class="navbar">
      <div class="navbar-inner">
        <div class="nav-brand-wrap">
          <img src="../public/images/pizzalogo.png" alt="Logo" class="nav-logo" />
          <strong class="nav-brand">
            FATTA A MANO
          </strong>
        </div>
        <nav class="nav-links">
          <RouterLink :to="{name:'home'}">
            首頁
          </RouterLink>
          <RouterLink :to="{name:'products'}">
            菜單
          </RouterLink>
          <RouterLink :to="{name:'about'}">
            關於我們
          </RouterLink>    
          <RouterLink :to="{name:'cart'}">
            購物車
            <span v-if="cartstore.totalqty">({{ cartstore.totalqty }})</span>
          </RouterLink>

          <template v-if="memberstore.isLoggedIn">
            <span class="nav-user">{{ memberstore.userName }}</span>
            <button class="nav-logout" @click="logout">登出</button>
          </template>
          <template v-else>
            <RouterLink :to="{name:'login'}" class="nav-login-btn">
              會員登入
            </RouterLink>
            <RouterLink :to="{name:'register'}" class="nav-register-btn">
              註冊
            </RouterLink>
          </template>
        </nav>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>
