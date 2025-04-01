<template>
  <div class="about">
    <h1>Hello There</h1>
    <UploadImage />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script setup>
import UploadImage from '../components/UploadImage.vue';

</script>
