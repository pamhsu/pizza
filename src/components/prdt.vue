<script>
    export default{
        props:{
            prdt:{
                type:Object,
                required:true
            }
        },
        emits:["add"],
        methods: {
            goDetail(){
                this.$router.push(`/products/${this.prdt.id}`)
            },
            goCategory(){
                this.$router.push(`/products/category/${this.prdt.category}`)
            }
        },
    }
</script>

<template>
    <article @click="goDetail">
        <span @click.stop="goCategory" class="category">
            {{ prdt.category }}
        </span>
        <h3>
            {{ prdt.name }}
        </h3>
        <p>
            {{ prdt.description }}
        </p>
        <strong>
            NT$ {{prdt.price.toLocaleString()}}
        </strong>
        <button type="button" class="btn w-100" @click.stop="$emit('add',prdt)">
            加入購物車
        </button>
    </article>
</template>

<style scoped>
    .category{
        display: inline;
        cursor: pointer;
        transition: color 0.2s, background-color 0.2s;
    }

    .category:hover{
        color: white;
        background-color: #73612C;
        transform: translateY(-5px);
    }
</style>
