<script setup>
import {defineComponent} from 'vue';

defineComponent({name: 'FloatingComponent'});
</script>

<template>
  <div class="fixed top-1/4 left-10 w-8 h-8 bg-primary rounded-full opacity-20 floating hidden md:block delay-0s">
  </div>
  <div class="fixed top-1/3 right-20 w-12 h-12 bg-secondary rounded-full opacity-20 floating hidden md:block delay-1s">
  </div>
  <div class="fixed bottom-1/4 left-1/4 w-6 h-6 bg-primary rounded-full opacity-20 floating hidden md:block delay-2s">
  </div>
  <div class="fixed bottom-1/3 right-1/3 w-10 h-10 bg-secondary rounded-full opacity-20 floating hidden md:block delay-3s">
  </div>
</template>