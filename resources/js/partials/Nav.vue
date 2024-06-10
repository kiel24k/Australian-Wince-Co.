<template>
    <div>
        <nav>
            <div class="row">
                <ul class="navbar nav">
                    <li class="nav-item">
                        <router-link><b>Kiel's Daily</b></router-link>
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
    </div>
</template>

<style scoped>
nav{
    display: grid;
    justify-content: center;
    border-top:solid 1px white;
    background-color:rgb(59, 134, 59);
    align-content: center;
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
</style>
