<script setup>
import {defineComponent} from 'vue';
import {BRIDE, FORMAT_DATE, FORMAT_WEDDING_DATE, GROOM, WEDDING_DATE} from '@/constants/constant';
import {format, parse} from 'date-fns';

defineComponent({name: 'FooterComponent'});
</script>

<template>
  <footer class="py-12 bg-gray-900 text-white" data-aos="fade-up">
    <div class="container mx-auto px-6">
      <div class="text-center mb-8" data-aos="zoom-in">
        <h2 class="font-great-vibes tracking-widest text-3xl md:text-4xl mb-4 animate__animated animate__fadeIn">{{ GROOM.SHORT }}  &  {{ BRIDE.SHORT }}</h2>
        <div class="w-20 h-px bg-primary mx-auto mb-6 animate__animated animate__fadeIn animate__delay-1s"></div>
        <p class="max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-2s">{{ format(parse(WEDDING_DATE, FORMAT_DATE, new Date()), FORMAT_WEDDING_DATE) }}</p>
      </div>

      <div class="flex flex-col md:flex-row justify-center items-center gap-6 mb-8" data-aos="fade-up" data-aos-delay="300">
        <a href="#home" class="hover:text-primary transition-all duration-300 hover:scale-110 hover:glow relative group">Trang chủ
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#story" class="hover:text-primary transition-all duration-300 hover:scale-110 hover:glow relative group">Câu chuyện
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#detail" class="hover:text-primary transition-all duration-300 hover:scale-110 hover:glow relative group">Thông tin
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#gallery" class="hover:text-primary transition-all duration-300 hover:scale-110 hover:glow relative group">Khoảnh khắc
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>

        <a href="#gift" class="hover:text-primary transition-all duration-300 hover:scale-110 hover:glow relative group">Gift
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>

      <div class="text-center text-sm text-gray-400 animate__animated animate__fadeIn animate__delay-3s" data-aos="fade-up" data-aos-delay="400">
        <p>© 2025 Đám cưới {{ GROOM.SHORT }} & {{ BRIDE.SHORT }}. Thiết kế với <span class="heartbeat inline-block">❤️</span><span class="heartbeat inline-block" style="animation-delay: 0.2s;">❤️</span><span class="heartbeat inline-block" style="animation-delay: 0.4s;">❤️</span></p>
      </div>
    </div>
  </footer>
</template>