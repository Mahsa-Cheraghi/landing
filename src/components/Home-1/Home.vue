<template class="mx-2">

  <Slider />
  <Box />
  <headbody></headbody>
  <Conter/>
  <Information />
  <br>
  <Medication class="mt-8"></Medication>
  <HeadFooter></HeadFooter>
  <Partners></Partners>
  <BoxFooter></BoxFooter>

</template>

<script>
import Slider from './Slider.vue';
import Box from './Box.vue'
import Headbody from './Headbody.vue'
import Conter from './Conter.vue'
import Information from './Information.vue'
import Medication from './/Medication.vue'
import HeadFooter from './HeadFooter.vue'
import Partners from './Partners.vue'
import BoxFooter from './BoxFooter.vue';
export default ({
  components: {
      Slider,
      Box,
      Headbody,
      Medication,
      Information,
      HeadFooter, Partners, BoxFooter,Conter
  }
})
</script>


