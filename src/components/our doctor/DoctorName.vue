<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4" v-for="(item, id) in Boxs" :key="id">
                <div class="Box-namedoctor flex-column">
                    <div class="p-2"><img class="Img-doctor" :src="item.img" /></div>
                    <div class="p-2"> <img class="IMAGE" :src="item.imag" /></div>
                    <div style="
border:1px solid #ffffff;
  box-shadow: 5px 10px 8px #f6f6f6;
">
                   
                            <div class="p-2 Div-txt">
                                <p class="h5 text-right">{{ item.title }}</p>
                            </div>
                            <div class="p-2 Div-txt">
                                <p class="text-right">{{ item.Text }}</p>
                            </div>
                   
                        <div class="p-2">
                            <div class="d-flex">
                                <div class="ml-auto p-2">{{ item.Expertise }}</div>
                                <div class="p-2"><i class="fab fa-facebook-f"></i></div>
                                <div class="p-2"> <i class="fab fa-instagram mr-6"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import '@fortawesome/fontawesome-free/css/all.css'
export default {
    data() {
        return {
            Boxs: [

                {

                    img: "/src/assets/img/Doctor1.png",
                    imag: "/src/assets/icon/icons8-stethoscope-64.png",
                    title: "Dr. Steven Curl",
                    Text: "ما متعهد به سلامت و رفاه شما هستیم و آخرین مراقبت‌های مبتنی بر شواهد جامع را ارائه می‌کنیم.",
                    Expertise: "دکتر عمومی"

                },
                {
                    img: "/src/assets/img/Doctor2.png",
                    imag: "/src/assets/icon/icons8-eye-50.png",
                    title: "Dr. Boyka Jensen",
                    Text: "ما متعهد به سلامت و رفاه شما هستیم و آخرین مراقبت‌های مبتنی بر شواهد جامع را ارائه می‌کنیم.",
                    Expertise: "چشم پزشکان"
                },
                {
                    img: "/src/assets/img/Doctor3.png",
                    imag: "/src/assets/icon/icons8-heart-49 (1).png",
                    title: "Dr. David Jensen",
                    Text: "ما متعهد به سلامت و رفاه شما هستیم و آخرین مراقبت‌های مبتنی بر شواهد جامع را ارائه می‌کنیم.",
                    Expertise: "قلب و عروق"

                },
                {
                    img: "/src/assets/img/Doctor4.png",
                    imag: "/src/assets/icon/icons8-brain-50.png",
                    title: "Dr. John Diego",
                    Text: "ما متعهد به سلامت و رفاه شما هستیم و آخرین مراقبت‌های مبتنی بر شواهد جامع را ارائه می‌کنیم.",
                    Expertise: "عصب شناسی"

                },
                {
                    img: "/src/assets/img/Doctor5.png",
                    imag: "/src/assets/icon/icons8-stethoscope-50.png",
                    title: "Dr. Chris Martin",
                    Text: "ما متعهد به سلامت و رفاه شما هستیم و آخرین مراقبت‌های مبتنی بر شواهد جامع را ارائه می‌کنیم.",
                    Expertise: "دکتر عمومی"

                },
                {
                    img: "/src/assets/img/Doctor6.png",
                    imag: "/src/assets/icon/icons8-tooth-50.png",
                    title: "Dr. Jennie Christie",
                    Text: "ما متعهد به سلامت و رفاه شما هستیم و آخرین مراقبت‌های مبتنی بر شواهد جامع را ارائه می‌کنیم.",
                    Expertise: "دندانپزشک"

                },


            ]

        }
    }

}




</script>
<style scope>
@import url("/src/assets/css/all.css");

i {
    color: #2a70ed;
}

.IMAGE {
    width: 55px;
    border: 1px solid #2a70ed;
    /* margin:15px; */
    padding: 10px;
    background-color: #2a70ed;
    border-radius: 12px;
    margin-top: -30px;
}

.Box-namedoctor {
    display: flex;
    position: relative;
    width: 100%;
    flex-wrap: wrap;
    align-content: flex-start;
    height: auto;
}

.Img-doctor {
    width: 100%;
    height: 300px;
    border-radius: 10px 10px 0px 0px;
    display: inline-block;
}

@media (max-width: 760px) {
    .Img-doctor {
        height: 100%;
    }
    .Div-txt {
      right:12%;
    }
}

@media (max-width:450px) {
    .Div-txt {
      right:12%;
    }
}</style>