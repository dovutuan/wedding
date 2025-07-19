<script setup>
import {defineComponent} from 'vue';
import {format, parse} from 'date-fns';
import { vi } from 'date-fns/locale'

import {
  FORMAT_DATE,
  FORMAT_DATE_VI,
  FORMAT_DAY,
  FORMAT_MONTH,
  FORMAT_YEAR,
  SHORT_ADDRESS,
  WEDDING_DATE, WEDDING_TIME
} from '@/constants/constant';

defineComponent({name: 'SaveTheDateComponent'});

const weddingDate = parse(WEDDING_DATE, FORMAT_DATE, new Date())

</script>

<template>
  <section class="py-10">
    <div class="container mx-auto px-6">
      <div class="text-center mb-14" data-aos="fade-up">
        <h2 class="font-great-vibes text-4xl md:text-5xl text-primary mb-4 font-bold">Save the Date</h2>
        <div class="w-20 h-px bg-primary mx-auto mb-6"></div>
        <p class="max-w-2xl mx-auto">Chúng tôi trân trọng kính mời bạn đến dự lễ thành hôn của chúng tôi vào {{ format(weddingDate, FORMAT_DATE_VI, {locale: vi}) }}</p>
      </div>

      <div class="flex justify-center" data-aos="fade-up" data-aos-delay="200">
        <div class="bg-secondary p-8 rounded-lg shadow-lg text-center max-w-md">
          <div class="text-6xl font-playfair text-primary mb-4">{{ format(weddingDate, FORMAT_DAY) }}</div>
          <div class="text-xl uppercase tracking-widest mb-2">{{ format(weddingDate, FORMAT_MONTH, {locale: vi}) }}</div>
          <div class="text-2xl mb-6">{{ format(weddingDate, FORMAT_YEAR) }}</div>
          <div class="w-20 h-px bg-primary mx-auto mb-6"></div>
          <p class="mb-6">{{ WEDDING_TIME }} sáng<br>{{ SHORT_ADDRESS }}</p>
        </div>
      </div>
    </div>
  </section>
</template>