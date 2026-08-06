<template>
  <RouterLink :to="`/product/${product.id}`" class="group block">
    <div class="relative card-surface overflow-hidden mb-3">
      <span
        v-if="product.badge"
        class="absolute top-3 left-3 z-10 text-[10px] font-bold tracking-wide px-2 py-1 rounded-md bg-ink text-cream"
      >{{ product.badge }}</span>

      <div class="aspect-[3/4] bg-cream-dark flex items-center justify-center overflow-hidden">
        <img
          v-if="product.image"
          :src="product.image"
          :alt="product.name"
          class="w-full h-full object-cover"
          style="object-position: 65% center"
          loading="lazy"
          width="520"
          height="472"
        />
        <ProductGlyph v-else :seed="product.id" />
      </div>
    </div>

    <h3 class="text-sm font-medium text-ink group-hover:text-rust transition-colors">{{ product.name }}</h3>
    <div class="flex items-center gap-2 mt-1">
      <span class="text-sm font-semibold">${{ product.price.toFixed(2) }}</span>
      <span v-if="product.compareAt" class="text-xs text-muted line-through">${{ product.compareAt.toFixed(2) }}</span>
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import ProductGlyph from './ProductGlyph.vue'

defineProps({
  product: { type: Object, required: true },
})
</script>
