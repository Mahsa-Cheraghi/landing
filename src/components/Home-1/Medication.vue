<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-lg-10">
                        <h2>داروی مناسب خود را پیدا کنید</h2>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-lg-10">
                        <p>شخیص دقیق می تواند یکی از تاثیرگذارترین تجربیاتی باشد که می توانید داشته باشید. ما می توانیم به
                            شما کمک کنیم تا به آنجا بروید.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="tab">
                                <input type="checkbox" id="rd2" name="rd" />
                                <label class="tab-label" for="rd2">
                                    <h5 style="color:#253452 ;">ما پزشکان متخصصی داریم </h5>
                                </label>

                                <div class="tab-content">
                                    خیلی دور پشت کوه های کشورهای Vokalia و Consonantia زندگی میکنند
                                </div>
                            </div>
                        </div>

                        <div class="tab">
                            <input type="checkbox" id="rd3" name="rd" />

                            <label class="tab-label" for="rd3">
                                <h5 style="color:#253452 ;">کیفیت و ایمنی در کلینیک Medkit</h5>

                            </label>
                            <div class="tab-content">
                                آنها جدا از هم در Bookmarksgrove درست در ساحل Semantics زندگی می کنند، یک اقیانوس زبان
                                بزرگ. رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین
                                می کند.

                                این کشور بهشتی است که در آن قسمت های برشته جملات به دهان شما پرواز می کند.
                            </div>
                        </div>

                        <div class="tab">
                            <input type="checkbox" id="rd1" name="rd" />

                            <label class="tab-label" for="rd1">
                                <h5 style="color:#253452 ;">بیماری ها و شرایط</h5>

                            </label>
                            <div class="tab-content">
                                حتی «اشاره‌گیری» قدرتمند هیچ کنترلی روی متون کور ندارد، این یک زندگی تقریباً غیرمستقل
                                است، اما یک روز یک خط کوچک از متن کور به نام لورم ایپسوم تصمیم گرفت به دنیای دوردست
                                گرامر برود. </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6"><img class="imagedoctor" src="/src/assets/img/illustration-3HT8LSZ@2x-768x753.png"></div>
          



        </div>
    </div>
</template>
<script>
import '@fortawesome/fontawesome-free/css/all.css'

export default {
    data() {
        return {
        }
    }

}

</script>

<style scoped>
@import url("/src/assets/css/all.css");

body {

    margin: 0px;
}


.imagedoctor {
    width: 600px;
}

input {
    position: absolute;
    opacity: 0;
    z-index: -1;
}

.tab {
    overflow: hidden;
    border-color: #E7EBF0;
    margin: 0;
    border-bottom: 1px solid #d5d8dc;
    border-bottom-color: rgb(213, 216, 220);
    border-bottom-width: 1px;
    cursor: pointer;
}
.tab-label {
    display: flex;
    padding: 1em;
    cursor: pointer;
    justify-content: flex-start;
}
.tab-label::before {
    content: " > ";
    background-color: white;
    width: 40px;
    height: 30px;
    text-align: center;
    transition: all 0.15s;
    font-weight: bold;
   
}

.tab-content {
    height: 0;
}

input:checked~.tab-content {

    padding: 1em 1em 1em 1em;
    transition: all .10s;
    height: auto;
}

input:checked~.tab-label::before {
    transform: rotate(-90deg);
}

@media (max-width: 990px) {
    .imagedoctor {
        max-width: 500px;
        margin-top: 10%;
    }
}


@media (max-width: 760px) {
    .imagedoctor {
        display: none;
    }

    h2 {
        font-size: 17px;
    }

    p {
        left: 5px;
    }

    h5 {
        font-size: 17px;
    }
}</style>