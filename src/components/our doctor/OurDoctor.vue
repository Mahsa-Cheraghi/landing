<template>
    <div class="row d-flex">

        <img class="IMG-doctors" src="/src/assets/img/mm.png">
        <div class="overlay3"></div>
        <h1 class="text-Servise text-center align-self-center">دکترما</h1>

    </div>
    <div style="padding: 50px 0px 50px 0px;">    </div>
        <h1 class="text-center">پزشکان متخصص ما</h1>
        <p class="text-center" style="margin-bottom: .9rem;">تشخیص دقیق می تواند یکی از تاثیرگذارترین تجربیاتی باشد که می توانید داشته باشید. </p>

    <DoctorName />
    <div style="padding: 50px 0px 50px 0px;"></div>
    <HeadFooter/>
  <Partners/>
</template>
<script>

import DoctorName from './DoctorName.vue';
import HeadFooter from '../Home-1/HeadFooter.vue';
import Partners from '../Home-1/Partners.vue'

export default ({
    components: {
        DoctorName,HeadFooter,Partners
    }
})
</script>

<style scoped>
.overlay3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    opacity: 0.7;
    background-image: linear-gradient(60deg, #1B61F3 0%, rgba(16, 243, 240, 0.91) 70%);
}

.IMG-doctors {
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.text-Servise {
    position: absolute;
    font-size: 48px;
    color: #FFFFFF;
    font-weight: 600;

}
@media (max-width: 460px) {
    .text-Servise{
        font-size:20px;
    }
}
</style>