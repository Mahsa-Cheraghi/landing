<template>
  <div class="form">
    <form class="">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="نام:">
      </div>
      <br>

      <div class="form-group">
        <input type="text" class="form-control" placeholder="ایمیل:">
      </div>
      <br>

      <date-picker />
      <br>
      <select style="direction:ltr !important;  color:#253452;"  class="form-select selectpicker" aria-label="Default select example" data-style="btn-default" data-size="5">
        <option selected style=" color:#253452;">خدمات را انتخاب کنید</option>
        <option value="1">قلب و عروق</option>
        <option value="2">دندانپزشکی</option>
        <option value="3">مراقبت از چشم</option>
        <option value="3">بررسی سلامت</option>
      </select>
      <br>
      <div class="form-group">

        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="پیام شما:"></textarea>
      </div>
    </form>
    <div><button type="button" class="appointment" data-toggle="button" aria-pressed="false" autocomplete="off">
        make an appointment
      </button></div>
  </div>
</template>
<script>
import DatePicker from 'vue3-persian-datetime-picker'
import '@fortawesome/fontawesome-free/css/all.css'
export default {
  components: { DatePicker },
}
</script>
<style>
@import url("/src/assets/css/all.css");

.form {
  margin: -80px 0px 0px 0px;
  padding: 48px 48px 48px 48px;
  background-color: #ffffff;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
}

input,
select{
  border-color: #BFC6CF;
  padding: 10px 15px 10px 15px;
  width: 100%;
  height: 50px;
  border-radius: 4px 4px 4px 4px;
  background-color: #fff;
  margin-bottom: 20px;
}
textarea{
  padding: 10px 15px 10px 15px;
  height: 140px;
margin-bottom: 20px;
border-radius: 4px 4px 4px 4px;
}
.appointment {
  color: #ffffff !important;
  background-color: #2a70ed;
  border-radius: 4px 4px 4px 4px;
  padding: 15px 30px 15px 30px;
  margin-bottom: 20px;
  text-align: center;
  font-size: .9375rem;
  border: 0 solid #000;
  cursor: pointer;
  margin-top:20px;
}</style>