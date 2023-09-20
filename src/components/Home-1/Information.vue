<template>
    <br>
    <div class="container">
        <div class="row">
            <div class="col-lg-10">
                <div class="title">
                    <br>
                    <h4>ما بهترین خدمات مراقبت های بهداشتی را ارائه می دهیم</h4>
                    <p class="h4-title">تشخیص دقیق می تواند یکی از تاثیرگذارترین تجربیاتی باشد که می توانید داشته باشید.</p>
                </div>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <Services />
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <Contact />
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <Laboratory />
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <Treatment />
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <Watch />
            </div>
        </div>






    </div>
    <br><br>
    <br>
</template>
<script>

import '@fortawesome/fontawesome-free/css/all.css'
import Services from './Services.vue'

import Contact from './Contact.vue'
import Watch from './Watch.vue'
import Laboratory from './Laboratory.vue'
import Treatment from './Treatment.vue'
export default ({
    components: { Services, Contact, Watch, Laboratory, Treatment },
})
</script>
<style scope>
@import url("/src/assets/css/all.css");

.title {
    text-align: center;
}

.boxs {
    padding: 24px 24px 24px 24px;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
    border-style: solid;
    border-width: 0px 0px 0px 0px;
    box-sizing: border-box;
    background-color: white;
    height: auto;
    margin: 2px;
    text-align: right !important;
    /* grid-template-columns: 1fr 1.5fr 1fr; */
    grid-template-rows: auto auto 1fr 1fr 1fr auto auto;
}

.boxs2 {
    text-align: right !important;
    padding: 24px 24px 24px 24px;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
    border-style: solid;
    border-width: 0px 0px 0px 0px;
    margin: 2px;
    box-sizing: border-box;


    background-color: rgb(242, 248, 248);


}

.logs {
    font-size: 26px;
    background-color: #2a70ed;
    color: white;
    box-shadow: 1px 1px 5px 5px #e0dddd;
    padding: 18px 15px;
    text-align: center;
    border-radius: 8px;

    width: 60px;

}

.logs2 {
    font-size: 26px;
    background-color: white;
    color: rgb(67, 127, 218);
    box-shadow: 1px 1px 5px 5px #e0dddd;
    padding: 18px 15px;
    text-align: center;
    border-radius: 8px;
    width: 60px;
}

img {
    color: white;
}

.bg-color {
    border-radius: 10px;
    color: white;
    box-shadow: none;
    background-image: linear-gradient(to bottom, #2b76ed, #38c6f6);
}


@media (max-width: 990px) {
   
    .btn-boxblue{
        right: 30%;
    }
}

@media (max-width: 760px) {
  .Txt{right:85px;
    

  }
  .paraf{
   margin-right:12%;
  }
  .h4-title{
    right: 20px;
  }
}

</style>