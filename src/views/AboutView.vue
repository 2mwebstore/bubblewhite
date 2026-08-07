<template>
  <div>
    <section class="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      <div data-aos="zoom-in-down">
        <p class="section-label mb-2">អំពីយើង</p>
        <h1 class="font-sans font-bold text-4xl mb-5 leading-tight">សាមញ្ញ ស្អាត។<br />តែងតែជាអ្នក។</h1>
        <p class="text-muted leading-relaxed mb-4">
          Bubble White កើតចេញពីគំនិតសាមញ្ញមួយ៖ សម្លៀកបំពាក់ដែលធ្វើឱ្យអ្នកមានទំនុកចិត្ត សុខស្រួល និងជាអ្នកពិតប្រាកដ។
        </p>
        <p class="text-muted leading-relaxed mb-6">
          យើងជឿជាក់ថាម៉ូតសាមញ្ញគឺលើសពីម៉ូតទំនើប វាជារបៀបរស់នៅមួយ។ ផលិតផលរបស់យើងត្រូវបានរចនាឡើងសម្រាប់ជីវិតប្រចាំថ្ងៃរបស់អ្នក — ស្លៀកស្រួល ចូលចិត្តស្រួល។
        </p>
        <RouterLink to="/shop" class="btn-primary">រឿងរ៉ាវរបស់យើង →</RouterLink>
      </div>
      <div class="aspect-[4/3] card-surface overflow-hidden" data-aos="zoom-in-up">
        <img src="/banners/about-hero.png" alt="ស្ថាបនិក Bubble White ស្លៀកអាវយឺតធំរបស់ម៉ាក" class="w-full h-full object-cover" style="object-position: 50% 20%" />
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
      <div data-aos="zoom-in-down">
        <h2 class="font-sans font-bold text-2xl mb-4">រឿងរ៉ាវរបស់យើង</h2>
        <p class="text-muted leading-relaxed mb-3">Bubble White បានចាប់ផ្តើមនៅភ្នំពេញ កម្ពុជា ក្នុងឆ្នាំ ២០២៤។</p>
        <p class="text-muted leading-relaxed mb-3">យើងចង់បង្កើតម៉ាកមួយដែលផ្តោតលើភាពសាមញ្ញ គុណភាព និងតម្លៃសមរម្យ។</p>
        <p class="text-muted leading-relaxed mb-3">ចាប់ពីការជ្រើសរើសក្រណាត់ រហូតដល់របៀបវេចខ្ចប់ការបញ្ជាទិញរបស់អ្នក យើងយកចិត្តទុកដាក់ចំពោះរាល់ព័ត៌មានលម្អិត។</p>
        <p class="text-muted italic mt-6">— ក្រុម Bubble White</p>
      </div>
      <div class="grid grid-cols-2 gap-4" data-aos="zoom-in-up">
        <div class="aspect-square card-surface overflow-hidden"><img src="/banners/story-rack.png" alt="ធ្នើដាក់សម្លៀកបំពាក់ Bubble White" class="w-full h-full object-cover" /></div>
        <div class="aspect-square card-surface overflow-hidden"><img src="/banners/story-box.png" alt="កញ្ចប់ការបញ្ជាទិញ Bubble White" class="w-full h-full object-cover" /></div>
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
  title: 'អំពីយើង',
  description: 'Bubble White បានចាប់ផ្តើមនៅភ្នំពេញ កម្ពុជា ក្នុងឆ្នាំ ២០២៤ ដោយផ្តោតលើសម្លៀកបំពាក់ប្រចាំថ្ងៃដ៏សាមញ្ញ សុខស្រួល និងតម្លៃសមរម្យ។',
  path: '/about',
})

const values = [
  { title: 'សម្ភារៈមិត្តភាពបរិស្ថាន', desc: 'យើងប្រើក្រណាត់មិត្តភាពបរិស្ថាន និងផលិតកម្មទទួលខុសត្រូវ។', icon: Leaf },
  { title: 'សុខស្រួលមុនគេ', desc: 'រាល់ផលិតផលត្រូវបានធ្វើឡើងសម្រាប់ភាពសុខស្រួលពេញមួយថ្ងៃ។', icon: Shirt },
  { title: 'រចនាបថគង់វង្ស', desc: 'សាមញ្ញ ប្រើប្រាស់បានច្រើនបែប និងធន់ទ្រាំ។', icon: Gem },
  { title: 'ធ្វើឡើងដោយយកចិត្តទុកដាក់', desc: 'យើងយកចិត្តទុកដាក់លើព័ត៌មានលម្អិត ដើម្បីអ្នកអាចមានអារម្មណ៍ខុសគ្នា។', icon: HeartHandshake },
]

const stats = [
  { value: '10K+', label: 'អតិថិជនពេញចិត្ត' },
  { value: '50+', label: 'ផលិតផល' },
  { value: '2', label: 'ឆ្នាំនៃការរីកចម្រើន' },
  { value: '98%', label: 'ការវាយតម្លៃវិជ្ជមាន' },
]
</script>
