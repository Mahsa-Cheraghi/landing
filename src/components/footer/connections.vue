<template>
  <div class="container">
    <div class="row pt-15">
      <div class="col-lg-3 col-md-3">
        <h5>نوبت دهی</h5>
        <p class="pt-2">تشخیص دقیق می تواند یکی از تاثیرگذارترین تجربیاتی باشد که می توانید داشته باشید.</p>
        <div class="p-1 "><button type="button" class="Turnratings" data-toggle="button" aria-pressed="false"
            autocomplete="off">
            <img class="Imgcall" src="/src/assets/icon/icons8-call-30 (2).png">  <spsn style="color: white;">08432222222</spsn>
          </button></div>
      </div>
      <div class="col-lg-3 col-md-3">
        <location />
      </div>

      <div class="col-lg-3 col-md-3">
        <div class="d-flex flex-column bd-highlight mb-3">
          <div class="p-2 bd-highlight">
            <h5>صفحات دیگر</h5>
          </div>
          <div class="p-2 bd-highlight"> <a href="">job vacancy</a></div>
          <div class="p-2 bd-highlight"><a href="">charity program</a></div>
          <div class="p-2 bd-highlight"> <a href="">privacy &policy</a></div>
          <div class="p-2 bd-highlight"> <a href="">Terms of use</a></div>

        </div>
      </div>
      <div class="col-lg-3 col-md-3">
        <div class="d-flex flex-column bd-highlight mb-3">
          <div class="p-2 bd-highlight">
            <h5>لینک های سریع</h5>
          </div>
          <div class="p-2 bd-highlight"><a href="#top" class="gototop">خانه</a> </div>
          <div class="p-2 bd-highlight"> <a href="#top" class="gototop">درباره ی ما</a></div>
          <div class="p-2 bd-highlight"> <a href="#top" class="gototop">سرویس ها</a></div>
          <div class="p-2 bd-highlight"> <a href="#top" class="gototop">تماس</a><br></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import location from '.././Home-1/location.vue';

export default {
  components: {
    location
  },
}
</script>
<style scope="this api replaced by slot-scope in 2.5.0+">
.Turnratings {
  padding: 8px 20px;
  margin: 2px;
  background-color: #2a70ed;
  color: white;
  border-radius: 5px;
}
.Imgcall{
  width: 22px;
}


h5 {
  color: #434d61;
  font-weight:bold;
  font-size: 18px;
}


a {
  text-decoration:none !important;
  color: #253452 !important;
}
a:hover{
  color:#2a70ed;
}

</style>