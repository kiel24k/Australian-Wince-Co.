<script setup>
import { reactive, ref } from 'vue';

const trans = ref(false)
const burger = () => {
    trans.value = true
}


const back = () => {
     trans.value = false
}
</script>

<template>
        <div>
            <nav :class="{transitionClass: trans}">
                <div class="row">
                    <ul class="navbar nav">
                        <li class="text-danger text-end back" @click="back">
                            <h1>X</h1>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'Home'}"><b>Kiel's Daily</b></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link><b>New</b></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link><b>Wine</b></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link><b>Spirits</b></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link><b>Beer & Cider</b></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link><b>Premix</b></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link><b>Zero%</b></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link><b>Subscription</b></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link><b>Offers</b></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link><b>Gifts & Occasions</b></router-link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="container-fluid burger" @click="burger">
                <div class="row burger"><h1>=</h1></div>
            </div>
        </div>
</template>

<style scoped>
nav{
    display: grid;
    justify-content: center;
    border-top:solid 1px white;
    background-color:rgb(59, 134, 59);
    align-content:center;
    padding:10px;
    max-width: 100%;

}

ul{
    display: flex;
    gap:20px;
}
li{
    font-size: 20px;
    color:white;
}
a{
    color:white;
    text-decoration: none;
}
.burger{
    display: none;
}
.back{
    display: none;
}

@media screen and (max-width:880px){
    nav{
       position:fixed;
       left:0;
       width:20rem;
       justify-content: start;
       align-content: start;
       top:0;
       z-index:999;
       height: 100vh;
       display: grid;
       background: white;
       box-shadow: 0px 0px 10px 0px gray;
       transform: translate(-100%);
       transition: all linear 0.3s;
    }
    .back{
        display: block;
    }
    nav ul{
        display: grid;
        max-width: 20rem;

    }
    nav li{
        padding:5px;
        width:20rem;
        transition: all linear 0.2s;

    }
    nav li:hover{
        background: rgb(228, 227, 227);
    }
    .transitionClass{
        transform: translate(0);
    }
    .burger{
        display: block;
        max-width: 100%;
    }
    nav a{
        color:black;
    }

}

</style>
