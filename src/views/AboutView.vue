<template>
  <div>
    <section class="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      <div data-aos="fade-right">
        <p class="section-label mb-2">About Us</p>
        <h1 class="font-sans font-bold text-4xl mb-5 leading-tight">Simple. Clean.<br />Always You.</h1>
        <p class="text-muted leading-relaxed mb-4">
          Bubble White was born from a simple idea: clothes that make you feel confident, comfortable, and you.
        </p>
        <p class="text-muted leading-relaxed mb-6">
          We believe minimal style is more than fashion. It\u2019s a lifestyle. Our pieces are designed to fit your everyday — easy to wear, easy to love.
        </p>
        <RouterLink to="/shop" class="btn-primary">Our Story →</RouterLink>
      </div>
      <div class="aspect-[4/3] card-surface overflow-hidden" data-aos="fade-left">
        <img src="/banners/about-hero.png" alt="Bubble White founders wearing the brand's oversized tees" class="w-full h-full object-cover" style="object-position: 50% 20%" />
      </div>
    </section>

    <section class="bg-cream-dark border-y border-line">
      <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="(v, i) in values" :key="v.title" class="flex items-center gap-3" data-aos="fade-up" :data-aos-delay="i * 100">
          <div class="w-10 h-10 rounded-full bg-cream flex items-center justify-center shrink-0">
            <component :is="v.icon" :size="18" :stroke-width="1.6" />
          </div>
          <div>
            <p class="text-sm font-semibold mb-1">{{ v.title }}</p>
            <p class="text-xs text-muted leading-relaxed">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
      <div data-aos="fade-right">
        <h2 class="font-sans font-bold text-2xl mb-4">Our Story</h2>
        <p class="text-muted leading-relaxed mb-3">Bubble White started in Phnom Penh, Cambodia in 2024.</p>
        <p class="text-muted leading-relaxed mb-3">We wanted to create a brand that focuses on simplicity, quality and affordability.</p>
        <p class="text-muted leading-relaxed mb-3">From the fabric we choose to the way we pack your order, we pay attention to every detail.</p>
        <p class="text-muted italic mt-6">— Bubble White Team</p>
      </div>
      <div class="grid grid-cols-2 gap-4" data-aos="fade-left">
        <div class="aspect-square card-surface overflow-hidden"><img src="/banners/story-rack.png" alt="Rack of folded Bubble White garments" class="w-full h-full object-cover" /></div>
        <div class="aspect-square card-surface overflow-hidden"><img src="/banners/story-box.png" alt="Bubble White order neatly packed in a box" class="w-full h-full object-cover" /></div>
      </div>
    </section>

    <section class="max-w-5xl mx-auto px-6 pb-20">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="(s, i) in stats" :key="s.label" data-aos="zoom-in" :data-aos-delay="i * 100">
          <p class="font-sans font-bold text-3xl mb-1">{{ s.value }}</p>
          <p class="text-xs text-muted">{{ s.label }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { Leaf, Shirt, Gem, HeartHandshake } from 'lucide-vue-next'
import { useSeo } from '../composables/useSeo'

useSeo({
  title: 'About Us',
  description: 'Bubble White started in Phnom Penh, Cambodia in 2024, focused on simple, comfortable and affordable everyday clothing.',
  path: '/about',
})

const values = [
  { title: 'Sustainable Materials', desc: 'We use eco-friendly fabrics and responsible production.', icon: Leaf },
  { title: 'Comfort First', desc: 'Every piece is made for all-day comfort.', icon: Shirt },
  { title: 'Timeless Design', desc: 'Minimal, versatile and made to last.', icon: Gem },
  { title: 'Made with Care', desc: 'We care about the details so you can feel the difference.', icon: HeartHandshake },
]

const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '50+', label: 'Products' },
  { value: '2', label: 'Years of Growth' },
  { value: '98%', label: 'Positive Reviews' },
]
</script>
