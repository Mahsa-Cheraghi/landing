<template>
    <div class="bg">
        <div class="row">
            <div class="col-lg-6 col-md-6">
                <div class="mt-15">
                    <h3 class="text-center meet">قرار ملاقات گذاشتن</h3>
                    <p class="mt-3 p-meet">تشخیص دقیق می‌تواند یکی از تاثیرگذارترین تجربیاتی باشد که می‌توانید داشته باشید - به
                        خصوص اگر مدتی در
                        جستجوی آن پاسخ بوده باشید. ما می توانیم به شما کمک کنیم تا به آنجا بروید.</p>
                </div>
                <div class="row mt-5">
                    <div class="col-lg-6">
                        <div>
                            <!-- <h5 class="text-center my-2 name">Seminyak, Bali</h5> -->
                            <location />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div>
                            <!-- <h5 class="text-center my-2">Denpasar, Bali</h5> -->
                            <location />

                        </div>
                    </div>
                </div>
            </div>
            <div class="Form col-lg-6 col-md-6">
                <Form />
            </div>
        </div>
    </div>
</template>
<script>
import '@fortawesome/fontawesome-free/css/all.css';
import location from './location.vue';
import Form from './Form.vue';
export default {
    components: {
        location,
        Form
    }
}
</script>
<style scope>
@import url("/src/assets/css/all.css");

.bg {
    padding: 60px 60px 60px 0px;
    background-image: linear-gradient(to bottom, #e4f8ff, #ffffff);

}
.meet{
    font-size: 48px;
font-weight: 500;
line-height: 1.15em;
 color:#253452;
}
@media (max-width: 990px) {
    .meet{
        font-size: 33px;
    }
}

@media (max-width: 760px) {

    .meet{
        font-size:30px;
        text-align: right;
    }

    .location{
        margin-right: 10px;
    }
    .Form{
      margin-top:18% !important;
    }
    .p-meet{
        margin-right:20%;

    }

}
@media (max-width: 460px) {
    .p-meet{
        margin-right:10%;

    }
}
</style>