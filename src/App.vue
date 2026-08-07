<template>
  <div class="min-h-screen flex flex-col">
    <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-ink focus:text-cream focus:px-4 focus:py-2 focus:rounded-full">រំលងទៅមាតិកា</a>
    <AnnouncementBar />
    <NavBar />
    <main id="main" class="flex-1">
      <RouterView />
    </main>
    <SiteFooter />
    <MobileTabBar />

    <Transition name="toast">
      <div v-if="state.toast" class="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-ink text-cream text-sm px-5 py-3 rounded-full shadow-lg">
        {{ state.toast }}
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AnnouncementBar from './components/AnnouncementBar.vue'
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
import MobileTabBar from './components/MobileTabBar.vue'
import { useStore } from './composables/useStore'

const { state } = useStore()
</script>

<style scoped>
.toast-enter-active, .toast-leave-active { transition: all 0.25s ease; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translate(-50%, 10px); }
</style>