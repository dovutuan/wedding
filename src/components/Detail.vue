<script setup>
import {defineComponent} from 'vue';
import {WEDDING_LOCATIONS} from '@/constants/constant';

defineComponent({name: 'DetailComponent'});
</script>

<template>
  <section id="detail" class="py-10">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="font-great-vibes text-4xl md:text-5xl text-primary mb-4 font-bold">Thông Tin Lễ Cưới</h2>
        <div class="w-20 h-px bg-primary mx-auto mb-6"></div>
        <p class="max-w-2xl mx-auto">Chúng tôi rất hân hạnh được chào đón bạn đến dự lễ cưới của chúng tôi</p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div v-for="(location, index) in WEDDING_LOCATIONS"
             :key="index"
             class="bg-gray-50 p-8 rounded-lg shadow-sm"
             data-aos="fade-up" :data-aos-delay="index * 100">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="font-playfair text-2xl mb-2">{{ location.TITLE }}</h3>
            <p class="text-primary">{{ location.TIME }}</p>
          </div>

          <div class="text-center">
            <p class="text-gray-600 mb-4">{{ location.ADDRESS }}</p>

            <div class="map-container mb-4">
              <iframe
                  :src="location.MAP_EMBED_URL"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <a :href="location.MAP_LINK" target="_blank" class="text-primary hover:underline inline-flex items-center">
              Xem bản đồ
              <svg xmlns="http://www.w3.org/2000/svg"
                   class="h-4 w-4 ml-1"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>