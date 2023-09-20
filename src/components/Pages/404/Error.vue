<template>
    <div class="row">
        <div class="col-lg-12 text-center mt-5">
            <h1 class="erroe">!404</h1>
            <h1 class="title-error">صفحه پیدا نشد!</h1>
            <p class="text-center txt-error">صفحه مورد نظر شما ممکن است حذف شده باشد، نام آن تغییر کرده باشد یا به طور موقت در دسترس
                نباشد</p>
            <button type="button" class="btn btn-primary mr-10 buttn-error">برگشت به خانه</button>

        </div>
    </div>
    <div style="padding: 100px 20px 100px 20px;"></div>
    <BoxFooter/>
</template>
<script>
import BoxFooter from '../../Home-1/BoxFooter.vue'
export default {
  components: {
BoxFooter
  }
}
</script>
<style scoped>
.erroe {
    font-size: 128px;
    font-weight: 600;
    color: #2a70ed;
}

.itle-error {
    font-size: 40px;
    font-weight: 500;
    color: #6f747e;
}

.buttn-error {
    border-radius: 3px 3px 3px 3px;
    padding:1.3% 2.2%;
}
@media (max-width:575px) {
    .txt-error {
       margin:5px;
        right:.5%;}}
   
</style>