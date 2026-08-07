<template>
  <div v-if="product" class="max-w-7xl mx-auto px-6 py-12">
    <nav class="text-xs text-muted mb-8" aria-label="Breadcrumb">
      <RouterLink to="/" class="hover:text-ink">ទំព័រដើម</RouterLink> /
      <RouterLink to="/shop" class="hover:text-ink">ទំនិញ</RouterLink> /
      <span class="text-ink">{{ product.name }}</span>
    </nav>

    <div class="grid md:grid-cols-2 gap-12">
      <div data-aos="fade-right">
        <div class="aspect-square card-surface bg-cream-dark flex items-center justify-center overflow-hidden relative group">
          <button
            v-if="activeImage"
            type="button"
            class="w-full h-full cursor-zoom-in"
            aria-label="Open full image preview"
            @click="openLightbox(activeIndex)"
          >
            <img
              :src="activeImage"
              :alt="product.name"
              class="w-full h-full object-cover"
              style="object-position: 65% center"
              width="520"
              height="472"
            />
          </button>
          <ProductGlyph v-else :seed="product.id" class="w-1/2 h-1/2" />
          <div
            v-if="activeImage"
            class="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-ink/70 text-cream flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Expand :size="16" :stroke-width="1.8" />
          </div>
        </div>

        <!-- Thumbnail strip -->
        <div v-if="images.length > 1" class="grid grid-cols-5 gap-3 mt-3">
          <button
            v-for="(img, i) in images"
            :key="img + i"
            type="button"
            class="aspect-square rounded-card overflow-hidden border-2 transition-colors"
            :class="i === activeIndex ? 'border-ink' : 'border-transparent hover:border-line'"
            :aria-label="`Show image ${i + 1} of ${images.length}`"
            @click="activeIndex = i"
          >
            <img :src="img" :alt="`${product.name} thumbnail ${i + 1}`" class="w-full h-full object-cover" style="object-position: 65% center" loading="lazy" />
          </button>
        </div>
      </div>

      <div data-aos="fade-left">
        <h1 class="font-sans font-bold text-3xl mb-2">{{ product.name }}</h1>
        <div class="flex items-center gap-3 mb-6">
          <span class="text-2xl font-semibold">${{ product.price.toFixed(2) }}</span>
          <span v-if="product.compareAt" class="text-base text-muted line-through">${{ product.compareAt.toFixed(2) }}</span>
          <span v-if="product.badge" class="text-[10px] font-bold px-2 py-1 rounded-full bg-ink text-cream">{{ product.badge }}</span>
        </div>
        <p class="text-muted leading-relaxed mb-8">{{ product.description }}</p>

        <div class="mb-8">
          <p class="text-xs tracking-widest uppercase font-semibold mb-2">ទំហំ</p>
          <div class="flex gap-2 flex-wrap">
            <button v-for="s in product.sizes" :key="s" type="button"
              class="w-11 h-11 rounded-full border text-sm"
              :class="size === s ? 'border-ink bg-ink text-cream' : 'border-line hover:border-ink'"
              @click="size = s">{{ s }}</button>
          </div>
        </div>

        <RouterLink to="/contact" class="btn-primary w-full mb-8">សាកសួរដើម្បីបញ្ជាទិញ</RouterLink>

        <div class="grid grid-cols-2 gap-4 border-t border-line pt-6 text-sm text-muted">
          <p class="flex items-center gap-2"><Truck :size="16" :stroke-width="1.6" class="shrink-0" /> ដឹកជញ្ជូនឥតគិតថ្លៃ លើសពី $50</p>
          <p class="flex items-center gap-2"><RotateCcw :size="16" :stroke-width="1.6" class="shrink-0" /> ប្តូរបានក្នុងរយៈពេល ៣០ ថ្ងៃ</p>
          <p class="flex items-center gap-2"><Lock :size="16" :stroke-width="1.6" class="shrink-0" /> ការទូទាត់សុវត្ថិភាព ១០០%</p>
          <p class="flex items-center gap-2"><MessageCircle :size="16" :stroke-width="1.6" class="shrink-0" /> ជំនួយ ២៤/៧</p>
        </div>
      </div>
    </div>

    <section v-if="related.length" class="mt-20">
      <h2 class="font-sans font-bold text-2xl mb-8" data-aos="fade-up">ផលិតផលដែលអ្នកអាចចូលចិត្ត</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
        <div v-for="(p, i) in related" :key="p.id" data-aos="fade-up" :data-aos-delay="i * 80">
          <ProductCard :product="p" />
        </div>
      </div>
    </section>

    <!-- Facebook-style full-screen image preview, with prev/next across all product images -->
    <Teleport to="body">
      <Transition name="lightbox-fade">
        <div
          v-if="lightboxOpen"
          class="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center"
          @click.self="lightboxOpen = false"
        >
          <button
            type="button"
            class="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close preview"
            @click="lightboxOpen = false"
          >
            <X :size="22" :stroke-width="1.8" />
          </button>

          <button
            v-if="images.length > 1"
            type="button"
            class="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Previous image"
            @click.stop="prevImage"
          >
            <ChevronLeft :size="24" :stroke-width="1.8" />
          </button>

          <Transition name="lightbox-zoom" mode="out-in" appear>
            <img
              :key="activeIndex"
              :src="images[activeIndex]"
              :alt="product.name"
              class="max-w-[92vw] max-h-[88vh] object-contain select-none"
              @click.stop
            />
          </Transition>

          <button
            v-if="images.length > 1"
            type="button"
            class="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Next image"
            @click.stop="nextImage"
          >
            <ChevronRight :size="24" :stroke-width="1.8" />
          </button>

          <div v-if="images.length > 1" class="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/80 text-xs font-medium">
            {{ activeIndex + 1 }} / {{ images.length }}
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
  <div v-else class="max-w-3xl mx-auto px-6 py-24 text-center">
    <p class="text-lg font-medium mb-2">រកមិនឃើញផលិតផល</p>
    <RouterLink to="/shop" class="text-rust hover:underline">ត្រឡប់ទៅទំនិញ</RouterLink>
  </div>
