<template>
  <header class="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-line">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
      <RouterLink to="/" class="shrink-0" aria-label="Bubble White — ទំព័រដើម">
        <img src="/logo.png" alt="Bubble White" class="h-10 md:h-14 w-auto" />
      </RouterLink>

      <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
        <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" class="relative py-1 transition-colors hover:text-rust"
          :class="isActive(link.to) ? 'text-ink' : 'text-ink/70'">
          {{ link.label }}
          <span v-if="isActive(link.to)" class="absolute -bottom-1 left-0 right-0 h-[2px] bg-ink" />
        </RouterLink>
      </nav>

      <div class="flex items-center gap-4 shrink-0">
        <button aria-label="Search" class="hover:text-rust transition-colors" @click="searchOpen = !searchOpen">
          <Search :size="20" :stroke-width="1.8" />
        </button>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="searchOpen" class="border-t border-line bg-cream">
        <form class="max-w-7xl mx-auto px-6 py-3" @submit.prevent="submitSearch">
          <input v-model="searchQuery" type="search" placeholder="ស្វែងរកផលិតផល…" class="input-field" autofocus />
        </form>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { Search } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const searchOpen = ref(false)
const searchQuery = ref('')

const navLinks = [
  { to: '/', label: 'ទំព័រដើម' },
  { to: '/shop', label: 'ទំនិញ' },
  { to: '/about', label: 'អំពីយើង' },
  { to: '/contact', label: 'ទំនាក់ទំនង' },
]

function isActive(to) {
  const path = to.split('?')[0]
  return route.path === path && (path !== '/shop' || !to.includes('category'))
}

function submitSearch() {
  if (!searchQuery.value.trim()) return
  router.push({ path: '/shop', query: { q: searchQuery.value } })
  searchOpen.value = false
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>