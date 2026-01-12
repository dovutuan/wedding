<script setup>
import {computed, defineComponent} from 'vue';
import {format, parse} from 'date-fns';
import {vi} from 'date-fns/locale'

import {
  FORMAT_DATE,
  FORMAT_WEDDING_DATE,
  SHORT_ADDRESS,
  WEDDING_DATE,
  WEDDING_TIME,
  WEEK_DAYS
} from '@/constants/constant';

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
  <section class="py-6">
    <div class="container mx-auto px-6 max-w-md text-center">
      <h2 class="font-great-vibes text-4xl md:text-5xl text-primary mb-4 font-bold tracking-widest">Save the Date</h2>
      <div class="w-40 h-px bg-primary mx-auto mb-6"></div>

      <div class="bg-secondary rounded-xl shadow p-3">
        <div class="text-2xl font-semibold mb-3">
          {{ format(weddingDate, FORMAT_WEDDING_DATE, {locale: vi}) }}
          <br>
          <span class="text-gray-500 text-lg">{{ WEDDING_TIME }} </span>
          <br>
          <span class="text-gray-500 text-lg">{{ SHORT_ADDRESS }}</span>
        </div>
        <div class="grid grid-cols-7 text-xs font-semibold mb-2">
          <div v-for="d in WEEK_DAYS" :key="d">{{ d }}</div>
        </div>

        <div class="grid grid-cols-7 gap-1">
          <div v-for="n in startOffset" :key="'e'+n"></div>
          <div v-for="day in totalDays"
               :key="day"
               class="h-10 flex items-center justify-center relative rounded"
               :class="isWeddingDay(day) && 'bg-primary/10'">
            <span
                :class="isWeddingDay(day) && 'font-bold text-red-500 border border-red-500 rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center'">{{
                day
              }}</span>

            <svg v-if="isWeddingDay(day)"
                 class="absolute -top-1 -right-1 w-4 h-4 text-primary"
                 viewBox="0 0 24 24"
                 fill="red">
              <path
                  d="M12 21s-7.5-4.35-10-8.5C-0.5 7.5 3 3 7.5 5.5 9.24 6.46 12 9 12 9s2.76-2.54 4.5-3.5C21 3 24.5 7.5 22 12.5 19.5 16.65 12 21 12 21z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
