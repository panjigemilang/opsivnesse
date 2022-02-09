<script setup>
const props = defineProps({
  text: {
    type: String,
  },
  url: {
    type: String,
  },
  target: {
    default: false,
    type: Boolean,
  },
  local: {
    default: true,
    type: Boolean,
  },
})

const { text, url, target, local } = toRefs(props)

</script>

<template>
  <router-link v-if="local" :to="url">
    {{ text }}
  </router-link>
  <a v-else :href="url" :target="target ? '_blank' : ''" :rel="target ? 'noopener noreferrer' : ''">
    {{ text }}
  </a>
</template>
