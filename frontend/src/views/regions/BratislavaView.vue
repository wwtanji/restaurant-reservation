<template>
  <div>
    <NavbarComponent />


  </div>
</template>

<script lang="ts">
import NavbarComponent from '@/components/HeroSection/NavbarComponent.vue';

export default {
  name: 'BratislavaView',
  components: {
    NavbarComponent,
  },
};
</script>

<style scoped>
h1 {
  color: #333;
}
</style>
