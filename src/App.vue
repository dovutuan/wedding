<template>
  <!-- Hero Section -->
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 hero-overlay z-0"></div>
    <div class="absolute inset-0 z-0">
      <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Couple"
          class="w-full h-full object-cover object-center">
    </div>

    <div class="relative z-10 text-center px-6 text-white">
      <p class="font-playfair tracking-widest mb-4 animate__animated animate__fadeIn">Chúng tôi sắp</p>
      <h1 class="font-great-vibes text-6xl md:text-8xl lg:text-9xl mb-8 animate__animated animate__fadeIn animate__delay-1s">
        Kết Hôn</h1>

      <div class="flex items-center justify-center space-x-6 mb-12 animate__animated animate__fadeIn animate__delay-2s">
        <div class="text-center">
          <p class="font-playfair text-sm uppercase tracking-widest">Cô Dâu</p>
          <h3 class="text-2xl font-light">Ngọc Lan</h3>
        </div>

        <div class="text-4xl text-primary font-thin">&</div>

        <div class="text-center">
          <p class="font-playfair text-sm uppercase tracking-widest">Chú Rể</p>
          <h3 class="text-2xl font-light">Văn Minh</h3>
        </div>
      </div>

      <!-- Countdown Timer -->
      <div class="flex justify-center mb-8 animate__animated animate__fadeIn animate__delay-3s">
        <div class="grid grid-cols-4 gap-2 md:gap-4">
          <div class="countdown-box text-center">
            <div class="countdown-item bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 md:p-4">
              <div id="days" class="countdown-number text-2xl md:text-4xl font-bold">00</div>
              <div class="countdown-label text-xs md:text-sm">Ngày</div>
            </div>
          </div>
          <div class="countdown-box text-center">
            <div class="countdown-item bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 md:p-4">
              <div id="hours" class="countdown-number text-2xl md:text-4xl font-bold">00</div>
              <div class="countdown-label text-xs md:text-sm">Giờ</div>
            </div>
          </div>
          <div class="countdown-box text-center">
            <div class="countdown-item bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 md:p-4">
              <div id="minutes" class="countdown-number text-2xl md:text-4xl font-bold">00</div>
              <div class="countdown-label text-xs md:text-sm">Phút</div>
            </div>
          </div>
          <div class="countdown-box text-center">
            <div class="countdown-item bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 md:p-4">
              <div id="seconds" class="countdown-number text-2xl md:text-4xl font-bold">00</div>
              <div class="countdown-label text-xs md:text-sm">Giây</div>
            </div>
          </div>
        </div>
      </div>

      <div class="animate__animated animate__fadeIn animate__delay-4s">
        <p class="font-playfair text-xl mb-2">17 . 10 . 2025</p>
        <p class="text-sm uppercase tracking-widest">Sài Gòn, Việt Nam</p>
      </div>

      <div
          class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate__animated animate__fadeIn animate__delay-5s hidden md:block">
        <div class="scroll-indicator"></div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-20"></div>
  </section>

  <!-- Save the Date -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="font-great-vibes text-4xl md:text-5xl text-primary mb-4">Save the Date</h2>
        <div class="w-20 h-px bg-primary mx-auto mb-6"></div>
        <p class="max-w-2xl mx-auto">Chúng tôi trân trọng kính mời bạn đến dự lễ thành hôn của chúng tôi vào ngày 17
          tháng 10 năm 2025</p>
      </div>

      <div class="flex justify-center" data-aos="fade-up" data-aos-delay="200">
        <div class="bg-secondary p-8 rounded-lg shadow-lg text-center max-w-md">
          <div class="text-6xl font-playfair text-primary mb-4">17</div>
          <div class="text-xl uppercase tracking-widest mb-2">Tháng Mười</div>
          <div class="text-2xl mb-6">2025</div>
          <div class="w-20 h-px bg-primary mx-auto mb-6"></div>
          <p class="mb-6">Nhà thờ Đức Bà Sài Gòn<br>11:00 sáng</p>
          <a href="#rsvp"
             class="inline-block border border-primary text-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition duration-300">Xác
            nhận tham dự</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Story -->
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="font-great-vibes text-4xl md:text-5xl text-primary mb-4">Câu Chuyện Của Chúng Tôi</h2>
        <div class="w-20 h-px bg-primary mx-auto mb-6"></div>
      </div>

      <div class="max-w-4xl mx-auto">
        <!-- Timeline item 1 -->
        <div class="relative timeline-item pb-16" data-aos="fade-up">
          <div
              class="timeline-date absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full border border-primary text-primary font-medium z-10 md:left-0 md:translate-x-0">
            2018
          </div>
          <div class="timeline-content bg-white p-8 rounded-lg shadow-md md:ml-16">
            <h3 class="text-xl font-playfair mb-4">Lần Đầu Gặp Gỡ</h3>
            <p>Chúng tôi gặp nhau lần đầu tại một quán cà phê nhỏ ở Sài Gòn. Ngay từ cái nhìn đầu tiên, cả hai đều cảm
              nhận được sự kết nối đặc biệt.</p>
          </div>
        </div>

        <!-- Timeline item 2 -->
        <div class="relative timeline-item pb-16" data-aos="fade-up" data-aos-delay="100">
          <div
              class="timeline-date absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full border border-primary text-primary font-medium z-10 md:left-0 md:translate-x-0">
            2020
          </div>
          <div class="timeline-content bg-white p-8 rounded-lg shadow-md md:ml-16">
            <h3 class="text-xl font-playfair mb-4">Chính Thức Hẹn Hò</h3>
            <p>Sau hai năm làm bạn, chúng tôi quyết định trở thành một cặp đôi. Mọi khoảnh khắc bên nhau đều trở nên đặc
              biệt và ý nghĩa.</p>
          </div>
        </div>

        <!-- Timeline item 3 -->
        <div class="relative timeline-item" data-aos="fade-up" data-aos-delay="200">
          <div
              class="timeline-date absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full border border-primary text-primary font-medium z-10 md:left-0 md:translate-x-0">
            2024
          </div>
          <div class="timeline-content bg-white p-8 rounded-lg shadow-md md:ml-16">
            <h3 class="text-xl font-playfair mb-4">Lời Cầu Hôn</h3>
            <p>Dưới ánh hoàng hôn tại bãi biển Nha Trang, Minh đã quỳ xuống và ngỏ lời cầu hôn Lan. Đó là khoảnh khắc
              không thể nào quên trong cuộc đời chúng tôi.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Wedding Details -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="font-great-vibes text-4xl md:text-5xl text-primary mb-4">Thông Tin Lễ Cưới</h2>
        <div class="w-20 h-px bg-primary mx-auto mb-6"></div>
        <p class="max-w-2xl mx-auto">Chúng tôi rất hân hạnh được chào đón bạn đến dự lễ cưới của chúng tôi</p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <!-- Ceremony -->
        <div class="bg-gray-50 p-8 rounded-lg shadow-sm" data-aos="fade-up">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="font-playfair text-2xl mb-2">Lễ Thành Hôn</h3>
            <p class="text-primary">11:00 sáng, 17/10/2025</p>
          </div>

          <div class="text-center">
            <h4 class="font-medium mb-2">Nhà thờ Đức Bà Sài Gòn</h4>
            <p class="text-gray-600 mb-4">01 Công xã Paris, Bến Nghé, Quận 1, TP.HCM</p>

            <!-- Map for Bride's family -->
            <div class="map-container mb-4">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.319359355093!2d106.6991761152608!3d10.779839992316496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f46fb8e6b3d%3A0x1bb5e1f4df101014!2zTmhDIFRo4buDIEPhuqd1IE3hu4FtIChE4buLY2ggQmnDqm4p!5e0!3m2!1svi!2s!4v1620000000000!5m2!1svi!2s"
                  allowfullscreen="" loading="lazy"></iframe>
            </div>

            <a href="https://goo.gl/maps/example" target="_blank"
               class="text-primary hover:underline inline-flex items-center">
              Xem bản đồ
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Reception -->
        <div class="bg-gray-50 p-8 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="100">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 class="font-playfair text-2xl mb-2">Tiệc Cưới</h3>
            <p class="text-primary">12:30 trưa, 17/10/2025</p>
          </div>

          <div class="text-center">
            <h4 class="font-medium mb-2">Khách sạn Rex Sài Gòn</h4>
            <p class="text-gray-600 mb-4">141 Nguyễn Huệ, Bến Nghé, Quận 1, TP.HCM</p>

            <!-- Map for Groom's family -->
            <div class="map-container mb-4">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.319359355093!2d106.6991761152608!3d10.779839992316496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f46fb8e6b3d%3A0x1bb5e1f4df101014!2zTmhDIFRo4buDIEPhuqd1IE3hu4FtIChE4buLY2ggQmnDqm4p!5e0!3m2!1svi!2s!4v1620000000000!5m2!1svi!2s"
                  allowfullscreen="" loading="lazy"></iframe>
            </div>

            <a href="https://goo.gl/maps/example" target="_blank"
               class="text-primary hover:underline inline-flex items-center">
              Xem bản đồ
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery -->
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="font-great-vibes text-4xl md:text-5xl text-primary mb-4">Khoảnh Khắc Đẹp</h2>
        <div class="w-20 h-px bg-primary mx-auto mb-6"></div>
        <p class="max-w-2xl mx-auto">Những khoảnh khắc đáng nhớ trong hành trình yêu nhau của chúng tôi</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="gallery-item overflow-hidden rounded-lg" data-aos="fade-up">
          <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Gallery 1"
              class="w-full h-64 object-cover">
        </div>
        <div class="gallery-item overflow-hidden rounded-lg" data-aos="fade-up" data-aos-delay="100">
          <img
              src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Gallery 2"
              class="w-full h-64 object-cover">
        </div>
        <div class="gallery-item overflow-hidden rounded-lg" data-aos="fade-up" data-aos-delay="200">
          <img
              src="https://images.unsplash.com/photo-1518131672697-613becd4fab5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Gallery 3"
              class="w-full h-64 object-cover">
        </div>
        <div class="gallery-item overflow-hidden rounded-lg" data-aos="fade-up">
          <img
              src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Gallery 4"
              class="w-full h-64 object-cover">
        </div>
        <div class="gallery-item overflow-hidden rounded-lg" data-aos="fade-up" data-aos-delay="100">
          <img
              src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Gallery 5"
              class="w-full h-64 object-cover">
        </div>
        <div class="gallery-item overflow-hidden rounded-lg" data-aos="fade-up" data-aos-delay="200">
          <img
              src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Gallery 6"
              class="w-full h-64 object-cover">
        </div>
      </div>
    </div>
  </section>

  <!-- RSVP -->
