<script setup>
import {computed, defineComponent} from 'vue';
import {parse} from 'date-fns';

import {BRIDE, FORMAT_DATE, GROOM, WEDDING_DATE, WEDDING_EVENTS, WEEK_DAYS} from '@/constants/constant';

defineComponent({name: 'SaveTheDateComponent'});

const weddingDate = parse(WEDDING_DATE, FORMAT_DATE, new Date())

const year = weddingDate.getFullYear()
const month = weddingDate.getMonth()

const totalDays = computed(() => new Date(year, month + 1, 0).getDate())
const startOffset = computed(() => {
  const day = new Date(year, month, 1).getDay()
  return day === 0 ? 6 : day - 1
})

const isWeddingDay = (day) => {
  return (day === weddingDate.getDate() || (day === weddingDate.getDate() - 1))
}

</script>


<template>
  <section id="save-the-date" class="my-16 text-center">
    <div class="text-center mb-8" data-aos="fade-up">
      <h2 class="font-great-vibes text-4xl md:text-5xl text-primary mb-5 font-bold tracking-widest">Save the Date</h2>
      <div class="w-40 h-px bg-primary mx-auto"></div>
    </div>

    <div class="bg-secondary" data-aos="zoom-in">
      <div class="container mx-auto max-w-5xl text-center">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">

          <div class="rounded-xl p-6">
            <h2 class="font-great-vibes tracking-widest text-3xl text-black font-bold mb-4">{{ WEDDING_EVENTS.ENGAGEMENT_CEREMONY.TITLE }}</h2>
            <p class="uppercase tracking-widest mb-2">Vào {{ WEDDING_EVENTS.ENGAGEMENT_CEREMONY.TIME }}, {{ WEDDING_EVENTS.DAY_OF_WEEK }}</p>
            <div class="flex items-center justify-center gap-4 my-4">
              <span class="py-1">{{ WEDDING_EVENTS.MONTH }}</span>
              <span class="text-5xl font-bold text-black font-bold">{{ WEDDING_EVENTS.DAY }}</span>
              <span class="py-1">{{ WEDDING_EVENTS.YEAR }}</span>
            </div>
            <p class="text-xs italic mb-3">{{ WEDDING_EVENTS.LUNAR_DATE }}</p>

            <p class="uppercase text-black font-medium mb-2">{{ BRIDE.LOCATION_NAME }}</p>
            <p>{{ BRIDE.ADDRESS }}</p>
          </div>

          <div class="rounded-xl py-8 px-6">
            <div class="grid grid-cols-7 text-xs font-semibold mb-2">
              <div v-for="d in WEEK_DAYS" :key="d">{{ d }}</div>
            </div>

            <div class="grid grid-cols-7 gap-1">
              <div v-for="n in startOffset" :key="'e'+n"></div>
              <div v-for="day in totalDays"
                   :key="day"
                   class="h-8 flex items-center justify-center relative rounded border border-dashed"
                   :class="isWeddingDay(day) && 'bg-primary/10 border-red-500'">
            <span
                :class="isWeddingDay(day) && 'font-bold text-red  rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center'">{{
                day
              }}</span>

                <svg v-if="isWeddingDay(day)" class="absolute -top-2 -right-2 w-4 h-4" viewBox="0 0 24 24" fill="red">
                  <path
                      d="M12 21s-7.5-4.35-10-8.5C-0.5 7.5 3 3 7.5 5.5 9.24 6.46 12 9 12 9s2.76-2.54 4.5-3.5C21 3 24.5 7.5 22 12.5 19.5 16.65 12 21 12 21z"/>
                </svg>
              </div>
            </div>
          </div>

          <div class="rounded-xl p-6">
            <h2 class="font-great-vibes tracking-widest text-3xl text-black font-bold mb-4">{{ WEDDING_EVENTS.WEDDING_CEREMONY.TITLE }}</h2>
            <p class="uppercase tracking-widest mb-2">Vào {{ WEDDING_EVENTS.WEDDING_CEREMONY.TIME }}, {{ WEDDING_EVENTS.DAY_OF_WEEK }}</p>
            <div class="flex items-center justify-center gap-4 my-4">
              <span class="py-1">{{ WEDDING_EVENTS.MONTH }}</span>
              <span class="text-5xl font-bold text-black font-bold">{{ WEDDING_EVENTS.DAY }}</span>
              <span class="py-1">{{ WEDDING_EVENTS.YEAR }}</span>
            </div>
            <p class="text-xs italic mb-3">{{ WEDDING_EVENTS.LUNAR_DATE }}</p>

            <p class="uppercase text-black font-medium mb-2">{{ GROOM.LOCATION_NAME }}</p>
            <p>{{ GROOM.ADDRESS }}</p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
