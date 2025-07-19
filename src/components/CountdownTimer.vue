<script setup>
import {defineComponent, onBeforeUnmount, onMounted, ref} from 'vue';
import {FORMAT_DATE, WEDDING_DATE} from '@/constants/constant';
import {differenceInSeconds, parse} from 'date-fns';

defineComponent({name: 'CountdownTimerComponent'});

let intervalId = null
const days = ref('00')
const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')

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
  intervalId = setInterval(onUpdateCountdown, 1000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="flex justify-center mb-8 animate__animated animate__fadeIn animate__delay-3s">
    <div class="grid grid-cols-4 gap-2 md:gap-4">
      <div class="countdown-box text-center">
        <div class="countdown-item bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 md:p-4">
          <div id="days" class="countdown-number text-2xl md:text-4xl font-bold">{{ days }}</div>
          <div class="countdown-label text-xs md:text-sm">Ngày</div>
        </div>
      </div>
      <div class="countdown-box text-center">
        <div class="countdown-item bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 md:p-4">
          <div id="hours" class="countdown-number text-2xl md:text-4xl font-bold">{{ hours }}</div>
          <div class="countdown-label text-xs md:text-sm">Giờ</div>
        </div>
      </div>
      <div class="countdown-box text-center">
        <div class="countdown-item bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 md:p-4">
          <div id="minutes" class="countdown-number text-2xl md:text-4xl font-bold">{{ minutes }}</div>
          <div class="countdown-label text-xs md:text-sm">Phút</div>
        </div>
      </div>
      <div class="countdown-box text-center">
        <div class="countdown-item bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 md:p-4">
          <div id="seconds" class="countdown-number text-2xl md:text-4xl font-bold">{{ seconds }}</div>
          <div class="countdown-label text-xs md:text-sm">Giây</div>
        </div>
      </div>
    </div>
  </div>
</template>