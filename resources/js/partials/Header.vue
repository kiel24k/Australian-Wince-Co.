<template>
    <div>
       <nav>
        <div class="row firstNav">
            <div class="col text-start text-white">
               <router-link><h3><b>AustraWine</b></h3></router-link>
            </div>
            <div class="col">
                <form action="" class="search">
                   <div class="">
                    <input type="text" placeholder="Search products, brands or phrases">
                   </div>
                   <div class="">
                    <button>
                        <img src="/public/icon/search.svg" width="20px" alt="">
                    </button>
                   </div>
                </form>
            </div>
            <div class="col text-end">
               <div class="user-cart">
                   <img src="/public/icon/user_icon.svg" alt="" width="40px">
                <img src="/public/icon/cart.svg" width="40px" alt="">
               </div>
            </div>
           </div>
       </nav>
    </div>
</template>

<style scoped>
.firstNav{
    display: flex;
    align-items: center;
    padding:10px;
    background-color:rgb(59, 134, 59);

}
input{
    min-width: 30rem;
    border:0;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    font-size: 15px;
    padding:5px;
    font-weight: 500;
}

button{
    border:0;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background: white;
    padding:4px;
    text-align: center;
}
.search{
    display: flex;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    width: fit-content;

}
.search{
    border:solid 1px gray;

}
.user-cart{
    display: flex;
    justify-content: end;
    gap:5rem;
}

</style>
