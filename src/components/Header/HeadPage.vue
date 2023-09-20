<template>
    <div class="container">
        <div class="row">
            <div class="d-flex bd-highlight">

                <div class="bd-highlight highlight ml-10 mt-3">
                    <button type="button" class="btn">قرارملاقات</button>
                </div>

                <div class="bd-highlight highlight mr-10">

                    <div class="row">
                        <div class="col-lg-9 mt-2">تماس با ما</div>
                        <div class="col-lg-6 number">2234 675 4345+</div>
                        <div class="col-lg-6 i-call"> <img class="call" src="/src/assets/icon/icons8-call-30.png"></div>

                    </div>
                </div>
                <div class="bd-highlight highlight">

                    <div class="row ml-5">
                        <div class="col-lg-9 mt-2">88 Sunset Road</div>
                        <div class="col-lg-6 number">Kuta, Bali 80225</div>
                        <div class="col-lg-6 i-buld"> <i class="buld far fa-building"></i></div>

                    </div>




                </div>
                <div class="logopage mr-auto p-2 bd-highlight mt-2"><img class="logopage"
                        src="/src/assets/logo/logo@2x.png">
                </div>

            </div>
        </div>
        <!-- <hr class="hr"> -->
        <!-- <v-divider class="hr"></v-divider> -->
        <div class="border-but hr"></div>
    </div>
</template>
<style scoped>
.logopage {
    max-width: 160px;
}

.btn {
    background-color: #2a70ed;
    color: white;
}

.call {
    padding: .5em;
    border: 3px solid #2a70ed;
    border-width: 1px 1px 1px 1px;
    border-radius: 4px 4px 4px 4px;
    text-align: center;
}

.buld {
    padding: .5em;
    color: #2a70ed;
    border: 3px solid #2a70ed;
    border-width: 1px 1px 1px 1px;
    border-radius: 4px 4px 4px 4px;
    text-align: center;
    font-size: 22px;
}

.i-call {
    top: -15px;
    right: -25px;
}

.i-buld {
    top: -18px;
    right: -40px;
}

.number {
    color: #2a70ed;
    font-weight: bold;
    top: 7px;
}

.hr {
    border-bottom: 1px solid black;
    left:0px;
    display: none;
    display: 0;
}

@media screen and (max-width: 992px) {
    .highlight {
        display: none;
    }

    .hr {
        display: block;
        opacity: 0.5;
    }

    .logopage {
        left: 30%;
        margin-bottom: 5px;
    }
}</style>