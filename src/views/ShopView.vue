<template>
  <div class="max-w-7xl mx-auto px-6 py-12">


    <div class="flex flex-col md:flex-row gap-10">
      <!-- Sidebar -->
      <aside class="w-full md:w-56 flex-shrink-0 space-y-8" data-aos="fade-right">
          <h1 class="font-sans font-bold text-4xl mb-3">Shop</h1>
        <div>
          <p class="text-xs tracking-widest uppercase font-semibold mb-3">Search</p>
          <input v-model="filters.search" type="search" placeholder="Search…" class="input-field text-sm" />
        </div>

        <div>
          <p class="text-xs tracking-widest uppercase font-semibold mb-3">Category</p>
          <ul class="space-y-2">
            <li>
              <button type="button" @click="filters.category = ''"
                :class="!filters.category ? 'text-rust font-medium' : 'text-ink/70 hover:text-ink'"
                class="text-sm transition-colors">All</button>
            </li>
            <li v-for="cat in categories" :key="cat.id">
              <button type="button" @click="filters.category = cat.slug"
                :class="filters.category === cat.slug ? 'text-rust font-medium' : 'text-ink/70 hover:text-ink'"
                class="text-sm transition-colors">{{ cat.name }}</button>
            </li>
          </ul>
        </div>

        <div>
          <p class="text-xs tracking-widest uppercase font-semibold mb-3">Max Price</p>
          <input v-model.number="filters.maxPrice" type="range" min="10" max="60" step="1" class="w-full accent-ink" />
          <p class="text-xs text-muted mt-1">Up to ${{ filters.maxPrice }}</p>
        </div>

        <button type="button" class="text-xs text-rust hover:underline" @click="resetFilters">Clear filters</button>
      </aside>

      <!-- Grid -->
      <div class="flex-1">
          <!-- <span class="section-label mb-2">Shop All Products</span>  -->
          <h1 class="font-sans font-bold text-4xl mb-3"> All Products</h1>
        <!-- <div class="flex items-center justify-between mb-6">
          <p class="text-sm text-muted">{{ filtered.length }} products</p>
          <select v-model="sortBy" class="input-field text-sm w-auto py-2">
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div> -->

        <div v-if="paged.length" class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="(p, i) in paged" :key="p.id" data-aos="fade-up" :data-aos-delay="(i % 4) * 80">
            <ProductCard :product="p" />
          </div>
        </div>
        <div v-else class="text-center py-20 border border-dashed border-line rounded-card">
          <p class="font-medium mb-1">No products match your filters</p>
          <p class="text-sm text-muted mb-4">Try widening your search or clearing filters.</p>
          <button type="button" class="btn-secondary" @click="resetFilters">Clear filters</button>
        </div>

        <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 mt-12">
          <button type="button" class="w-9 h-9 rounded-full border border-line disabled:opacity-30" :disabled="page === 1" @click="page--">‹</button>
          <button v-for="n in totalPages" :key="n" type="button"
            class="w-9 h-9 rounded-full text-sm"
            :class="n === page ? 'bg-ink text-cream' : 'hover:bg-cream-dark'"
            @click="page = n">{{ n }}</button>
          <button type="button" class="w-9 h-9 rounded-full border border-line disabled:opacity-30" :disabled="page === totalPages" @click="page++">›</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from '../components/ProductCard.vue'
import { products, categories } from '../data/products'
import { useSeo } from '../composables/useSeo'

useSeo({
  title: 'Shop All Products',
  description: 'Browse Bubble White\u2019s full collection of minimal tees, hoodies, sweatshirts and accessories for men and women.',
  path: '/shop',
})

const route = useRoute()

const filters = reactive({
  search: typeof route.query.q === 'string' ? route.query.q : '',
  category: typeof route.query.category === 'string' ? route.query.category : '',
  maxPrice: 60,
})

watch(
  () => route.query,
  (q) => {
    if (typeof q.category === 'string') filters.category = q.category
    if (typeof q.q === 'string') filters.search = q.q
  }
)

const sortBy = ref('featured')
const page = ref(1)
const perPage = 10

const filtered = computed(() => {
  let list = products.filter((p) => p.price <= filters.maxPrice)
  if (filters.category) list = list.filter((p) => p.category === filters.category)
  if (filters.search.trim()) {
    const q = filters.search.trim().toLowerCase()
    list = list.filter((p) => p.name.toLowerCase().includes(q))
  }
  if (sortBy.value === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
  if (sortBy.value === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
  if (sortBy.value === 'rating') list = [...list].sort((a, b) => b.rating - a.rating)
  return list
})

const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / perPage)))
const paged = computed(() => filtered.value.slice((page.value - 1) * perPage, page.value * perPage))

watch([filters, sortBy], () => (page.value = 1))

function resetFilters() {
  filters.search = ''
  filters.category = ''
  filters.maxPrice = 60
}
</script>
