<script setup>
import {defineComponent} from 'vue';
import {BRIDE, FORMAT_DATE, FORMAT_WEDDING_DATE, GROOM, WEDDING_DATE} from '@/constants/constant';
import {format, parse} from 'date-fns';

defineComponent({name: 'FooterComponent'});
</script>

<template>
  <footer class="py-12 bg-gray-900 text-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-8">
        <h2 class="font-great-vibes text-3xl md:text-4xl mb-4">{{ GROOM.SHORT }} & {{ BRIDE.SHORT }}</h2>
        <div class="w-20 h-px bg-primary mx-auto mb-6"></div>
        <p class="max-w-2xl mx-auto">{{ format(parse(WEDDING_DATE, FORMAT_DATE, new Date()), FORMAT_WEDDING_DATE) }}</p>
      </div>

      <div class="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
        <a href="#home" class="hover:text-primary transition duration-300">Trang chủ</a>
        <a href="#story" class="hover:text-primary transition duration-300">Câu chuyện</a>
        <a href="#detail" class="hover:text-primary transition duration-300">Thông tin</a>
        <a href="#gallery" class="hover:text-primary transition duration-300">Khoảnh khắc</a>
      </div>

      <div class="text-center text-sm text-gray-400">
        <p>© 2025 Đám cưới {{ GROOM.SHORT }} & {{ BRIDE.SHORT }}. Thiết kế với ❤️❤️❤️</p>
      </div>
    </div>
  </footer>
</template>