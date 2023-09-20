<template>
  <div class="container">
    <div class="counter">{{count }}</div>
    <div class="content" v-scroll="handleScroll">

    </div>
  </div>
</template>

<script>
export default {
  directives: {
    scroll: {
      inserted: function (el, binding) {
        // Add the scroll event listener
        el.addEventListener('scroll', binding.value);
      },
      unbind: function (el, binding) {
        // Remove the scroll event listener
        el.removeEventListener('scroll', binding.value);
      }
    }
  },
  methods: {
    handleScroll: function (event) {
      // Handle the scroll event
      console.log('Scrolled!');
      // You can perform any actions or computations here based on the scroll event.
    }
  }
}
</script>