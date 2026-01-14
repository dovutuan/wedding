<script setup>
import {defineComponent, onMounted, ref} from 'vue'
import {HEART_COUNT, MOTIONS} from '@/constants/constant';

defineComponent({name: 'FloatingComponent'});

const hearts = ref([])

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

onMounted(() => {
  hearts.value = Array.from({length: HEART_COUNT}).map(() => {
    const size = random(15, 65)

    return {
      top: `${random(5, 95)}%`,
      left: `${random(5, 95)}%`,
      size: `${size}px`,
      motion: MOTIONS[random(0, MOTIONS.length - 1)],
      duration: `${random(6, 12)}s`,
      delay: `${random(0, 4)}s`,
      rotateDuration: `${random(6, 10)}s`
    }
  })
})
</script>

<template>
  <div
      v-for="(heart, index) in hearts"
      :key="index"
      class="heart-wrapper"
      :style="{
      top: heart.top,
      left: heart.left,
      animationDuration: '5s'
    }">
    <div class="heart-rotate" :style="{ animationDuration: heart.rotateDuration }">
      <div class="heart-float"
           :style="{
          animationName: heart.motion,
          animationDuration: heart.duration,
          animationDelay: heart.delay
        }">
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            class="text-primary"
            :style="{ width: heart.size, height: heart.size }">
          <path
              d="M12 21s-7.5-4.35-10-8.5C-0.5 7.5 3 3 7.5 5.5
               9.24 6.46 12 9 12 9s2.76-2.54 4.5-3.5
               C21 3 24.5 7.5 22 12.5
               19.5 16.65 12 21 12 21z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>