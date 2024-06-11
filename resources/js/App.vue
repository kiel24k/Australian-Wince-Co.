
<template>
    <Header/>
    <Nav/>
    <router-view></router-view>

</template>


<script setup>
import Header from './partials/Header.vue';
import Nav from './partials/Nav.vue';
import Landing from './components/home/Landing.vue'
</script>

<style>
body{
background: rgb(247, 242, 242);
}
</style>
