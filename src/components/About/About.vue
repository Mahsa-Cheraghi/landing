<template>
        <div class="row d-flex">

            <img id="img" src="/src/assets/img/team-of-multiracial-doctors-at-hospital-e1598498378805.jpg">
            <div class="overlay2"></div>

        <h1 class="text-About text-center align-self-center">درباره ی ما</h1>
        </div>
        <div class="mt-15">
            <br>
            <br>
            <Headbody />
        </div>
        <Titlepage/>
        <boxsPage/>
    <HeadFooter/>
    <router-view></router-view>
</template>
<script>
import Headbody from '../Home-1/Headbody.vue'
import Titlepage from '../Home-2/Titlepage.vue'
import boxsPage from '../Home-2/boxsPage.vue'
import HeadFooter from '../Home-1/HeadFooter.vue'

export default {
    components: {
        Headbody,Titlepage,boxsPage,HeadFooter
    }
}
</script>

<style scoped>
.overlay2 {
    position: absolute;
    top: 0;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    background-color: transparent;
background-image: linear-gradient(60deg, #1B61F3 0%, rgba(16, 243, 240, 0.91) 70%);
opacity: 0.7;
}

#img {
    position: relative;
    top: 0;
    left: 0;
    width: 150%;
    height: 100%;
}
.text-About{
    position: absolute;
    font-size:48px;
    color: #FFFFFF;
    font-weight: 600;
    
}
@media (max-width: 460px) {
    .text-About{
        font-size:20px;
    }
}
</style>
