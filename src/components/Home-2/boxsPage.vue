<template>
    <div class="mr-page">
        <div class="row">

            <div class="col-lg-4  col-md-4 col-sm-12" v-for="(item, id) in Boxs" :key="id">

                <div class="BOxs">
                    <div class="bg-img">
                        <div class="ImagesContainer">
                            <div class="Img" :style="{ backgroundImage: `url(${item.img})` }">
                            </div>
                        </div>
                        <div class="title-img">
                            <p class="h5 p-h5 text-center mt-3">{{ item.title }}</p>
                            <p class="text-center mx-4 Text">{{ item.Text }}</p>
                            <button type="button" class="buton">بیشتر بدانید</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            Boxs: [
                {

                    img: "/src/assets/img/Medics-1.png",
                    title: "درمان اورژانسی",
                    Text: "پزشکان ما آماده درمان بیماری های حاد و مزمن شما هستند. ارائه مراقبت های پزشکی اولیه واجد شرایط.",


                },
                {
                    img: "/src/assets/img/medical-EZ8WSJ9-768x512.jpg",
                    title: "استانداردهای بین المللی",
                    Text: "ما متعهد به ارائه بهترین خدمات با پزشک مجرب هستیم. خدمات بهداشتی را با بهترین امکانات دریافت کنید.",
                },
                {
                    img: "/src/assets/img/Medics-2.png",
                    title: "درمان اورژانسی",
                    Text: "مرکز پزشکی 24 ساعته خدمات پزشک نیز در صورت تماس موجود است. درمان اورژانسی برای همه"

                },

            ]

        }
    }

}




</script>
<style scope>
.mr-page {
    margin: 0px 60px;
}

.Img {
    border-radius: 8px 8px 0px 0px;
    box-shadow: none;
    height: 300px;
    margin: 0 auto;
    /* max-width: 100%; */
    box-sizing: border-box;
}

.Img:hover {
    transition: all .8s ease;
    opacity: 1;
    transform: scale(1.1);
}

.BOxs {
    box-sizing: border-box;
    padding: 0px 0px 20px 0px;
    box-shadow: 0px 0px 1px 2px #f5eded;
    /* width: 100%; */
    height: auto;
    text-align: center;

}


.bg-img {
    width: 100%;
    height: 300;
    position: relative;
    overflow: hidden;

}

.title-img {
    text-align: center !important;
}


.buton {
    border-color: #2575fc;
    color: #fff !important;
    border-radius: 5px;
    font-size: 15px;
    padding: 10px 30px;
    text-align: center;
    background-color: #2575fc;
    margin: 0px 0px 20px 0px;
   
}



@media (max-width: 760px) {

    .Text {right:0%;}

    .mr-page {
        margin: 0px 0px;
    }
    .BOxs .bg-img .Img:nth-last-child(1) {
        left: 14%;
        width: 100%;
    }
    .p-h5{
    right:1%;
   }

}
@media (max-width:600px) {
    .BOxs .bg-img .Img:nth-last-child(1) {
        left:0;
        width: 100%;
    }
   
}
</style>