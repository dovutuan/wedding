<script setup>
import {defineComponent} from 'vue';

defineComponent({name: 'StoryComponent'});
</script>

<template>
  <section id="story" class="py-10">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="font-great-vibes text-4xl md:text-5xl text-primary mb-4 font-bold">Câu Chuyện Của Chúng Tôi</h2>
        <div class="w-20 h-px bg-primary mx-auto mb-6"></div>
      </div>

      <div class="max-w-4xl mx-auto">
        <!-- Timeline item 1 -->
        <div class="relative timeline-item pb-16" data-aos="fade-up">
          <div
              class="timeline-date absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-4 py-2 rounded-full border border-primary text-primary font-medium z-10 md:left-0 md:translate-x-0">
            2018
          </div>
          <div class="timeline-content bg-gray-50 p-8 rounded-lg shadow-md md:ml-16">
            <h3 class="text-xl font-playfair mb-4">Lần Đầu Gặp Gỡ</h3>
            <p>Chúng tôi gặp nhau lần đầu tại một quán cà phê nhỏ ở Sài Gòn. Ngay từ cái nhìn đầu tiên, cả hai đều cảm
              nhận được sự kết nối đặc biệt.</p>
          </div>
        </div>

        <!-- Timeline item 2 -->
        <div class="relative timeline-item pb-16" data-aos="fade-up" data-aos-delay="100">
          <div
              class="timeline-date absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-4 py-2 rounded-full border border-primary text-primary font-medium z-10 md:left-0 md:translate-x-0">
            2020
          </div>
          <div class="timeline-content bg-gray-50 p-8 rounded-lg shadow-md md:ml-16">
            <h3 class="text-xl font-playfair mb-4">Chính Thức Hẹn Hò</h3>
            <p>Sau hai năm làm bạn, chúng tôi quyết định trở thành một cặp đôi. Mọi khoảnh khắc bên nhau đều trở nên đặc
              biệt và ý nghĩa.</p>
          </div>
        </div>

        <!-- Timeline item 3 -->
        <div class="relative timeline-item" data-aos="fade-up" data-aos-delay="200">
          <div
              class="timeline-date absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-4 py-2 rounded-full border border-primary text-primary font-medium z-10 md:left-0 md:translate-x-0">
            2024
          </div>
          <div class="timeline-content bg-gray-50 p-8 rounded-lg shadow-md md:ml-16">
            <h3 class="text-xl font-playfair mb-4">Lời Cầu Hôn</h3>
            <p>Dưới ánh hoàng hôn tại bãi biển Nha Trang, Minh đã quỳ xuống và ngỏ lời cầu hôn Lan. Đó là khoảnh khắc
              không thể nào quên trong cuộc đời chúng tôi.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>