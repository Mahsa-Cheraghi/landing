<template>
    <div class="container">
<div class="row"><h5 class="col-lg-12 text-center" style="color:#253452">Our Partners</h5></div>
        <div class="row partners">
            <div class="col-lg-3 col-6 " v-for="(item, id) in names" :key="id"> <img class="logos"
                    :src="item.src"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            names: [{
                src: "/src/assets/logo/logo-3 (1).png"
            }, { src: "/src/assets/logo/logo-4@2x.png" }, { src: "/src/assets/logo/logo-2@2x.png" }, { src: "/src/assets/logo/logo-1@2x.png" }
            ]
        }
    }
}
</script>
<style scoped>
.logos {
    width: 190px;
    opacity: .6;
}

.logos:hover {
    opacity: 1;
    margin: 10px;
}

.partners {
    padding: 0px 0px 80px 0px;
}

.total {
    background-color: white;
}

@media (max-width: 900px) {
    .logos {
        width: 180px;
        padding:10px 5px;
    }
}

@media (max-width: 770px) {
    .logos {
        width: 250px;
    }
}

@media (max-width:500px) {
    .logos {
        width: 150px;
     padding-right:15px;
    }
}


</style>