<script setup>
import FloatingComponent from '@/components/Floating.vue';
import FooterComponent from '@/components/Footer.vue';
import GalleryComponent from '@/components/Gallery.vue';
import DetailComponent from '@/components/Detail.vue';
import StoryComponent from '@/components/Story.vue';
import SaveTheDateComponent from '@/components/SaveTheDate.vue';
import HeaderComponent from '@/components/Header.vue';
</script>

<template>
  <!-- Hero Section -->
  <header-component/>

  <!-- Save the Date -->
  <save-the-date-component/>

  <!-- Our Story -->
  <story-component/>

  <!-- Wedding Details -->
  <detail-component/>

  <!-- Gallery -->
  <gallery-component/>

  <!-- Footer -->
  <footer-component/>

  <!-- Floating elements -->
  <floating-component/>
</template>

<style scoped>
@import "@/assets/style.css";
</style>