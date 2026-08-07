<template>
  <nav
    class="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-cream/95 backdrop-blur border-t border-line pb-[env(safe-area-inset-bottom)]"
    aria-label="រុករកចម្បង"
  >
    <div style="display: flex; align-items: stretch;">
      <RouterLink
        v-for="tab in tabs"
        :key="tab.to"
        :to="tab.to"
        style="flex: 1 1 0%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;"
        class="py-2.5 text-[11px] font-medium transition-colors"
        :class="isActive(tab.to) ? 'text-ink' : 'text-muted'"
      >
        <span
          class="flex items-center justify-center w-9 h-9 rounded-full transition-colors"
          :class="isActive(tab.to) ? 'bg-ink text-cream' : ''"
        >
          <component :is="tab.icon" :size="18" :stroke-width="1.8" />
        </span>
        {{ tab.label }}
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { Home, Store, Info, MessageCircle } from 'lucide-vue-next'

const route = useRoute()

const tabs = [
  { to: '/', label: 'ទំព័រដើម', icon: Home },
  { to: '/shop', label: 'ទំនិញ', icon: Store },
  { to: '/about', label: 'អំពីយើង', icon: Info },
  { to: '/contact', label: 'ទំនាក់ទំនង', icon: MessageCircle },
]

function isActive(to) {
  return route.path === to
}
</script>