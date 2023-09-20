<template>
    <div class="container">
     <div class="row mt-10">
            <div class="col-lg-12">
                <div class="row">
                   
                    <div class="col-lg-4 col-md-6">
                        <Contact />
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <Services />
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <Laboratory />
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <Treatment />
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <Dental />
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <Medicine />
                    </div>
                </div>
            </div></div>
            <button type="button" id="btn" class="btn-2">مشاهده تمامی خدمات</button>

    </div>

</template>
<script>
import Services from '/src/components/Home-1/Services.vue';
import Contact from '/src/components/Home-1/Contact.vue';
import Laboratory from '/src/components/Home-1/Laboratory.vue';
import Treatment from '/src/components/Home-1/Treatment.vue';
import Dental from '/src/components/Home-2/Dental.vue'
import Medicine from '/src/components/Home-2/Medicine.vue'
export default {
    components: { Services, Contact, Laboratory, Treatment, Dental, Medicine }
}
</script>
<style scope="this api replaced by slot-scope in 2.5.0+">
.btn-2{
   color:#fff !important;
   background-color:rgb(67, 127, 218);
   padding:10px 20px;
   border-radius:4px;
   justify-content: center;
   right:40%;
}
@media (max-width: 760px) {

p {
    font-size: 12px;

    left: 12%;
}

}
</style>