<!--  <section id="rsvp" class="py-20 bg-primary text-white">-->
<!--    <div class="container mx-auto px-6">-->
<!--      <div class="text-center mb-16" data-aos="fade-up">-->
<!--        <h2 class="font-great-vibes text-4xl md:text-5xl mb-4">Bạn Sẽ Tham Dự Chứ?</h2>-->
<!--        <div class="w-20 h-px bg-white mx-auto mb-6"></div>-->
<!--        <p class="max-w-2xl mx-auto">Vui lòng phản hồi trước ngày 01/10/2025</p>-->
<!--      </div>-->

<!--      <div class="max-w-2xl mx-auto bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden" data-aos="fade-up">-->
<!--        <form class="p-8">-->
<!--          <div class="grid md:grid-cols-2 gap-6 mb-8">-->
<!--            <div>-->
<!--              <label for="name" class="block text-sm font-medium mb-2">Họ và tên</label>-->
<!--              <input type="text" id="name"-->
<!--                     class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">-->
<!--            </div>-->
<!--            <div>-->
<!--              <label for="email" class="block text-sm font-medium mb-2">Email</label>-->
<!--              <input type="email" id="email"-->
<!--                     class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">-->
<!--            </div>-->
<!--            <div>-->
<!--              <label for="guests" class="block text-sm font-medium mb-2">Số lượng khách</label>-->
<!--              <select id="guests"-->
<!--                      class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">-->
<!--                <option value="1">1 người</option>-->
<!--                <option value="2">2 người</option>-->
<!--                <option value="3">3 người</option>-->
<!--                <option value="4">4 người</option>-->
<!--              </select>-->
<!--            </div>-->
<!--            <div>-->
<!--              <label for="attending" class="block text-sm font-medium mb-2">Bạn sẽ tham dự?</label>-->
<!--              <select id="attending"-->
<!--                      class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">-->
<!--                <option value="yes">Có, tôi sẽ đến</option>-->
<!--                <option value="no">Xin lỗi, tôi không thể đến</option>-->
<!--              </select>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="mb-8">-->
<!--            <label for="message" class="block text-sm font-medium mb-2">Lời nhắn (nếu có)</label>-->
<!--            <textarea id="message" rows="4"-->
<!--                      class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></textarea>-->
<!--          </div>-->

