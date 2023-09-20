<template>
  <div class="mr-x">
    <div class="row d-flex">
      <div class="col-lg-3 col-md-3  bigbox" v-for="(item, id) in Boxs" :key="id">
        <div class="box">
          <img class="img" :src="item.img" />
          <br>
          <p class="h-title">{{ item.title }}</p>
          <p class="item-text">{{ item.Text }}</p>
          <button class="btn-1" type="button">{{ item.btn }}</button>
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

          img: "/src/assets/img/dental-inspection-P64TKQA-1024x1024.jpg",
          title: "خدمات دندانپزشکی",
          Text: "داروهای با کیفیتی که برای شما گواهی رسمی دارند دریافت کنید",
          btn: "بیشتربدانید"


        },
        {
          img: "/src/assets/img/image-8VG2XV5-300x300.jpg",
          title: "مراقبت های اولیه",
          Text: "داروهای با کیفیتی که برای شما گواهی رسمی دارند دریافت کنید",
          btn: "بیشتربدانید"
        },
        {
          img: "/src/assets/img/vaccination-to-child-L2E9QRB-1024x1024.jpg",
          title: "واکسیناسیون",
          Text: "داروهای با کیفیتی که برای شما گواهی رسمی دارند دریافت کنید",
          btn: "بیشتربدانید"

        },
        {
          title: "خدمات اضطراری",
          Text: "با بخش حوادث و اورژانس ما تماس بگیرید تا سریع ترین و نزدیک ترین کمک های اولیه مورد نیاز خود را دریافت کنید.",
          btn: "باما تماس بگیرید +62 361 234253",

        }
      ]

    }
  }

}




</script>
<style scope>
.box {
  line-height: 1.5;
  box-sizing: border-box;
  text-align: center;
  top: -140px;
  background-color: white;
  box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.1);
  /* margin: 0px 6.6666666667px 0px 6.6666666667px; */
  margin: 0px 1%;
  padding: 10% 8%;
  border-radius: 8px 8px 8px 8px;

}

.btn-1 {
  background-color: #225DCF;
  font-size: 14px;
  color: white !important;
  font-weight: 500;
  border-radius: 4px 4px 4px 4px;
  /* padding: 16px 32px 16px 32px; */
  padding: 4% 10%;

}

.img {
  width: 33%;
  border-radius: 50%;
}

.h-title {
  color: #253452;
  font-size: 20px;
}

.bigbox {
  display: flex;
  align-items: stretch;
}

.bigbox:last-child .box {
  border: 1px solid #2a70ed;
  background-image: linear-gradient(to bottom, #2a73ed, #38c6f6);
}

.bigbox:last-child .box .h-title {
  color: white;
}

.bigbox:last-child .box .item-text {
  color: white;
}

.bigbox:last-child .box .btn-1 {
  color: #2a70ed !important;
  background-color: white;
  font-size: 18px;
}

.mr-x {
  margin: 0px 60px;
}

@media (max-width:1100px) {
  .img {
    width: 80px;
  }

  .h-title {
    font-size: 17px;
  }
}

@media (max-width: 760px) {

  .h-title {
    font-size: 15px;
    left: 15px;
  }

  .btn-1 {
    font-size: 12px;
    margin-top:8%;
    margin-left: 10% !important;
  }

  .item-text {
    left: 5%;
  }

  .box {
    border: none;
    top: 0px;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 0;
    margin-bottom: 15px;
  }

  .mr-x {
    margin: 0px 0px;
  }
  .bigbox {
  display:unset;}

}</style>