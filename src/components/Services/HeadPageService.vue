<template>

        <div class="row d-flex">
           
                <img class="IMG" src="/src/assets/img/medical-team-performing-operation-e1598498346953.jpg">
                <div class="overlay3"></div>
                <h1 class="text-Servise text-center align-self-center">سرویس ها</h1>
        </div>
<div style="padding: 80px 0px 80px 0px;"></div>
</template>
<style scoped>
.overlay3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    background-color: transparent;
    opacity: 0.7;
    background-image: linear-gradient(60deg, #1B61F3 0%, rgba(16, 243, 240, 0.91) 70%);
}


.IMG {
  position: relative;
    left: 0;
    height:100%;
    width: 100%;
}
.text-Servise{
    position: absolute;
    font-size:48px;
    color: #FFFFFF;
    font-weight: 600;
    
}
@media (max-width: 460px) {
    .text-Servise{
        font-size:20px;
    }
}

</style>