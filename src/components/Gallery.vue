<script setup>
import {defineComponent} from 'vue';

defineComponent({name: 'GalleryComponent'});

const requireImages = require.context('@/assets/galleries', false, /\.(png|jpe?g)$/)
const images = requireImages.keys().map(requireImages)
</script>

<template>
  <section id="gallery" class="py-10">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="font-great-vibes text-4xl md:text-5xl text-primary mb-4 font-bold">Khoảnh Khắc Đẹp</h2>
        <div class="w-20 h-px bg-primary mx-auto mb-6"></div>
        <p class="max-w-2xl mx-auto">Những khoảnh khắc đáng nhớ trong hành trình yêu nhau của chúng tôi</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(img, index) in images"
             :key="index"
             class="gallery-item overflow-hidden rounded-lg"
             data-aos="fade-up"
             :data-aos-delay="(index % 3) * 100">
          <img :src="img" :alt="`Gallery ${index + 1}`" class="w-full h-64 object-cover" loading="lazy"/>
        </div>
      </div>
    </div>
  </section>
</template>