<template>
    <div class="row d-flex">
      
            <img id="IMG" src="/src/assets/img/the-consultation--e1598498410893.jpg">
            <div class="overlay3"></div>
            <h1 class="text-Servise text-center align-self-center">تماس با ما</h1>
    </div>
   
<div style="padding: 100px 0px 100px 0px;"></div>
<div class="row"><div class="col-lg-6"> <Form /></div></div>
  
<div style="padding: 100px 0px 100px 0px;"></div>
<BoxFooter/>
</template>

<script>
import Form from '../../Home-1/Form.vue'
import BoxFooter from '../../Home-1/BoxFooter.vue'
export default {
  components: {
  Form,BoxFooter
  }
}

</script>

<style scoped>
#IMG {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.overlay3 {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    background-color: transparent;
    opacity: 0.7;
    background-image: linear-gradient(60deg, #1B61F3 0%, rgba(16, 243, 240, 0.91) 70%);}

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
