<script setup>
import {defineComponent} from 'vue';
import {format, parse} from 'date-fns';
import {BRIDE, FORMAT_DATE, FORMAT_WEDDING_DATE, GROOM, SHORT_ADDRESS, WEDDING_DATE} from '@/constants/constant';
import CountdownTimerComponent from '@/components/CountdownTimer.vue';

defineComponent({name: 'HeaderComponent'});
</script>

<template>
  <section id="home" class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img src="@/assets/images/header.jpg"
           alt="Couple"
           class="w-full h-full object-cover object-center brightness-50">
    </div>

    <div class="relative z-10 text-center px-6 text-white">
      <p class="font-playfair tracking-widest mb-10 animate__animated animate__fadeIn text-2xl md:text-4xl lg:text-4xl">
        Chúng tôi sắp
      </p>
      <h1 class="font-great-vibes text-6xl md:text-8xl lg:text-9xl mb-8 animate__animated animate__fadeIn animate__delay-1s font-bold">
        Kết Hôn
      </h1>

      <div class="flex items-center justify-center space-x-6 mb-12 animate__animated animate__fadeIn animate__delay-2s">
        <div class="text-center">
          <p class="font-playfair text-lg uppercase tracking-widest">Chú Rể</p>
          <h3 class="text-2xl font-bold">{{ GROOM.DISPLAY }}</h3>
        </div>

        <div class="text-4xl font-thin">&</div>

        <div class="text-center">
          <p class="font-playfair text-lg uppercase tracking-widest">Cô Dâu</p>
          <h3 class="text-2xl font-bold">{{ BRIDE.DISPLAY }}</h3>
        </div>
      </div>

      <!-- Countdown Timer -->
      <countdown-timer-component/>

      <div class="animate__animated animate__fadeIn animate__delay-4s">
        <p class="font-playfair text-xl mb-2">
          {{ format(parse(WEDDING_DATE, FORMAT_DATE, new Date()), FORMAT_WEDDING_DATE) }}
        </p>
        <p class="text-sm uppercase tracking-widest">{{ SHORT_ADDRESS }}</p>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/50 to-transparent z-20"></div>
  </section>
</template>