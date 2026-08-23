<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const username = ref("")
const password = ref("")
const errorMessage = ref("")

const login = () => {
  errorMessage.value = ""

  // 暫時使用測試帳號
  if (username.value === "admin" && password.value === "123456") {
    // 記錄登入狀態
    localStorage.setItem("adminToken", "login")

    // 登入成功 → 後台首頁
    router.push("/admin/dashboard")
  } else {
    errorMessage.value = "帳號或密碼錯誤"
  }
}
</script>

<template>
  <div class="login-page">
    <div class="login-box">

      <div class="logo">
        FATTA A MANO
      </div>

      <h1>後台管理系統</h1>
      <p class="subtitle">Administrator Login</p>

      <form @submit.prevent="login">

        <div class="form-group">
          <label>帳號</label>
          <input
            v-model="username"
            type="text"
            placeholder="請輸入管理員帳號"
          />
        </div>

        <div class="form-group">
          <label>密碼</label>
          <input
            v-model="password"
            type="password"
            placeholder="請輸入密碼"
          />
        </div>

        <p v-if="errorMessage" class="error">
          {{ errorMessage }}
        </p>

        <button type="submit">
          登入後台
        </button>

      </form>

    </div>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f1eb;
}

.login-box {
  width: 400px;
  padding: 45px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
}

.logo {
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 25px;
}

h1 {
  text-align: center;
  margin-bottom: 5px;
}

.subtitle {
  text-align: center;
  color: #888;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input {
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 15px;
}

input:focus {
  outline: none;
  border-color: #8b5e3c;
}

button {
  width: 100%;
  padding: 13px;
  border: none;
  border-radius: 6px;
  background: #8b5e3c;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background: #70482e;
}

.error {
  color: #d33;
  margin-bottom: 15px;
  font-size: 14px;
}
</style>