</template>

<script setup>
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { Truck, RotateCcw, Lock, MessageCircle, Expand, X, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import ProductCard from '../components/ProductCard.vue'
import ProductGlyph from '../components/ProductGlyph.vue'
import { getProductById, getRelatedProducts } from '../data/products'
import { useSeo, SITE_URL } from '../composables/useSeo'

const route = useRoute()

const product = computed(() => getProductById(route.params.id))
const related = computed(() => (product.value ? getRelatedProducts(product.value) : []))
const images = computed(() => product.value?.images ?? [])

const size = ref('')
const activeIndex = ref(0)
const activeImage = computed(() => images.value[activeIndex.value] ?? null)

const lightboxOpen = ref(false)
function openLightbox(index) {
  activeIndex.value = index
  lightboxOpen.value = true
}
function nextImage() {
  activeIndex.value = (activeIndex.value + 1) % images.value.length
}
function prevImage() {
  activeIndex.value = (activeIndex.value - 1 + images.value.length) % images.value.length
}

// Lock page scroll while the preview is open, and let arrow keys / Escape
// drive it — matches the behaviour of Facebook's full-screen photo viewer.
watch(lightboxOpen, (open) => {
  document.documentElement.style.overflow = open ? 'hidden' : ''
})

function onKeydown(e) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') lightboxOpen.value = false
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', onKeydown)
  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown)
    document.documentElement.style.overflow = ''
  })
}

watch(
  product,
  (p) => {
    if (!p) return
    size.value = p.sizes[0]
    activeIndex.value = 0
    lightboxOpen.value = false
    useSeo({
      title: p.name,
      description: p.description,
      path: `/product/${p.id}`,
      type: 'product',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: p.name,
        description: p.description,
        sku: p.id,
        image: p.images,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: p.price,
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/product/${p.id}`,
        },
      },
    })
  },
  { immediate: true }
)
</script>

<style scoped>
.lightbox-fade-enter-active, .lightbox-fade-leave-active { transition: opacity 0.2s ease; }
.lightbox-fade-enter-from, .lightbox-fade-leave-to { opacity: 0; }

.lightbox-zoom-enter-active, .lightbox-zoom-leave-active { transition: transform 0.2s ease, opacity 0.2s ease; }
.lightbox-zoom-enter-from, .lightbox-zoom-leave-to { transform: scale(0.96); opacity: 0; }
</style>
