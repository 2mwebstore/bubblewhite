<template>
  <header class="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-line">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
      <button class="md:hidden -ml-2 p-2" aria-label="Open menu" @click="mobileOpen = true">
        <Menu :size="22" :stroke-width="1.8" />
      </button>

      <RouterLink to="/" class="font-sans font-extrabold text-xl tracking-tight leading-none shrink-0">
        bubble<span class="text-rust">.</span><span class="block text-[11px] font-medium tracking-[0.3em] -mt-0.5">white</span>
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
          <input v-model="searchQuery" type="search" placeholder="Search products…" class="input-field" autofocus />
        </form>
      </div>
    </Transition>

    <!-- Mobile menu -->
    <Transition name="fade">
      <div v-if="mobileOpen" class="fixed inset-0 z-[60] bg-ink/40 md:hidden" @click.self="mobileOpen = false">
        <Transition name="slide">
          <div v-if="mobileOpen" class="absolute left-0 top-0 bottom-0 w-72 max-w-[85vw] bg-cream p-6 flex flex-col gap-6 shadow-xl overflow-y-auto">
            <div class="flex items-center justify-between">
              <span class="font-sans font-extrabold text-lg">bubble.white</span>
              <button aria-label="Close menu" class="p-1 -m-1" @click="mobileOpen = false">
                <X :size="20" :stroke-width="1.8" />
              </button>
            </div>
            <nav class="flex flex-col gap-4 text-base font-medium">
              <RouterLink
                v-for="link in navLinks"
                :key="link.to"
                :to="link.to"
                class="py-1"
                :class="isActive(link.to) ? 'text-ink' : 'text-ink/70'"
                @click="mobileOpen = false"
              >{{ link.label }}</RouterLink>
            </nav>
          </div>
        </Transition>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { Menu, X, Search } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const mobileOpen = ref(false)
const searchOpen = ref(false)
const searchQuery = ref('')

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/shop?category=men', label: 'Men' },
  { to: '/shop?category=women', label: 'Women' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
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

// Close the drawer whenever the route changes (e.g. browser back/forward).
watch(() => route.fullPath, () => {
  mobileOpen.value = false
})

// Prevent the page behind the drawer from scrolling while it's open, and
// let Escape close it — both common expectations for a mobile nav drawer.
watch(mobileOpen, (open) => {
  document.documentElement.style.overflow = open ? 'hidden' : ''
  if (open) searchOpen.value = false
})

function onKeydown(e) {
  if (e.key === 'Escape') mobileOpen.value = false
}
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', onKeydown)
  onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-enter-active, .slide-leave-active { transition: transform 0.2s ease; }
.slide-enter-from, .slide-leave-to { transform: translateX(-100%); }
</style>
