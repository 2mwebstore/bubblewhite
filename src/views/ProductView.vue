<template>
  <div v-if="product" class="max-w-7xl mx-auto px-6 py-12">
    <nav class="text-xs text-muted mb-8" aria-label="Breadcrumb">
      <RouterLink to="/" class="hover:text-ink">Home</RouterLink> /
      <RouterLink to="/shop" class="hover:text-ink">Shop</RouterLink> /
      <span class="text-ink">{{ product.name }}</span>
    </nav>

    <div class="grid md:grid-cols-2 gap-12">
      <div class="aspect-square card-surface bg-cream-dark flex items-center justify-center overflow-hidden" data-aos="fade-right">
        <img
          v-if="product.image"
          :src="product.image"
          :alt="product.name"
          class="w-full h-full object-cover"
          style="object-position: 65% center"
          width="520"
          height="472"
        />
        <ProductGlyph v-else :seed="product.id" class="w-1/2 h-1/2" />
      </div>

      <div data-aos="fade-left">
        <h1 class="font-sans font-bold text-3xl mb-2">{{ product.name }}</h1>
        <div class="flex items-center gap-3 mb-6">
          <span class="text-2xl font-semibold">${{ product.price.toFixed(2) }}</span>
          <span v-if="product.compareAt" class="text-base text-muted line-through">${{ product.compareAt.toFixed(2) }}</span>
          <span v-if="product.badge" class="text-[10px] font-bold px-2 py-1 rounded-full bg-ink text-cream">{{ product.badge }}</span>
        </div>
        <p class="text-muted leading-relaxed mb-8">{{ product.description }}</p>

        <div class="mb-6">
          <p class="text-xs tracking-widest uppercase font-semibold mb-2">Color</p>
          <div class="flex gap-2">
            <button v-for="c in product.colors" :key="c" type="button"
              class="px-3 py-1.5 rounded-full border text-sm"
              :class="color === c ? 'border-ink bg-ink text-cream' : 'border-line hover:border-ink'"
              @click="color = c">{{ c }}</button>
          </div>
        </div>

        <div class="mb-8">
          <p class="text-xs tracking-widest uppercase font-semibold mb-2">Size</p>
          <div class="flex gap-2 flex-wrap">
            <button v-for="s in product.sizes" :key="s" type="button"
              class="w-11 h-11 rounded-full border text-sm"
              :class="size === s ? 'border-ink bg-ink text-cream' : 'border-line hover:border-ink'"
              @click="size = s">{{ s }}</button>
          </div>
        </div>

        <RouterLink to="/contact" class="btn-primary w-full mb-8">Enquire to Order</RouterLink>

        <div class="grid grid-cols-2 gap-4 border-t border-line pt-6 text-sm text-muted">
          <p class="flex items-center gap-2"><Truck :size="16" :stroke-width="1.6" class="shrink-0" /> Free shipping over $50</p>
          <p class="flex items-center gap-2"><RotateCcw :size="16" :stroke-width="1.6" class="shrink-0" /> 30 days easy returns</p>
          <p class="flex items-center gap-2"><Lock :size="16" :stroke-width="1.6" class="shrink-0" /> 100% secure payment</p>
          <p class="flex items-center gap-2"><MessageCircle :size="16" :stroke-width="1.6" class="shrink-0" /> 24/7 support</p>
        </div>
      </div>
    </div>

    <section v-if="related.length" class="mt-20">
      <h2 class="font-sans font-bold text-2xl mb-8" data-aos="fade-up">You may also like</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
        <div v-for="(p, i) in related" :key="p.id" data-aos="fade-up" :data-aos-delay="i * 80">
          <ProductCard :product="p" />
        </div>
      </div>
    </section>
  </div>
  <div v-else class="max-w-3xl mx-auto px-6 py-24 text-center">
    <p class="text-lg font-medium mb-2">Product not found</p>
    <RouterLink to="/shop" class="text-rust hover:underline">Back to shop</RouterLink>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { Truck, RotateCcw, Lock, MessageCircle } from 'lucide-vue-next'
import ProductCard from '../components/ProductCard.vue'
import ProductGlyph from '../components/ProductGlyph.vue'
import { getProductById, getRelatedProducts } from '../data/products'
import { useSeo, SITE_URL } from '../composables/useSeo'

const route = useRoute()

const product = computed(() => getProductById(route.params.id))
const related = computed(() => (product.value ? getRelatedProducts(product.value) : []))

const color = ref('')
const size = ref('')

watch(
  product,
  (p) => {
    if (!p) return
    color.value = p.colors[0]
    size.value = p.sizes[0]
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
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: p.price,
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/product/${p.id}`,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: p.rating,
          reviewCount: p.reviews,
        },
      },
    })
  },
  { immediate: true }
)
</script>
