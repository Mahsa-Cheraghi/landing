<template>
    <div class="servise">
        <HeadPageService />
        <TltlePage2> </TltlePage2>
        <Boxs />
        <div style="padding: 80px 0px 80px 0px;"></div>
        <Partners />
        <ImageServices />
        <div style="padding: 60px 10px 60px 10px;"></div>
        <BoxFooter />
    </div>
</template>
<script>
import HeadPageService from './HeadPageService.vue';
import TltlePage2 from '../Home-2/TltlePage2.vue'
import Boxs from '../Home-2/Boxs.vue'
import Partners from '../Home-1/Partners.vue'
import ImageServices from './ImageServices.vue'
import BoxFooter from '../Home-1/BoxFooter.vue'

export default {
    components: { HeadPageService, TltlePage2, Boxs, Partners, ImageServices, BoxFooter }
}
</script>
<style>
.servise {
    position:relative;
}
</style>