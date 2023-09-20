<template>
    <Headlayout2 />
    <Titlepage />
    <boxsPage />
    <VideoComponent />
    <TltlePage2 class="mt-6" />
    <Boxs />
    <HeadFooter class="HeadFooter"></HeadFooter>
    <BoxFooter></BoxFooter>
    <router-view></router-view>
</template>
<script>
import Headlayout2 from './Headlayout2.vue'
import Titlepage from './Titlepage.vue'
import boxsPage from './boxsPage.vue'
import TltlePage2 from './TltlePage2.vue'
import VideoComponent from './VideoComponent.vue'
import Boxs from './Boxs.vue'
import Partners from '../Home-1/Partners.vue'
import BoxFooter from '../Home-1/BoxFooter.vue'
import HeadFooter from '../Home-1/HeadFooter.vue'
export default {
    components: {
        Headlayout2, Titlepage, boxsPage, VideoComponent, TltlePage2, Boxs, Partners, BoxFooter, HeadFooter
    }
}
</script>
<style scope="this api replaced by slot-scope in 2.5.0+">
* {
    padding: 0px;
    margin: 0px;
}

.right {
    background-color: rgb(60, 115, 233);
    left: -11px;
}

.image {
    width: 100%;
    color: white;
}

.imagelogo {
    padding: 50px;
    background-color: white;
}

.bg {
    background-color: rgb(93, 93, 238) !important;
    margin-top: 10%;


}

.form {
    top: 0px;
}

.HeadFooter {
    background-image: unset !important;
    background-color: #286ce6 !important;
    margin-bottom: 80px;
    padding: 80px 10px 80px 10px;
}



.HeadFooter p,
div {
    /* color: white; */
}</style>