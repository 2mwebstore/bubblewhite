<template>
  <footer class="bg-ink text-cream mt-24">
    <div class="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
      <div class="col-span-2">
        <p class="font-sans font-extrabold text-lg mb-3">bubble.white</p>
        <p class="text-sm text-cream/60 leading-relaxed max-w-xs">Minimal style. Maximum comfort.<br />Thank you for supporting Bubble White.</p>
        <div class="flex items-center gap-3 mt-5">
          <a v-for="s in socials" :key="s.label" :href="s.href" :aria-label="s.label" class="w-8 h-8 rounded-full border border-cream/25 flex items-center justify-center hover:border-cream transition-colors">
            <component :is="s.icon" v-if="s.icon" :size="14" :stroke-width="1.6" />
            <span v-else v-html="s.fallback" />
          </a>
        </div>
      </div>

      <div>
        <p class="text-xs tracking-widest uppercase font-semibold mb-4 text-cream/70">Shop</p>
        <ul class="space-y-2 text-sm text-cream/60">
          <li><RouterLink to="/shop" class="hover:text-cream">All Products</RouterLink></li>
          <li><RouterLink to="/shop?category=t-shirts" class="hover:text-cream">T-Shirts</RouterLink></li>
          <li><RouterLink to="/shop?category=hoodies" class="hover:text-cream">Hoodies</RouterLink></li>
          <li><RouterLink to="/shop?category=accessories" class="hover:text-cream">Accessories</RouterLink></li>
        </ul>
      </div>

      <div>
        <p class="text-xs tracking-widest uppercase font-semibold mb-4 text-cream/70">Customer Service</p>
        <ul class="space-y-2 text-sm text-cream/60">
          <li><RouterLink to="/contact" class="hover:text-cream">Shipping &amp; Delivery</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-cream">Returns &amp; Exchanges</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-cream">FAQ</RouterLink></li>
        </ul>
      </div>

      <div>
        <p class="text-xs tracking-widest uppercase font-semibold mb-4 text-cream/70">Contact</p>
        <ul class="space-y-2 text-sm text-cream/60">
          <li>Phnom Penh, Cambodia</li>
          <li>hello@bubblewhite.co</li>
          <li>+855 12 345 678</li>
          <li>Mon – Sun / 9AM – 9PM</li>
        </ul>
      </div>
    </div>

    <div class="border-t border-cream/10">
      <div class="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
        <p>© {{ year }} Bubble White. All rights reserved.</p>
        <div class="flex items-center gap-2">
          <span class="border border-cream/25 rounded px-2 py-1">VISA</span>
          <span class="border border-cream/25 rounded px-2 py-1">Mastercard</span>
          <span class="border border-cream/25 rounded px-2 py-1">ABA</span>
          <span class="border border-cream/25 rounded px-2 py-1">KHQR</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { Facebook, Instagram, Youtube } from 'lucide-vue-next'

const year = new Date().getFullYear()

const socials = [
  { label: 'Facebook', href: '#', icon: Facebook },
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'TikTok', href: '#', fallback: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M14 3c.3 2 1.8 3.6 4 3.9V9.9c-1.5 0-2.9-.5-4-1.3v6.6a5.2 5.2 0 11-4.4-5.1v3a2.2 2.2 0 102.2 2.2V3H14z"/></svg>' },
  { label: 'YouTube', href: '#', icon: Youtube },
]
</script>
