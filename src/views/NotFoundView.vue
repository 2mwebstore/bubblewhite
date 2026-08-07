<template>
  <div class="max-w-md mx-auto px-6 py-24 text-center">
    <p class="font-sans font-extrabold text-5xl mb-4">404</p>
    <h1 class="text-lg font-medium mb-2">ទំព័រនេះបានបាត់ទៅហើយ</h1>
    <p class="text-sm text-muted mb-6">ទំព័រដែលអ្នកកំពុងស្វែងរកមិនមាន ឬត្រូវបានផ្លាស់ទី។</p>
    <RouterLink to="/" class="btn-primary">ត្រឡប់ទៅទំព័រដើម</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useSeo } from '../composables/useSeo'

useSeo({ title: 'រកមិនឃើញទំព័រ', description: 'មិនអាចរកឃើញទំព័រនេះទេ។', path: '/404' })
</script>
