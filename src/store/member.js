import { defineStore } from "pinia";

export const useMemberStore =
    defineStore("member", {
        state: () => ({
            user: JSON.parse(localStorage.getItem("member")) || null,
            members: JSON.parse(localStorage.getItem("members")) || []
        }),
        getters: {
            isLoggedIn(state) {
                return !!state.user
            },
            userName(state) {
                return state.user ? state.user.name : ""
            }
        },
        actions: {
            register(name, email, password) {
                const exists = this.members.find(m => m.email === email)
                if (exists) {
                    return { success: false, message: "此 Email 已被註冊" }
                }
                this.members.push({ name, email, password })
                localStorage.setItem("members", JSON.stringify(this.members))
                return { success: true, message: "註冊成功，請登入" }
            },
            login(email, password) {
                const member = this.members.find(
                    m => m.email === email && m.password === password
                )
                if (!member) {
                    return { success: false, message: "帳號或密碼錯誤" }
                }
                this.user = { name: member.name, email: member.email }
                localStorage.setItem("member", JSON.stringify(this.user))
                return { success: true, message: "登入成功" }
            },
            logout() {
                this.user = null
                localStorage.removeItem("member")
            }
        }
    })
