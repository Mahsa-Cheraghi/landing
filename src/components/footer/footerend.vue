<template>
    <!-- <br>
  
    <div class="container">
        <hr>
        <div class="row py-3">

            <div class="col-lg-3" style="color: #91959b;">Copyright © 2020. All rights reserved.</div>
         
            <div class="col-lg-3">
                <p class="text-left" style="color: #91959b;">کیت الگوی بهداشت و پزشکی Medkit</p>
            </div>
            <div class="col-lg-3 text-left"><img class="logopage" src="/src/assets/logo/logo@2x.png"></div>
        </div>
    </div> -->
    <div class="container">   <hr>





    <div class="d-flex bd-highlight py-2 Total">
  <div class="ml-auto bd-highlight"><p class="med-1" style="color: #91959b; top:8px;">Copyright © 2020. All rights reserved.</p></div>
  <div class="bd-highlight"><p class="med" style="color: #91959b; font-size: 14px; top:8px">کیت الگوی بهداشت و پزشکی Medkit</p></div>
  <div class="bd-highlight"><img class="logopage  mb-8" src="/src/assets/logo/logo@2x.png"></div>
</div>
</div>
</template>
<style>
.logopage {
    width: 158px; 
}

.med{
    margin-left: 35px;
}
@media screen and (max-width: 780px) {

.Total {
  flex-direction: column-reverse;
  right:10%;
}

.logopage{
    margin-right: 25%;
}
.med-1,.med{
 right:100px;
}

}
@media screen and (max-width: 450px) {
    .med-1{
 right:50px;
}
.med{
   right:45px;
}
}
</style>