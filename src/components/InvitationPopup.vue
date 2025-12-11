<template>
  <transition name="fade">
    <div v-if="visible" class="invitation-overlay" @click.self="closePopup">
      <div class="invitation-card">
        <div class="invitation-animation" aria-hidden="true">
          <lottie-player
            v-if="playerReady"
            autoplay
            loop
            mode="normal"
            src="https://lottie.host/7fde18f5-4cb9-4935-8c0f-5a054e29a6b8/CCITfN5sKy.json"
            style="width: 100%; height: 100%;"
          />
        </div>
        <h2 class="font-great-vibes text-primary text-4xl mb-3">Thiệp mời</h2>
        <p class="text-center mb-4">
          Chúng tôi trân trọng kính mời bạn tham dự ngày vui của chúng tôi. Hãy nhấn để xem chi tiết!
        </p>
        <button class="invitation-button" type="button" @click="closePopup">Xem ngay</button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref} from 'vue';

const visible = ref(true);
const playerReady = ref(false);
let autoCloseTimer = null;

const closePopup = () => {
  if (autoCloseTimer) {
    clearTimeout(autoCloseTimer);
    autoCloseTimer = null;
  }
  visible.value = false;
};

const loadLottiePlayer = () => new Promise((resolve, reject) => {
  if (typeof window === 'undefined') {
    resolve();
    return;
  }

  if (customElements.get('lottie-player')) {
    resolve();
    return;
  }

  const existingScript = document.querySelector('script[data-lottie-player]');
  if (existingScript) {
    existingScript.addEventListener('load', () => resolve());
    existingScript.addEventListener('error', reject);
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
  script.async = true;
  script.dataset.lottiePlayer = 'true';
  script.onload = () => resolve();
  script.onerror = reject;
  document.head.appendChild(script);
});

onMounted(() => {
  loadLottiePlayer().then(() => {
    playerReady.value = true;
  });

  autoCloseTimer = setTimeout(() => {
    closePopup();
  }, 5000);
});

onBeforeUnmount(() => {
  if (autoCloseTimer) {
    clearTimeout(autoCloseTimer);
  }
});
</script>

<style scoped>
.invitation-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  padding: 1.5rem;
}

.invitation-card {
  background: #fff8f4;
  border-radius: 16px;
  padding: 2rem 2.5rem;
  max-width: 420px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(206, 155, 142, 0.4);
}

.invitation-animation {
  width: 220px;
  height: 220px;
  margin: 0 auto 1rem;
}

.invitation-button {
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 999px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.invitation-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(206, 155, 142, 0.35);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
