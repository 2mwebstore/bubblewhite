<template>
  <div>
    <section class="max-w-7xl mx-auto px-6 py-16 items-center" data-aos="fade-up">
      <div class="w-full card-surface overflow-hidden">
        <img src="/banners/contact-hero.png" alt="Bubble White card and sprig on linen" class="w-full h-full object-cover" />
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-12">
      <div data-aos="fade-right">
        <h2 class="font-semibold text-lg mb-6">Get in Touch</h2>
        <ul class="space-y-5 text-sm">
          <li class="flex items-start gap-3"><MapPin :size="18" :stroke-width="1.6" class="shrink-0 mt-0.5 text-rust" /><div><p class="font-medium">Our Location</p><p class="text-muted">Phnom Penh, Cambodia</p></div></li>
          <li class="flex items-start gap-3"><Mail :size="18" :stroke-width="1.6" class="shrink-0 mt-0.5 text-rust" /><div><p class="font-medium">Email Us</p><p class="text-muted">hello@bubblewhite.co</p></div></li>
          <li class="flex items-start gap-3"><Phone :size="18" :stroke-width="1.6" class="shrink-0 mt-0.5 text-rust" /><div><p class="font-medium">Call Us</p><p class="text-muted">+855 12 345 678</p></div></li>
          <li class="flex items-start gap-3"><Clock :size="18" :stroke-width="1.6" class="shrink-0 mt-0.5 text-rust" /><div><p class="font-medium">Working Hours</p><p class="text-muted">Mon – Sun / 9AM – 9PM</p></div></li>
        </ul>
      </div>

      <form class="space-y-4" data-aos="fade-left" @submit.prevent="submit">
        <h2 class="font-semibold text-lg mb-2">Send Us a Message</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div>
            <label for="name" class="text-xs font-medium block mb-1">Full Name</label>
            <input id="name" v-model="form.name" required type="text" placeholder="Your name" class="input-field" />
          </div>
          <div>
            <label for="email" class="text-xs font-medium block mb-1">Email Address</label>
            <input id="email" v-model="form.email" required type="email" placeholder="Your email" class="input-field" />
          </div>
        </div>
        <div>
          <label for="subject" class="text-xs font-medium block mb-1">Subject</label>
          <input id="subject" v-model="form.subject" required type="text" placeholder="How can we help?" class="input-field" />
        </div>
        <div>
          <label for="message" class="text-xs font-medium block mb-1">Message</label>
          <textarea id="message" v-model="form.message" required rows="4" placeholder="Write your message here…" class="input-field rounded-2xl"></textarea>
        </div>
        <button type="submit" class="btn-primary">Send Message</button>
        <p v-if="sent" class="text-sm text-rust">Thanks {{ form.name || 'there' }} — we\u2019ll be in touch soon.</p>
      </form>
    </section>

    <section class="bg-cream-dark border-t border-line">
      <div class="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 items-start">
        <div class="md:col-span-2" data-aos="fade-right">
          <h2 class="font-sans font-bold text-2xl mb-6">Frequently Asked Questions</h2>
          <div class="divide-y divide-line border-y border-line">
            <div v-for="(faq, i) in faqs" :key="faq.q">
              <button type="button" class="w-full flex items-center justify-between py-4 text-left font-medium" @click="openFaq = openFaq === i ? -1 : i">
                {{ faq.q }}
                <Minus v-if="openFaq === i" :size="18" :stroke-width="1.8" />
                <Plus v-else :size="18" :stroke-width="1.8" />
              </button>
              <p v-if="openFaq === i" class="pb-4 text-sm text-muted">{{ faq.a }}</p>
            </div>
          </div>
        </div>
        <div class="hidden md:block aspect-square card-surface overflow-hidden" data-aos="fade-left">
          <img src="/banners/faq-flatlay.png" alt="Folded Bubble White tee and sweatshirt" class="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { MapPin, Mail, Phone, Clock, Minus, Plus } from 'lucide-vue-next'
import { useSeo } from '../composables/useSeo'

useSeo({
  title: 'Contact Us',
  description: 'Get in touch with Bubble White — questions about orders, shipping, returns or anything else.',
  path: '/contact',
})

const form = reactive({ name: '', email: '', subject: '', message: '' })
const sent = ref(false)
function submit() {
  sent.value = true
}

const openFaq = ref(0)
const faqs = [
  { q: 'How long does shipping take?', a: 'Orders within Phnom Penh typically arrive in 1–2 business days; provincial deliveries take 3–5 days.' },
  { q: 'Can I return or exchange my order?', a: 'Yes — unworn items with tags attached can be returned or exchanged within 30 days of delivery.' },
  { q: 'How can I track my order?', a: 'Once your order ships you\u2019ll receive a tracking link by email or Telegram.' },
  { q: 'What payment methods do you accept?', a: 'We accept ABA PayWay, KHQR, Visa and Mastercard.' },
]
</script>