<!--          <div class="text-center">-->
<!--            <button type="submit"-->
<!--                    class="bg-primary text-white px-8 py-3 rounded-full border-2 border-white hover:bg-white hover:text-primary transition duration-300">-->
<!--              Gửi phản hồi-->
<!--            </button>-->
<!--          </div>-->
<!--        </form>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->

  <!-- Footer -->
  <footer class="py-12 bg-gray-900 text-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-8">
        <h2 class="font-great-vibes text-3xl md:text-4xl mb-4">Lan & Minh</h2>
        <div class="w-20 h-px bg-primary mx-auto mb-6"></div>
        <p class="max-w-2xl mx-auto">17 . 10 . 2025</p>
      </div>

      <div class="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
        <a href="#" class="hover:text-primary transition duration-300">Trang chủ</a>
        <a href="#" class="hover:text-primary transition duration-300">Câu chuyện</a>
        <a href="#" class="hover:text-primary transition duration-300">Thông tin</a>
        <a href="#" class="hover:text-primary transition duration-300">Gallery</a>
        <a href="#" class="hover:text-primary transition duration-300">RSVP</a>
      </div>

      <div class="text-center text-sm text-gray-400">
        <p>© 2025 Đám cưới Lan & Minh. Thiết kế với ❤️</p>
      </div>
    </div>
  </footer>

  <!-- Floating elements -->
  <div class="fixed top-1/4 left-10 w-8 h-8 bg-primary rounded-full opacity-20 floating hidden md:block"
       style="animation-delay: 0s;"></div>
  <div class="fixed top-1/3 right-20 w-12 h-12 bg-secondary rounded-full opacity-20 floating hidden md:block"
       style="animation-delay: 1s;"></div>
  <div class="fixed bottom-1/4 left-1/4 w-6 h-6 bg-primary rounded-full opacity-20 floating hidden md:block"
       style="animation-delay: 2s;"></div>
  <div class="fixed bottom-1/3 right-1/3 w-10 h-10 bg-secondary rounded-full opacity-20 floating hidden md:block"
       style="animation-delay: 3s;"></div>
</template>

<style src="@/assets/style.css">
</style>
