<script setup>
import {defineComponent, onBeforeUnmount, onMounted, ref, watch} from 'vue';
import {FORMAT_DATE, WEDDING_DATE} from '@/constants/constant';
import {differenceInSeconds, parse} from 'date-fns';

defineComponent({name: 'CountdownTimerComponent'});

let intervalId = null
const days = ref('00')
const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')

const flipDays = ref(false)
const flipHours = ref(false)
const flipMinutes = ref(false)
const flipSeconds = ref(false)

const triggerFlip = (type) => {
  if (type === 'days') flipDays.value = !flipDays.value
  if (type === 'hours') flipHours.value = !flipHours.value
  if (type === 'minutes') flipMinutes.value = !flipMinutes.value
  if (type === 'seconds') flipSeconds.value = !flipSeconds.value
}

const prevDays = ref('00')
const prevHours = ref('00')
const prevMinutes = ref('00')
const prevSeconds = ref('00')

watch(days, (newVal) => {
  if (newVal !== prevDays.value) {
    triggerFlip('days')
    prevDays.value = newVal
  }
})

watch(hours, (newVal) => {
  if (newVal !== prevHours.value) {
    triggerFlip('hours')
    prevHours.value = newVal
  }
})

watch(minutes, (newVal) => {
  if (newVal !== prevMinutes.value) {
    triggerFlip('minutes')
    prevMinutes.value = newVal
  }
})

watch(seconds, (newVal) => {
  if (newVal !== prevSeconds.value) {
    triggerFlip('seconds')
    prevSeconds.value = newVal
  }
})

const onUpdateCountdown = () => {
  const now = new Date()
  const weddingDate = parse(WEDDING_DATE, FORMAT_DATE, new Date())
  const totalSeconds = differenceInSeconds(weddingDate, now)

  if (totalSeconds <= 0) {
    days.value = hours.value = minutes.value = seconds.value = '00'
    clearInterval(intervalId)
    return
  }

  const d = Math.floor(totalSeconds / 86400)
  const h = Math.floor((totalSeconds % 86400) / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60

  days.value = String(d).padStart(2, '0')
  hours.value = String(h).padStart(2, '0')
  minutes.value = String(m).padStart(2, '0')
  seconds.value = String(s).padStart(2, '0')
}

onMounted(() => {
  onUpdateCountdown()
  prevDays.value = days.value
  prevHours.value = hours.value
  prevMinutes.value = minutes.value
  prevSeconds.value = seconds.value
  intervalId = setInterval(onUpdateCountdown, 1000)
})

onMounted(() => {
  onUpdateCountdown()
  intervalId = setInterval(onUpdateCountdown, 1000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="flex justify-center mb-8 animate__animated animate__fadeIn animate__delay-2s">
    <div class="grid grid-cols-4 gap-2 md:gap-4">
      <div class="countdown-box text-center">
        <div :class="['countdown-item bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 md:p-4 hover:scale-105 transition-transform duration-300', { 'countdown-wobble': flipDays }]">
          <div id="days" class="countdown-number text-2xl md:text-4xl font-bold">{{ days }}</div>
          <div class="countdown-label text-xs md:text-sm">Ngày</div>
        </div>
      </div>
      <div class="countdown-box text-center">
        <div :class="['countdown-item bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 md:p-4 hover:scale-105 transition-transform duration-300', { 'countdown-wobble': flipHours }]">
          <div id="hours" class="countdown-number text-2xl md:text-4xl font-bold">{{ hours }}</div>
          <div class="countdown-label text-xs md:text-sm">Giờ</div>
        </div>
      </div>
      <div class="countdown-box text-center">
        <div :class="['countdown-item bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 md:p-4 hover:scale-105 transition-transform duration-300', { 'countdown-wobble': flipMinutes }]">
          <div id="minutes" class="countdown-number text-2xl md:text-4xl font-bold">{{ minutes }}</div>
          <div class="countdown-label text-xs md:text-sm">Phút</div>
        </div>
      </div>
      <div class="countdown-box text-center">
        <div :class="['countdown-item bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 md:p-4 hover:scale-105 transition-transform duration-300', { 'countdown-wobble': flipSeconds }]">
          <div id="seconds" class="countdown-number text-2xl md:text-4xl font-bold">{{ seconds }}</div>
          <div class="countdown-label text-xs md:text-sm">Giây</div>
        </div>
      </div>
    </div>
  </div>
</template>