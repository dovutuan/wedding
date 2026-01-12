<script setup>
import {defineComponent, ref} from 'vue'

defineComponent({name: 'GalleryComponent'})

const requireImages = require.context('@/assets/galleries', false, /\.(png|jpe?g)$/)
const images = requireImages.keys().map(requireImages)

const showViewer = ref(false)
const activeImage = ref(null)

const openImage = (img) => {
  activeImage.value = img
  showViewer.value = true
}

const closeImage = () => {
  showViewer.value = false
  activeImage.value = null
}
</script>


<template>
  <section id="gallery" class="py-6">
    <div class="container mx-auto px-6">
      <div class="text-center mb-14" data-aos="fade-up">
        <h2 class="font-great-vibes text-4xl md:text-5xl text-primary mb-4 font-bold tracking-widest">Khoảnh Khắc
          Đẹp</h2>
        <div class="w-40 h-px bg-primary mx-auto mb-6"></div>
        <p class="max-w-2xl mx-auto">Những khoảnh khắc đáng nhớ trong hành trình yêu nhau của chúng tôi</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(img, index) in images"
             :key="index"
             class="relative overflow-hidden rounded-lg image-zoom card-hover cursor-pointer"
             data-aos="zoom-in"
             @click="openImage(img)"
             :data-aos-delay="(index % 3) * 100">
          <img :src="img"
               :alt="`Gallery ${index + 1}`"
               class="w-full h-64 object-cover transition-transform duration-500"
               loading="lazy"/>

          <button class="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                  @click.stop="openImage(img)">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 19l-5.6-5.6a7 7 0 1 0-2 2L19 21l2-2zM5 10a5 5 0 1 1 10 0A5 5 0 0 1 5 10z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <transition
        enter-active-class="transition duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div v-if="showViewer"
           class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
           @click="closeImage">
        <img :src="activeImage" class="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl" :alt="activeImage" loading="lazy"/>

        <button
            class="absolute text-white top-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-60 audio-pulse hover:glow"
            @click.stop="closeImage">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path
                d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L12 13.4l-6.3 6.3-1.4-1.4L10.6 12 4.3 5.7 5.7 4.3 12 10.6l6.3-6.3z"/>
          </svg>
        </button>
      </div>
    </transition>

  </section>
</template>