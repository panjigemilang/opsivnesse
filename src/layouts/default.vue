<script setup>
const links = [
  {
    text: 'Link',
    url: '/',
  },
]
</script>

<template>
  <navbar-mv class="py-3 text-gray-700 dark:text-gray-200" :links="links" />
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <router-view />
  </main>
</template>
