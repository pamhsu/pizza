<script>
import { useCartStore } from "../store/cart.js"

export default {
  data() {
    return {
      cartstore: useCartStore()
    }
  },
  methods: {
    changeQty(id, delta) {
      this.cartstore.changqty(id, delta)
    },
    remove(id) {
      this.cartstore.removeFromCart(id)
    },
    clearAll() {
      this.cartstore.clearcart()
    }
  }
}
</script>

<template>
  <main class="page">
    <section class="card">
      <div class="cart-header">
        <h2>購物車</h2>
        <button v-if="!cartstore.isEmpty" class="btn btn-sm btn-danger" @click="clearAll">
          清空購物車
        </button>
      </div>

      <p v-if="cartstore.isEmpty" class="text-muted" style="text-align:center; padding:40px 0;">
        購物車目前沒有披薩，快去菜單選購吧！
      </p>

      <ul v-else class="cart-list">
        <li v-for="item in cartstore.cart" :key="item.id" class="cart-item">
          <div class="cart-item-info">
            <h3>{{ item.name }}</h3>
            <p class="text-muted">單價: NT${{ item.price.toLocaleString() }}</p>
          </div>

          <div class="cart-item-qty">
            <button class="btn-icon" @click="changeQty(item.id, -1)">−</button>
            <span class="qty-value">{{ item.qty }}</span>
            <button class="btn-icon" @click="changeQty(item.id, 1)">+</button>
          </div>

          <div class="cart-item-subtotal">
            NT${{ (item.price * item.qty).toLocaleString() }}
          </div>

          <button class="btn-icon btn-danger" @click="remove(item.id)">✕</button>
        </li>
      </ul>

      <div v-if="!cartstore.isEmpty" class="cart-summary">
        <p>
          共 {{ cartstore.totalqty }} 份披薩
        </p>
        <p class="cart-total">
          總金額: NT${{ cartstore.totalprice.toLocaleString() }}
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.cart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.cart-header h2 {
  margin: 0;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 0;
  border-bottom: 1px solid #eeeeee;
}

.cart-item:last-child {
  border-bottom: none;
}

.cart-item-info {
  flex: 1;
}

.cart-item-info h3 {
  margin: 0 0 4px;
  font-size: 18px;
}

.cart-item-info p {
  margin: 0;
}

.cart-item-qty {
  display: flex;
  align-items: center;
  gap: 10px;
}

.qty-value {
  min-width: 32px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
}

.cart-item-subtotal {
  min-width: 120px;
  text-align: right;
  font-size: 18px;
  font-weight: 800;
  color: #dc3545;
}

.cart-summary {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 2px solid #73612C;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart-total {
  font-size: 24px;
  font-weight: 800;
  color: #dc3545;
  font-family: 'Playfair Display', serif;
}

@media (max-width: 576px) {
  .cart-item {
    flex-wrap: wrap;
    gap: 12px;
  }

  .cart-item-subtotal {
    min-width: auto;
    text-align: left;
  }

  .cart-summary {
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
  }
}
</style>
