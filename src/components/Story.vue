<script setup>
import {defineComponent} from 'vue';

defineComponent({name: 'StoryComponent'});
</script>

<template>
  <section id="story" class="my-16">
    <div class="text-center mb-8" data-aos="fade-up">
      <h2 class="font-great-vibes text-4xl md:text-5xl text-primary mb-5 font-bold tracking-widest">Câu Chuyện Của Chúng
        Tôi</h2>
      <div class="w-40 h-px bg-primary mx-auto"></div>
    </div>

    <div class="max-w-4xl mx-auto">
      <!-- Timeline item 1 -->
      <div class="relative timeline-item pb-10" data-aos="fade-right">
        <div
            class="timeline-date absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-4 py-2 rounded-full border border-primary text-primary font-medium z-10 md:left-0 md:translate-x-0 hover:scale-110 hover:bg-primary transition-all duration-300 cursor-pointer">
          2015
        </div>
        <div class="timeline-content bg-gray-50 p-6 rounded-lg shadow-md md:ml-16 card-hover">
          <h3 class="text-xl font-playfair mb-4">Lần Đầu Gặp Gỡ</h3>
          <p class="italic">Chúng tôi gặp nhau lần đầu trong một lớp học thời cấp ba. Nơi ấy, từ một cuộc gặp gỡ không
            hẹn trước, đã lặng lẽ mở ra khởi đầu cho một câu chuyện dường như được định sẵn.</p>
        </div>
      </div>

      <!-- Timeline item 2 -->
      <div class="relative timeline-item pb-10" data-aos="fade-left" data-aos-delay="100">
        <div
            class="timeline-date absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-4 py-2 rounded-full border border-primary text-primary font-medium z-10 md:left-0 md:translate-x-0 hover:scale-110 hover:bg-primary transition-all duration-300 cursor-pointer">
          2017
        </div>
        <div class="timeline-content bg-gray-50 p-6 rounded-lg shadow-md md:ml-16 card-hover">
          <h3 class="text-xl font-playfair mb-4">Chính Thức Hẹn Hò</h3>
          <p class="italic">Năm 2017, khi còn là sinh viên đại học, chúng tôi chính thức hẹn hò. Từ những cuộc trò
            chuyện giản đơn, cả hai quyết định bước vào một chặng đường mới cùng nhau — một tình yêu bình dị, trong trẻo
            và đẹp nhất của thanh xuân.</p>
        </div>
      </div>

      <!-- Timeline item 3 -->
      <div class="relative timeline-item" data-aos="fade-right" data-aos-delay="200">
        <div
            class="timeline-date absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-4 py-2 rounded-full border border-primary text-primary font-medium z-10 md:left-0 md:translate-x-0 hover:scale-110 hover:bg-primary transition-all duration-300 cursor-pointer">
          2026
        </div>
        <div class="timeline-content bg-gray-50 p-6 rounded-lg shadow-md md:ml-16 card-hover">
          <h3 class="text-xl font-playfair mb-4">Lễ Thành Hôn</h3>
          <p class="italic">Lễ thành hôn đánh dấu khoảnh khắc chúng tôi chính thức về chung một nhà. Từ tình yêu của
            thanh xuân, hôm nay chúng tôi cùng nhau bước sang một chương mới — chương của gia đình, yêu thương và gắn bó
            trọn đời.</p>
        </div>
      </div>
    </div>
  </section>
</template>