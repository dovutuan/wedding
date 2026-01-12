<script setup>
import {defineComponent} from 'vue';
import {WEDDING_LOCATIONS} from '@/constants/constant';

defineComponent({name: 'DetailComponent'});
</script>

<template>
  <section id="detail" class="py-6">
    <div class="container mx-auto px-6">
      <div class="text-center mb-14" data-aos="fade-up">
        <h2 class="font-great-vibes text-4xl md:text-5xl text-primary mb-4 font-bold tracking-widest">Thông Tin Lễ
          Cưới</h2>
        <div class="w-40 h-px bg-primary mx-auto mb-6"></div>
        <p class="max-w-2xl mx-auto">Chúng tôi rất hân hạnh được chào đón bạn đến dự lễ cưới của chúng tôi</p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div v-for="(location, index) in WEDDING_LOCATIONS"
             :key="index"
             class="bg-gray-50 p-6 rounded-lg shadow-sm card-hover relative text-center"
             data-aos="zoom-in"
             :data-aos-delay="index * 150">
          <div class="absolute top-4 left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="font-playfair text-2xl mb-1">{{ location.TITLE }}</h3>
          <p class="text-primary font-medium mb-3">{{ location.TIME }}</p>
          <p class="text-gray-600 mb-4 text-left">{{ location.ADDRESS }}</p>

          <div class="map-container mb-4 hover:shadow-xl transition-shadow duration-300">
            <iframe
                :src="location.MAP_EMBED_URL"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a :href="location.MAP_LINK"
             target="_blank"
             class="inline-flex items-center text-primary hover:underline group">
            Xem bản đồ
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>