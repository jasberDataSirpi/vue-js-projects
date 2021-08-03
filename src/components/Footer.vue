<template>
    <footer>
        <p>COPYRIGHT 2021</p>
        <router-link to="/about" v-if="$route.path!=='/about'">ABOUT</router-link>
    </footer>
</template>

<script>
export default {
    name:'Footer',
}
</script>

<style scoped>
footer{
    margin-top: 30px;
    text-align: center;
}
</style>