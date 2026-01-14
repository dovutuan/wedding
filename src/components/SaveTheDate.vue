<script setup>
import {computed, defineComponent} from 'vue';
import {parse} from 'date-fns';

import {FORMAT_DATE, WEDDING_DATE, WEEK_DAYS} from '@/constants/constant';

defineComponent({name: 'SaveTheDateComponent'});

const weddingDate = parse(WEDDING_DATE, FORMAT_DATE, new Date())

const year = weddingDate.getFullYear()
const month = weddingDate.getMonth()

const totalDays = computed(() => new Date(year, month + 1, 0).getDate())
const startOffset = computed(() => {
  const day = new Date(year, month, 1).getDay()
  return day === 0 ? 6 : day - 1
})

const isWeddingDay = (day) => {
  return (day === weddingDate.getDate() || (day === weddingDate.getDate() - 1))
}

</script>


<template>
  <!--  <section class="py-10 bg-[#f7f1e8]">-->
  <!--    <div class="max-w-sm mx-auto text-center px-6 text-gray-800">-->

  <!--      &lt;!&ndash; Header &ndash;&gt;-->
  <!--      <p class="text-sm tracking-wide mb-2">-->
  <!--        Trân trọng mời Bạn-->
  <!--      </p>-->

  <!--      <h2 class="font-great-vibes text-3xl text-blue-600 mb-6">-->
  <!--        Dự Lễ Vu Quy-->
  <!--      </h2>-->

  <!--      &lt;!&ndash; Time &ndash;&gt;-->
  <!--      <p class="uppercase tracking-widest text-sm mb-3">-->
  <!--        Vào 08:00, Thứ Bảy-->
  <!--      </p>-->

  <!--      &lt;!&ndash; Date &ndash;&gt;-->
  <!--      <div class="flex items-center justify-center gap-4 my-4">-->
  <!--        <div class="text-sm tracking-widest border-t border-b border-dotted py-1">-->
  <!--          Tháng 02-->
  <!--        </div>-->

  <!--        <div class="text-5xl font-bold text-blue-600 leading-none">-->
  <!--          28-->
  <!--        </div>-->

  <!--        <div class="text-sm tracking-widest border-t border-b border-dotted py-1">-->
  <!--          Năm 2026-->
  <!--        </div>-->
  <!--      </div>-->

  <!--      <p class="text-xs italic mb-4">-->
  <!--        (Tức ngày 8 tháng 12 năm Ất Tỵ)-->
  <!--      </p>-->

  <!--      &lt;!&ndash; Location &ndash;&gt;-->
  <!--      <p class="uppercase text-blue-600 font-medium tracking-wide">-->
  <!--        Tư Gia Nhà Gái-->
  <!--      </p>-->
  <!--      <p class="text-sm mb-4">-->
  <!--        Hà Nội-->
  <!--      </p>-->

  <!--      <span-->
  <!--          class="inline-block bg-blue-600 text-white text-xs px-4 py-1 rounded-full mb-8">-->
  <!--      Chỉ đường-->
  <!--    </span>-->

  <!--      &lt;!&ndash; Divider &ndash;&gt;-->
  <!--      <div class="border-t border-dashed my-8"></div>-->

  <!--      &lt;!&ndash; Second Event &ndash;&gt;-->
  <!--      <h3 class="font-great-vibes text-2xl text-blue-600 mb-4">-->
  <!--        Dự Bữa Tiệc Thân Mật-->
  <!--      </h3>-->

  <!--      <p class="uppercase tracking-widest text-sm mb-3">-->
  <!--        Vào 17:30, Thứ Bảy-->
  <!--      </p>-->

  <!--      <div class="flex items-center justify-center gap-4 my-4">-->
  <!--        <div class="text-sm tracking-widest border-t border-b border-dotted py-1">-->
  <!--          Tháng 02-->
  <!--        </div>-->

  <!--        <div class="text-5xl font-bold text-blue-600 leading-none">-->
  <!--          28-->
  <!--        </div>-->

  <!--        <div class="text-sm tracking-widest border-t border-b border-dotted py-1">-->
  <!--          Năm 2026-->
  <!--        </div>-->
  <!--      </div>-->

  <!--      <p class="text-xs italic">-->
  <!--        (Tức ngày 8 tháng 12 năm Ất Tỵ)-->
  <!--      </p>-->

  <!--    </div>-->
  <!--  </section>-->

  <!--  <section class="py-6">-->
  <!--    <div class="container mx-auto px-6 max-w-md text-center">-->
  <!--      <h2 class="font-great-vibes text-4xl md:text-5xl text-primary mb-4 font-bold tracking-widest">Save the Date</h2>-->
  <!--      <div class="w-40 h-px bg-primary mx-auto mb-6"></div>-->
  <!--      <p class="max-w-2xl mx-auto">Trân trọng mời Bạn</p>-->


  <!--      <div class="bg-secondary rounded-xl shadow p-3">-->
  <!--        <div class="text-2xl font-semibold mb-3">-->
  <!--          {{ format(weddingDate, FORMAT_WEDDING_DATE, {locale: vi}) }}-->
  <!--          <br>-->
  <!--          <span class="text-gray-500 text-lg">{{ WEDDING_TIME }} </span>-->
  <!--          <br>-->
  <!--          <span class="text-gray-500 text-lg">{{ SHORT_ADDRESS }}</span>-->
  <!--        </div>-->
  <!--        <div class="grid grid-cols-7 text-xs font-semibold mb-2">-->
  <!--          <div v-for="d in WEEK_DAYS" :key="d">{{ d }}</div>-->
  <!--        </div>-->

  <!--        <div class="grid grid-cols-7 gap-1">-->
  <!--          <div v-for="n in startOffset" :key="'e'+n"></div>-->
  <!--          <div v-for="day in totalDays"-->
  <!--               :key="day"-->
  <!--               class="h-10 flex items-center justify-center relative rounded"-->
  <!--               :class="isWeddingDay(day) && 'bg-primary/10'">-->
  <!--            <span-->
  <!--                :class="isWeddingDay(day) && 'font-bold text-red-500 border border-red-500 rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center'">{{-->
  <!--                day-->
  <!--              }}</span>-->

  <!--            <svg v-if="isWeddingDay(day)"-->
  <!--                 class="absolute -top-1 -right-1 w-4 h-4 text-primary"-->
  <!--                 viewBox="0 0 24 24"-->
  <!--                 fill="red">-->
  <!--              <path-->
  <!--                  d="M12 21s-7.5-4.35-10-8.5C-0.5 7.5 3 3 7.5 5.5 9.24 6.46 12 9 12 9s2.76-2.54 4.5-3.5C21 3 24.5 7.5 22 12.5 19.5 16.65 12 21 12 21z"/>-->
  <!--            </svg>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </section>-->

  <section id="save-the-date" class="py-6 text-center">
    <h2 class="font-great-vibes text-4xl md:text-5xl text-primary mb-4 font-bold tracking-widest">Save the Date</h2>
    <div class="w-40 h-px bg-primary mx-auto mb-6"></div>
    <p class="max-w-2xl mx-auto">Trân trọng mời Bạn</p>
    <div class="py-6 bg-secondary">
      <div class="container mx-auto max-w-5xl text-center">

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">

          <div class="rounded-xl p-4">
            <h2 class="font-great-vibes tracking-widest text-3xl text-black font-bold mb-4">Lễ Vu Quy</h2>
            <p class="uppercase tracking-widest mb-2">Vào 08:00, Thứ Bảy</p>
            <div class="flex items-center justify-center gap-4 my-4">
              <span class="py-1">Tháng 02</span>
              <span class="text-5xl font-bold text-black font-bold">28</span>
              <span class="py-1">Năm 2026</span>
            </div>
            <p class="text-xs italic mb-3">(Tức ngày 8 tháng 12 năm Ất Tỵ)</p>

            <p class="uppercase text-black font-medium">Tư Gia Nhà Gái</p>
            <p class="">Hà Nội</p>
          </div>

          <div class="rounded-xl p-4">
            <div class="grid grid-cols-7 text-xs font-semibold mb-2">
              <div v-for="d in WEEK_DAYS" :key="d">{{ d }}</div>
            </div>

            <div class="grid grid-cols-7 gap-1">
              <div v-for="n in startOffset" :key="'e'+n"></div>
              <div v-for="day in totalDays"
                   :key="day"
                   class="h-8 flex items-center justify-center relative rounded"
                   :class="isWeddingDay(day) && 'bg-primary/10'">
            <span
                :class="isWeddingDay(day) && 'font-bold text-red-500 border border-red-500 rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center'">{{
                day
              }}</span>

                <svg v-if="isWeddingDay(day)" class="absolute -top-2 -right-2 w-4 h-4" viewBox="0 0 24 24" fill="red">
                  <path d="M12 21s-7.5-4.35-10-8.5C-0.5 7.5 3 3 7.5 5.5 9.24 6.46 12 9 12 9s2.76-2.54 4.5-3.5C21 3 24.5 7.5 22 12.5 19.5 16.65 12 21 12 21z"/>
                </svg>
              </div>
            </div>
          </div>

          <div class="rounded-xl p-4">
            <h2 class="font-great-vibes tracking-widest text-3xl text-black font-bold mb-4">Lễ Thành Hôn</h2>
            <p class="uppercase tracking-widest  mb-2">Vào 08:00, Thứ Bảy</p>
            <div class="flex items-center justify-center gap-4 my-4">
              <span class="py-1">Tháng 02</span>
              <span class="text-5xl font-bold text-black">28</span>
              <span class="py-1">Năm 2026</span>
            </div>
            <p class="text-xs italic mb-3">(Tức ngày 8 tháng 12 năm Ất Tỵ)</p>

            <p class="uppercase text-black font-medium">Tư Gia Nhà Trai</p>
            <p class="">Hà Nội</p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
