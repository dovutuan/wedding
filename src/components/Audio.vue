<script setup>
import {defineComponent, onMounted, onUnmounted, ref} from 'vue';

defineComponent({name: 'AudioComponent'});

const audioRef = ref(null);
const isPlaying = ref(false);
const hasStarted = ref(false);
const listenerOptions = {once: true, passive: true};

const audios = [
  'https://assets.cinelove.me/mp3/bbc4462f-20fb-4fe0-8b19-3a330846dca4.mp3',
  'https://assets.cinelove.me/mp3/ab75a794-850b-46af-860c-e5db99f38239.mp3',
  'https://assets.cinelove.me/mp3/0e470330-e4d4-4fdc-8d99-830aab66916c.mp3',
  'https://assets.cinelove.me/mp3/6314d887-8f65-408f-b870-a2dea3dc0ce8.mp3',
  'https://assets.cinelove.me/mp3/73be7aac-7b1d-4a55-8354-f2ea6c6d2048.mp3',
  'https://assets.cinelove.me/mp3/5f4c5139-a13a-4ff0-82a2-e3a61240042f.mp3',
];

const playAudio = async () => {
  if (!audioRef.value.src) audioRef.value.src = audios[Math.floor(Math.random() * audios.length)];

  if (!audioRef.value) return;

  try {
    await audioRef.value.play();
    isPlaying.value = true;
    hasStarted.value = true;
    audioRef.value.volume = 0.3;
  } catch {
    addUserInteractionListeners();
  }
};

const pauseAudio = () => {
  if (!audioRef.value) return;

  audioRef.value.pause();
  isPlaying.value = false;
};

const toggleAudio = () => {
  isPlaying.value ? pauseAudio() : playAudio();
};

const addUserInteractionListeners = () => {
  ['click', 'touchstart', 'keydown'].forEach(event => window.addEventListener(event, playAudio, listenerOptions));
};

onMounted(() => playAudio());

onUnmounted(() => {
  ['click', 'touchstart', 'keydown'].forEach(event => window.removeEventListener(event, playAudio, listenerOptions));
});
</script>

<template>
  <audio
      ref="audioRef"
      loop
      preload="auto"
      autoplay
  ></audio>

  <button
      @click="toggleAudio"
      class="fixed top-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-50 audio-pulse hover:glow"
  >
    <transition name="icon-fade" mode="out-in">
      <svg
          v-if="isPlaying"
          key="playing"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
      >
        <path
            d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
      </svg>
      <svg
          v-else
          key="muted"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
      >
        <path
            d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
      </svg>
    </transition>
  </button>
</template>