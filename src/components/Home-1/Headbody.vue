<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-lg-12">
                        <h3 class="h3.head">کلینیک پزشکی که می توانید به آن اعتماد کنید</h3>
                    </div>
                </div>
                <div class="row">



                    <div class="col-lg-10">
                        <p class="p-head"> تشخیص دقیق می تواند یکی از تاثیرگذارترین تجربیاتی باشد که می توانید داشته باشید –
                            به خصوص
                            اگر مدتی در جستجوی آن پاسخ بوده باشید. ما می توانیم به شما کمک کنیم تا به آنجا بروید.</p>
                    </div>
                </div>
                <br>
                <br>
                <div class="row">
                    <div class="col-lg-1 col-md-1 col-sm-1 icon">
                        <img class="iconimg" src="/src/assets/icon/h.png">

                    </div>
                    <div class="col-lg-8 col-md-5 col-sm-7">
                        <h5 class="pb-4 h5-head">خدمات درمانی 24 ساعته </h5>
                    </div>

                    <div class="row">

                        <div class="col-lg-1 col-md-0"></div>
                        <div class="col-lg-11">
                            <p class="txt2">ما متعهد به سلامت و رفاه شما هستیم و آخرین مراقبت‌های مبتنی بر شواهد جامع را
                                ارائه می‌کنیم.</p>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-lg-1 col-md-1 col-sm-1 icon">
                            <img class="iconimg" src="/src/assets/icon/icons8-star-24.png">
                        </div>
                        <div class="col-lg-10 col-md-5 col-sm-7">
                            <h5 class="pb-4 h5-head">
                                استاندارد های بین المللی </h5>
                        </div>
                        <div class="row">
                            <div class="col-lg-1"></div>
                            <div class="col-lg-11">
                                <p class="txt2">ما متعهد به سلامت و رفاه شما هستیم و آخرین مراقبت‌های مبتنی بر شواهد
                                    جامع
                                    را ارائه می‌کنیم.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-1 col-md-1 col-sm-1 icon">
                            <!-- <i class="fas fa-hospital"></i> -->
                            <img class="iconimg" src="/src/assets/icon/h.png">

                        </div>
                        <div class="col-lg-10 col-md-5 col-sm-7">
                            <h5 class="pb-4 h5-head">
                                مرکز تعالی </h5>
                        </div>
                        <div class="row">
                            <div class="col-lg-1"></div>
                            <div class="col-lg-11">
                                <p class="txt2">ما متعهد به سلامت و رفاه شما هستیم و آخرین مراقبت‌های مبتنی بر شواهد
                                    جامع
                                    را ارائه می‌کنیم.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div class="col-lg-6 text-center"><img class="imageman" src="/src/assets/img/image-HAT9WKS.png"></div>
        </div>
    </div>
</template>
<script>
import '@fortawesome/fontawesome-free/css/all.css'
// import TextLeft from './TextLeft.vue'
export default ({
    data() {
        return {

        }

    }
})
</script>
<style scoped>
@import url("/src/assets/css/all.css");

.icon {
    font-size: 2.2rem;

    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 5px #f7f1f1;
    width: auto;
}


.icon:hover {
    filter: opacity(0.3) drop-shadow(1 1 rgb(244, 246, 248));
    background-color: #0b72b6;
}

.iconimg {
    width: 40px;
    margin: 15px 0px;
}

.txt2 {
    overflow: hidden;
    top: -60%;
    right: 6%;
}

@media (max-width: 1024px) {
    .txt2 {}
}

@media (max-width: 990px) {
    .txt2 {
        right: 70px;
        top: -30px;
    }

    .imageman {
        max-width: 500px;
    }
}

@media (max-width: 760px) {
    .imageman {
        display: none;
    }

    .h3.head {
        font-size: 20px;
    }

    .p-head {

        font-size: 16px;
        right: 5px;
    }

    .h5-head {
        font-size: 17px;
    }

}

@media (max-width:575px) {
    .txt2 {
        top: -90px;
        right: 65px;
        padding-left: 15px;
    }

    .h5-head {
        top: -70px;
        right: 65px;

    }
}
</style>

