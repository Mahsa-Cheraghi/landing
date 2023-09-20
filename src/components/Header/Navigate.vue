<template >
    <div class="d-flex">
        <div class="p-2">
            <v-navigation-drawer v-model="drawer" temporary width="333" height="auto" class="scroll">
                <div class="d-flex Flex">
                    <div class="p-2">
                        <img class="logonav" src="/src/assets/logo/logo@2x.png">
                    </div>
                    <div class="mr-auto p-2"><v-btn color="#2a70ed" size="w-50" @click.stop="drawer = !drawer">
                            <div class="close">x</div>
                        </v-btn></div>
                </div>
                <v-list density="compact" nav>
                    <v-list-item>
                        <div class="dropdown link">
                            <a href="#" class="linkhome">
                                خانه
                            </a>
                            <button class="toggl" data-bs-toggle="dropdown"></button>
                            <ul class="dropdown-menu dropmenu">
                                <li><router-link class="my-link-2" :to="{ name: 'landing' }">
                                        خانه-چیدمان 1
                                    </router-link></li>
                                <li><router-link class="my-link-2 mt" :to="{ name: 'home2' }">
                                        خانه-چیدمان 2
                                    </router-link></li>
                            </ul>
                        </div>
                        <br>
                        <li><router-link class="my-link-3 py-2" :to="{ name: 'about' }">
                                درباره ی ما
                            </router-link></li>
                        <br>
                        <li><router-link class="py-2  my-link-3" :to="{ name: 'services' }">
                                سرویس ها
                            </router-link></li>
                        <br>
                        <li><router-link class="py-2 my-link-3" :to="{ name: 'ourdoctor' }">
                                دکترما
                            </router-link></li>
                        <br>
                        <li><router-link class="py-2 my-link-3" :to="{ name: 'appointment' }">
                                وقت ملاقات
                            </router-link></li>
                        <br>
                        <div class="dropdown link">
                            <a href="#" aria-expanded="false" class="my-link-3">
                                صفحات
                            </a>
                            <button class="toggl" data-bs-toggle="dropdown"></button>
                            <ul class="dropdown-menu dropmenu" aria-labelledby="navbarDropdown">
                                <li><router-link class="my-link-2" :to="{ name: 'faq' }">
                                        پرسش و پاسخ
                                    </router-link></li>
                                <li><router-link class="my-link-2 mt" :to="{ name: 'error' }">
                                        صفحه 404
                                    </router-link></li>
                            </ul>
                        </div>
                        <br>
                        <div class="dropdown link">
                            <a href="#" aria-expanded="false" class="my-link-3">
                                تماس
                            </a>
                            <button class="toggl" data-bs-toggle="dropdown" color="black">
                            </button>
                            <ul class="dropdown-menu dropmenu" aria-labelledby="navbarDropdown">
                                <li><router-link class="my-link-2" :to="{ name: 'layout1' }">
                                        تماس-1
                                    </router-link></li>
                                <li><router-link class="my-link-2 mt" :to="{ name: 'layout2' }">
                                        تماس-2
                                    </router-link></li>
                            </ul>
                        </div>

                    </v-list-item>
                </v-list>

            </v-navigation-drawer>
            <div class="row">
                <div class="col-lg-6">
                    <v-btn color="#2a70ed" @click.stop="drawer = !drawer" width="">
                        <img class="IconMenu" src="/src/assets/icon/icons8-menu-30.png">
                    </v-btn>
                </div>



            </div>
        </div>

        <div class="mr-auto p-2 ml-2">
            <form class="FORM">
                <div>ما را دنبال کنید :
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter twitter mx-4"></i>
                    <i class="fab fa-instagram"></i>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import '@fortawesome/fontawesome-free/css/all.css'
export default {
    data() {
        return {
            drawer: null,

        }
    },

};
</script>

<style scope="this api replaced by slot-scope in 2.5.0+" >
@import url("/src/assets/css/all.css");

.twitte {
    width: 1.25em;
    font-weight: 400;
    text-rendering: auto;
    line-height: 1
}

.FORM {
    left: 0px;
    margin-right: 100px;


}

.v-navigation-drawer__scrim {
    inset: unset !important;
    position: fixed !important;
    top: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
    right: 0 !important;
    width: unset;
    height: unset;
    color: black;

}
.IconMenu{
    width: 25px;
}



.toggl::after {
    content: "";
    border: solid #394762;
    border-width: 0px 1px 1px 0px;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    margin-left: 3px;
    margin-bottom: 5px;

}

.toggl {
    margin-right: 20px;
    border: 1px solid #394762;
    text-align: center;
    padding: 0px 10px;
    border-radius: 38%;
    font-weight: bold;
    width: 45px;
    color: #394762;
}
.link:hover button{
    border: 1px solid #0B54B6;
}

.logonav {
    max-width: 120px;
    max-height: 50px;
}

.Flex {
    padding: 10px 20px 0px 20px;
}

.close {
    color: white;
    padding: 8px 1px;
    font-weight: bold;
    width: 45px;
    border-radius: 3px;
    border-width: 0px 0px 0px 0px;
}
.linkhome{
    text-decoration: none;  
}
.my-link-2 {
    color: #394762;
    text-decoration: none;
    left: 60%;
}

.my-link-3 {
    color: #394762;
    text-decoration: none;

}

.dropmenu {
    border-radius: 0px 0px 0px 0px;
    position: relative !important;
    height: 100px !important;
    border: none !important;
    border-color: #0B54B6;
    background-color: #FFFFFF;
    min-width: 220px;
    box-shadow: 4px 0px 10px 1px rgba(11, 84, 182, 0.07);
    margin-bottom: 15px !important;
}

i{
	color:#2a70ed;
}

.mt {
    top: 20px;
}

.scroll {

    overflow-y: scroll
}
</style>


 


