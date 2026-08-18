<script>
import { useMemberStore } from "../store/member.js"

export default {
  data() {
    return {
      memberstore: useMemberStore(),
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMsg: "",
      successMsg: ""
    }
  },
  methods: {
    handleRegister() {
      this.errorMsg = ""
      this.successMsg = ""

      if (!this.name || !this.email || !this.password || !this.confirmPassword) {
        this.errorMsg = "請填寫所有欄位"
        return
      }
      if (this.password !== this.confirmPassword) {
        this.errorMsg = "兩次密碼不一致"
        return
      }
      if (this.password.length < 6) {
        this.errorMsg = "密碼至少 6 碼"
        return
      }

      const result = this.memberstore.register(this.name, this.email, this.password)
      if (result.success) {
        this.successMsg = result.message
        setTimeout(() => {
          this.$router.push("/login")
        }, 1000)
      } else {
        this.errorMsg = result.message
      }
    }
  }
}
</script>

<template>
  <main class="page">
    <section class="card" style="max-width: 450px; margin: 60px auto;">
      <h2>會員註冊</h2>

      <p v-if="errorMsg" class="error" style="padding:10px; border-radius:8px; margin-bottom:16px;">
        {{ errorMsg }}
      </p>
      <p v-if="successMsg" class="success" style="padding:10px; border-radius:8px; margin-bottom:16px;">
        {{ successMsg }}
      </p>

      <div class="form-group">
        <label>姓名</label>
        <input type="text" v-model="name" placeholder="請輸入姓名" />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" v-model="email" placeholder="請輸入 Email" />
      </div>
      <div class="form-group">
        <label>密碼</label>
        <input type="password" v-model="password" placeholder="至少 6 碼" />
      </div>
      <div class="form-group">
        <label>確認密碼</label>
        <input type="password" v-model="confirmPassword" placeholder="再次輸入密碼" />
      </div>
      <button class="btn w-100" @click="handleRegister">註冊</button>
      <p class="text-center mt-2">
        已有帳號？
        <RouterLink to="/login" style="color: #73612C; font-weight: 700;">立即登入</RouterLink>
      </p>
    </section>
  </main>
</template>
