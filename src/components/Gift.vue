<script setup>
import {defineComponent, ref} from 'vue';
import {GIFTS} from '@/constants/constant';

defineComponent({name: 'GiftComponent'});

const showToast = ref(false)
const toastMessage = ref('')

const copyAccount = async (number) => {
  await navigator.clipboard.writeText(number)
  toastMessage.value = 'Đã sao chép số tài khoản'
  showToast.value = true

  setTimeout(() => {
    toastMessage.value = null;
    showToast.value = false;
  }, 1500)
}
</script>

<template>
  <section id="gift" class="py-10">
    <div class="container mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-14" data-aos="fade-up">
        <h2 class="font-great-vibes text-4xl md:text-5xl text-primary mb-4 font-bold tracking-widest">
          Gửi quà mừng tới Cô Dâu & Chú Rể
        </h2>
        <div class="w-20 h-px bg-primary mx-auto mb-6"></div>
        <p class="max-w-2xl mx-auto text-gray-600">
          Sự hiện diện của bạn là niềm vinh hạnh lớn nhất. Nếu có thể, bạn có thể gửi quà mừng theo thông tin bên dưới.
        </p>
      </div>

      <!-- Gift cards -->
      <div class="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div
            v-for="(gift, index) in GIFTS"
            :key="index"
            class="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition"
            data-aos="zoom-in"
            :data-aos-delay="index * 150"
        >
          <!-- Icon -->
          <div class="text-center mb-6">
            <div
                class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 transition hover:scale-110"
            >
              <svg class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M20 7h-2.18A3 3 0 0 0 15 3c-1.38 0-2.63.94-3 2.25C11.63 3.94 10.38 3 9 3a3 3 0 0 0-2.82 4H4a1 1 0 0 0-1 1v2h18V8a1 1 0 0 0-1-1z"
                />
                <path
                    d="M3 12v7a2 2 0 0 0 2 2h5v-9H3zm11 0v9h5a2 2 0 0 0 2-2v-7h-7z"
                />
              </svg>
            </div>

            <h3 class="font-playfair text-2xl mb-1">
              {{ gift.TITLE }}
            </h3>
          </div>

          <div class="text-center space-y-2">
            <p><span class="font-medium">Ngân hàng:</span>{{ gift.BANK_NAME }}</p>

            <p class="font-mono text-lg tracking-wide">{{ gift.NUMBER }}</p>

            <button
                class="inline-flex items-center gap-2 mt-3 px-4 py-2 text-sm rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
                @click="copyAccount(gift.NUMBER)">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z"/>
              </svg>
              Sao chép số tài khoản
            </button>
          </div>

          <div class="mt-6 text-center">
            <img :src="gift.IMAGE"
                 :alt="gift.TITLE"
                 class="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain rounded-lg shadow hover:shadow-xl transition"/>
          </div>
        </div>
      </div>
    </div>
  </section>

  <transition enter-active-class="transition ease-out duration-300"
              enter-from-class="opacity-0 translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-300"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0 translate-y-2">
    <div v-if="showToast"
         class="fixed bottom-6 right-6 bg-primary text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-3 z-50">
      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z"/>
      </svg>
      <span>{{ toastMessage }}</span>
    </div>
  </transition>

</template>