<script setup>
import { isDark, toggleDark } from '~/composables'
const { t } = useI18n()

const props = defineProps({
  links: {
    required: true,
    type: Array,
  },
})

const { links } = toRefs(props)

</script>

<template>
  <nav class="dark:bg-indigo-700 relative">
    <ul class="flex justify-around">
      <li v-for="(link, index) in links" :key="index" class="py-2 px-4">
        <link-av :text="link.text" :url="link.url" />
      </li>
    </ul>
    <button class="icon-btn !outline-none absolute right-5 top-5" :title="t('button.toggle_dark')" @click="toggleDark()">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </button>
  </nav>
</template>
