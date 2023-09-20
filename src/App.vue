<template>
 <v-app>
  <v-locale-provider rtl>
  <Header />
    <router-view></router-view>
    <Footer />
  </v-locale-provider>
 </v-app>
</template>
<script>
import Header from "./components/Header/Header.vue"
import Footer from './components/footer/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style>
* {
  /* direction: rtl; */
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  
}
</style>
