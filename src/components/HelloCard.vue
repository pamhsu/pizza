<script>
export default{
    data(){
        return {
            msg:"HelloCard component"
        }
    }
}
</script>

<template>
    <h2>{{ msg }}</h2>
    <p> this is standalone componet</p>
</template>

<style scoped>
    section{
        padding: 20px;
        border:1px solid #CCC;
        background-color: lightblue;
        color:black;

    }
</style>