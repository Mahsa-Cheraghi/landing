<template>
    <div class="container">
        <div class="d-flex justify-content-between bgbox">
            <div class="p-2">
                 <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a></div>
            <div class="p-2">
                <h3 class="text-center">با Medkit در ارتباط باشید</h3>
            </div>
        </div>
    </div>
</template>
<script>
import '@fortawesome/fontawesome-free/css/all.css'
export default {

}
</script>
<style scoped>
@import url("/src/assets/css/all.css");

.bgbox {
    background-color: #eff6fe;
    text-align: center;
    padding: 40px 40px 40px 40px;
    border-radius: 10px 10px 10px 10px;

}

a {
    border: 1px solid white;
    border-radius: 50%;
    padding: 15px;
    margin: 5px;
    background-color: white;
}

a:hover {
    background-color: #2a70ed;
}

a i {
    font-size: 1.5rem;
}

a:hover i {
    color: white
}

@media (max-width: 990px) {
    .title {
        /* margin-top: 5px;
        font-size: 17px;
        top: 50%; */
    }
.bgbox{
    flex-direction: column;
}
    @media (max-width: 760px) {

        a i {
            font-size: 1rem;
        }

    }
}</style>