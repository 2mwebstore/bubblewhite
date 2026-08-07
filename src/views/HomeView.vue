<template>
  <div>
    <!-- Hero -->
    <section class="max-w-7xl mx-auto px-6 pt-10 md:pt-16 pb-16">
      <div class="w-full card-surface overflow-hidden relative hero-swiper">
        <Swiper
          :modules="[Autoplay, Pagination]"
          :loop="heroSlides.length > 1"
          :autoplay="{ delay: 4500, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          class="w-full h-auto"
        >
          <SwiperSlide v-for="(slide, i) in heroSlides" :key="i">
            <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <!-- Category strip -->
    <section class="max-w-7xl mx-auto px-6 py-8 border-y border-line">
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-6">
        <RouterLink v-for="(cat, i) in categories" :key="cat.id" :to="`/shop?category=${cat.slug}`" class="flex items-center gap-3 group" data-aos="fade-up" :data-aos-delay="i * 80">
          <div class="w-14 h-14 rounded-full bg-cream-dark overflow-hidden shrink-0 group-hover:ring-2 group-hover:ring-ink transition-all">
            <img :src="cat.image" :alt="cat.name" class="w-full h-full object-cover" style="object-position: 50% 35%" loading="lazy" />
          </div>
          <div>
            <p class="text-sm font-semibold">{{ cat.name }}</p>
            <span class="text-xs text-rust inline-flex items-center gap-1">ទិញឥឡូវ →</span>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- Best selling -->
    <section class="max-w-7xl mx-auto px-6 py-16">
      <div class="flex items-end justify-between mb-8" data-aos="fade-up">
        <h2 class="font-sans font-bold text-2xl">លក់ដាច់ជាងគេ</h2>
        <RouterLink to="/shop" class="text-sm font-medium text-rust hover:underline">មើលទាំងអស់ →</RouterLink>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div v-for="(p, i) in bestSelling" :key="p.id" data-aos="fade-up" :data-aos-delay="(i % 5) * 80">
          <ProductCard :product="p" />
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="bg-cream-dark border-y border-line">
      <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="(f, i) in features" :key="f.title" class="flex items-center gap-3" data-aos="fade-up" :data-aos-delay="i * 100">
          <div class="w-10 h-10 rounded-full bg-cream flex items-center justify-center shrink-0">
            <component :is="f.icon" :size="18" :stroke-width="1.6" />
          </div>
          <div>
            <p class="text-sm font-semibold">{{ f.title }}</p>
            <p class="text-xs text-muted">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="relative overflow-hidden bg-cream">
      <div class="mx-auto grid max-w-[1500px] items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-[.7fr_1.6fr_.7fr] lg:px-10">
        <img class="hidden h-36 w-full rounded-2xl object-cover md:block" src="https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&amp;fit=crop&amp;w=700&amp;q=80" data-aos="fade-right">
        <div class="text-center" data-aos="zoom-in">
          <h2 class="text-2xl font-semibold">ចូលរួម Bubble White Club</h2>
          <p class="mt-2 text-sm text-black/55">ទទួលបានការបញ្ចុះតម្លៃ ១០% លើការបញ្ជាទិញដំបូង និងព័ត៌មានផលិតផលថ្មីៗ។</p>
          <form id="newsletter" class="mx-auto mt-5 flex max-w-xl flex-col gap-2 sm:flex-row" @submit.prevent="subscribe">
            <input  id="newsletter-email" required v-model="email" type="email" placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក" class="input-field">
            <button class="h-12 rounded-md bg-black px-8 text-sm font-medium text-white">ជាវឥឡូវ</button>
          </form>
          <p v-if="subscribed" id="subMsg" class="mt-3 text-sm text-rust">សូមអរគុណសម្រាប់ការជាវ!</p>
        </div>
        <img class="hidden h-36 w-full rounded-2xl object-cover md:block" src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&amp;fit=crop&amp;w=700&amp;q=80" data-aos="fade-left">
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Truck, RotateCcw, ShieldCheck, Headset } from 'lucide-vue-next'
import ProductCard from '../components/ProductCard.vue'
import { products, categories } from '../data/products'
import { useSeo, SITE_URL } from '../composables/useSeo'

useSeo({
  title: 'សម្លៀកបំពាក់សាមញ្ញ សុខស្រួលអតិបរមា',
  description: 'ទិញទំនិញ Bubble White — សម្លៀកបំពាក់ប្រចាំថ្ងៃដ៏សាមញ្ញ និងសុខស្រួល ផលិតនៅភ្នំពេញ។ អាវយឺត អាវហ៊ូឌី និងគ្រឿងបន្លាស់ រចនាឡើងសម្រាប់ភាពសាមញ្ញ និងទំនុកចិត្ត។',
  path: '/',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: 'Bubble White',
    url: SITE_URL,
    address: { '@type': 'PostalAddress', addressLocality: 'Phnom Penh', addressCountry: 'KH' },
  },
})

const heroSlides = [
  { image: '/banners/home-banner-1.png', alt: 'Bubble White — Minimal style, maximum comfort' },
  { image: '/banners/home-banner-2.png', alt: 'Bubble White new collection' },
]
// Add or remove entries above to change the number of slides — Swiper loops automatically once there are 2+.

const bestSelling = computed(() => products.slice(0, 10))

const features = [
  { title: 'ដឹកជញ្ជូនឥតគិតថ្លៃ', desc: 'លើការបញ្ជាទិញលើសពី $50', icon: Truck },
  { title: 'ងាយស្រួលប្តូរ', desc: 'ក្នុងរយៈពេល ៣០ ថ្ងៃ', icon: RotateCcw },
  { title: 'ការទូទាត់សុវត្ថិភាព', desc: 'សុវត្ថិភាព ១០០%', icon: ShieldCheck },
  { title: 'ជំនួយ ២៤/៧', desc: 'យើងនៅទីនេះដើម្បីជួយ', icon: Headset },
]

const email = ref('')
const subscribed = ref(false)
function subscribe() {
  if (!email.value) return
  subscribed.value = true
  email.value = ''
}
</script>

<style scoped>
.animate-fadein { animation: fadein 0.6s ease both; }
@keyframes fadein { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }

.hero-swiper :deep(.swiper-pagination-bullet) {
  background: #fff;
  opacity: 0.6;
  width: 7px;
  height: 7px;
}
.hero-swiper :deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  background: #121110;
}
</style>
