<template>
 
    <div class="bg-video">
     <div class="container">
        <div class="row">
        <div class="col-lg-6"><h2>داروی مناسب خود را پیدا کنید</h2>
                    <p class="col-lg-8 mar-mobile">تشخیص دقیق می تواند یکی از تاثیرگذارترین تجربیاتی باشد که می توانید داشته باشید – به
                        خصوص اگر مدتی در
                        جستجوی آن پاسخ بوده باشید. ما می توانیم به شما کمک کنیم تا به آنجا بروید.</p>
                    <div>
                        <p  class="mar-mobile"><i class="fas fa-check-circle pl-2"></i>Bookmarksgroveجدا شده آن ها ذر سمت راست زندگی میکند</p>
                    </div>
                    <div>
                        <p class="mar-mobile"><i class="fas fa-check-circle pl-2"></i>رودخانه کوچکی به نام دودن از کنار آنها می گذرد
                        </p>
                    </div>
                    <div>
                        <p class="mar-mobile"><i class="fas fa-check-circle pl-2"></i>معناشناسی، اقیانوس زبان بزرگ
                        </p>
                    </div>
                    <div>
                        <p class="mar-mobile"><i class="fas fa-check-circle pl-2"></i>آرامش شگفت انگیزی را فرا گرفته است
                        </p>
                    </div>
                    <button type="button" class="button"><img src="/src/assets/icon/icons8-call-30 (2).png"> make an appointment</button>
                
                
                
                </div>
        <div class="col-lg-6">
            <div class="video-container">
                <video src="" controls></video>
                <div class="background-image"></div>
            </div>
        </div>
    </div>

    </div>
    </div>
</template>
<script>
import '@fortawesome/fontawesome-free/css/all.css'
export default ({
    setup() {

    },
})
</script>

<style scoped>
@import url("/src/assets/css/all.css");

.button {
    color: #fff;
    background-color: #2a70ed;
    padding: 10px 20px;
    border-radius: 4px 4px 4px 4px;
    text-align: center;
    margin-top: 10px;
}

.bg-video {
    background-color: rgb(244, 248, 250);
   
    padding: 100px 0px 100px 0px;

}

.video-container {
    position: relative;
}

.video-container video {
    width: 100%;

    border-radius: 15px;
    height: 380px;
}

.video-container .background-image {
    position: absolute;
  top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/src/assets/img/female-doctor-filling-up-medical-form-at-clipboard-while-standing-in-the-consultation--e1598498410893.jpg");
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    border-radius: 15px;
}

@media (max-width:960px) {
    .button{
        display: none;
    }
    .video-container{
        display: none;
    }
   
}
@media (max-width:760px) {
.mar-mobile{
   right:1%;
}}
</style>