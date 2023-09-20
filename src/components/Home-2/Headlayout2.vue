<template>     
<div class="Box-img">
    <div class="col-lg-6 img-head"></div>
    <div class="div-txt">
    <h2 class="col-lg-10 col-8 h1-txt text-white">ما به سلامتی شما متعهد هستیم</h2>
    <p class="p-txt col-lg-8 col-md-6 col-6" style="font-size: 18px;color:#c9dbfb;font-weight: 300;">ارائه مراقبت های پزشکی اولیه واجد شرایط به شما و خانواده شما با استاندارد بین المللی.</p>
    <button type="button" class="butt"><img src="/src/assets/icon/icons8-call-30 (2).png">make an appointment</button>

</div>

</div>
<Partners class="imagelogo"/>
</template>
<script>
import Partners from './../Home-1/Partners.vue'
export default {
    components: {
        Partners
    }
}
</script>
<style scope>
.Box-img{
    width:100%;
    background-color:#2a70ed;
    height: 650px; ;
    
}
.img-head{
 width: 50%;
    height: 650px;
background-image: url("/src/assets/img/hero-2-tablet.jpg");
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
padding: 100px 10px 100px 10px;
}
.imagelogo {
    margin: -40px 20px 0px 20px;
    padding: 30px 0px 30px 0px;

    background-color:white;
}
.div-txt{
    float: left;
    top:-500px;
  
}
.h1-txt{
    font-size: 48px;
    font-weight: 600;
line-height: 1.2em;
}
.butt{
    color:white !important;
    background-color: #2dde98;
    font-size: 16px;
font-weight: 500;
letter-spacing: 0.5px;
border-radius: 4px 4px 4px 4px;
box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
padding: 10px 20px;
}
@media screen and (max-width:990px) {
 .h1-txt{
    font-size:24px;
 }
 .img-head,.Box-img{
  height:400px;
 }
 .div-txt{
    top:-250px;
    left:-230px !important;
 }
}
@media screen and (max-width:760px) {
 .h1-txt{
    font-size:24px;
 }
 .img-head,.Box-img{
  height:400px;
 }
 .div-txt{
    top:-200px;
 }
 .imagelogo{
    top:1%;
 }
}
@media screen and (max-width:480px) {
.p-txt{
    right:.5px;
}
.div-txt{
    top:-250px;
 }
 .butt{
   padding:2px;
   left:10px;
 }
}
</style>