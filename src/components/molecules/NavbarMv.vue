<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
import { Helper } from '~/utils'

const { t, locale, availableLocales } = useI18n()
const router = useRouter()

const props = defineProps({
  links: {
    required: true,
    type: Array,
  },
})

const { links } = toRefs(props)
const currentLang = ref(Helper.getLocalStorage('lang'))

const selectLanguage = ({ target }) => {
  // change localstorage URL
  Helper.setLocalStorage('lang', target.value)
  window.location.reload()
}

</script>

<template>
  <nav class="dark:bg-indigo-700 relative">
    <ul class="flex justify-around">
      <li v-for="(link, index) in links" :key="index" class="py-2 px-4">
        <link-av :text="link.text" :url="link.url" />
      </li>
    </ul>
    <div class="absolute right-5 top-5 flex">
      <select id="toggle-lang" name="language" @change="selectLanguage($event)">
        <option v-for="language in availableLocales" :key="language" :selected="language === currentLang" :value="language">
          {{ language.toUpperCase() }}
        </option>
      </select>
      <button class="icon-btn !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
        <carbon-moon v-if="isDark" />
        <carbon-sun v-else />
      </button>
    </div>
  </nav>
</template>
