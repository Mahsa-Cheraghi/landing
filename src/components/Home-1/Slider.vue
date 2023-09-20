<template>
    <div class="slider">

        <div class="slider-item" v-for="i in [Index]" :key="i" :style="{ backgroundImage: `url(${currentImg.src})` }">

            <div class="overlay"></div>

        </div>

    </div>
    <!-- <div class="row TiTle">
        <div class="row">
            <div class="col-lg-4">
                <h1 class="p">مراقب های بهداشتی برای سلامت خانواده شما</h1>
            </div><br>
            <div class="col-lg-4">
                <p class="p">خدمات اضطراری با استاندارد بین المللی</p>
            </div>
        </div>
      <div class="row"> 
            <span class=" span"> <button type="button" class="col-lg-2 btn call-us bg-white px-4 py-1">تماس باما</button>

                <span class="span"> <button type="button" class="col-lg-2  btn bg px-4 py-1">بیشتربدانید</button></span>

            </span> -->



        <!-- </div> -->


    <!-- </div> -->
</template>
<script>
export default {
    name: "Slider",
    data() {
        return {
            images: [{
                src: "/src/assets/image/successful-handsome-doctor-with-a-beaming-smile-V34ZJYH.jpg",

            },

            {

                src: "/src/assets/image/team-of-multiracial-doctors-at-hospital-e1598498378805.jpg",
            }


            ],
            timer: null,
            Index: 0
        };
    },

    mounted: function () {
        this.startSlide();
    },

    methods: {
        startSlide: function () {
            this.timer = setInterval(this.next, 4000);
        },

        next: function () {
            this.Index += 1;
        },
        prev: function () {
            this.Index -= 1;
        }
    },

    computed: {
        currentImg: function () {
            return this.images[Math.abs(this.Index) % this.images.length];
        }
    }
};
</script>
<style scope>
.slider {
    width: 100%;
    height: 700px;
    background-color: lightgray;
    position: relative;
    overflow: hidden;

}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(11, 198, 245, 0.5);

}

.slider-item {
    width: 100%;
    height: 100%;
    animation-name: scale-animation;
    animation-duration: 20s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    background-size: cover;
}

.TiTle {
    z-index: +1;
    top: -400px;
    right: 55%;
}

.p {
    color: white;
}

.span {
    display: inline-flex;
}
.bg{
  background-color: #2AC688;
}
.call-us{
    width: 100px;
}
  


@keyframes scale-animation {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.5);
    }

    100% {
        transform: scale(1);
    }
}
@media screen and (max-width:760px) {

    .slider{
        height:350px;
}
}
</style> 
  
  

  