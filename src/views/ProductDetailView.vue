<script>
import {usePrdtStore} from "../store/products.js"

export default {

    data() {
    return{
      prdtstore:usePrdtStore()
         }
    },
    computed:{
        product(){
            return this.prdtstore.getPrdtById(this.$route.params.id)
        },
    },
    mounted() {
        this.prdtstore.fetchProduct()
    }

};
</script>


<template>
    <main class="page">
        <div class="page-header">
            <RouterLink
                to="/products"
                class="back-link"
            >
                ← 返回菜單
            </RouterLink>
        </div>

        <section v-if="prdtstore.isLoading" class="status-card">
            <div class="loading-icon">
                ⏳
            </div>
            <h2>披薩資料載入中</h2>
            <p>
                正在幫你取得菜單資訊...
            </p>
        </section>

        <section
            v-else-if="prdtstore.errorMessage"
            class="status-card"
        >
            <div class="status-icon">
                ⚠️
            </div>
            <h2>
                菜單讀取失敗
            </h2>
            <p class="error">
                {{ prdtstore.errorMessage }}
            </p>
        </section>

        <section
            v-else-if="product"
            class="product-detail"
        >
            <div class="product-visual">
                <div class="product-icon">
                    🍕
                </div>
                <span class="visual-text">
                    披薩圖片
                </span>
            </div>

            <div class="product-info">
                <span class="badge">
                    {{ product.category }}
                </span>

                <h1 class="product-title">
                    {{ product.name }}
                </h1>

                <p class="product-id">
                    菜單編號：
                    #{{ product.id }}
                </p>

                <div class="divider"></div>

                <p class="product-description">
                    {{ product.description }}
                </p>

                <div class="price-area">
                    <span class="price-label">
                        售價
                    </span>
                    <div class="product-price">
                        <small>
                            NT$
                        </small>
                        {{
                            product.price.toLocaleString()
                        }}
                    </div>
                </div>

                <div class="product-actions">
                    <RouterLink
                        to="/products"
                        class="btn"
                    >
                        返回菜單
                    </RouterLink>
                </div>
            </div>
        </section>

        <section
            v-else
            class="status-card"
        >
            <div class="status-icon">
                🔍
            </div>
            <h1>
                找不到披薩
            </h1>
            <p>
                找不到菜單編號：
                <strong>
                    {{ $route.params.id }}
                </strong>
            </p>
            <RouterLink
                to="/products"
                class="btn"
            >
                返回菜單
            </RouterLink>
        </section>
    </main>
</template>
