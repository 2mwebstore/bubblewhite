<template>
  <div class="max-w-md mx-auto px-6 py-24 text-center">
    <p class="font-sans font-extrabold text-5xl mb-4">404</p>
    <h1 class="text-lg font-medium mb-2">This page went missing in the wash</h1>
    <p class="text-sm text-muted mb-6">The page you\u2019re looking for doesn\u2019t exist or has moved.</p>
    <RouterLink to="/" class="btn-primary">Back to Home</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useSeo } from '../composables/useSeo'

useSeo({ title: 'Page Not Found', description: 'This page could not be found.', path: '/404' })
</script>
