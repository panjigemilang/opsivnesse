<script setup lang="ts">
import { Helper } from '~/utils'

const router = useRouter()
const { t } = useI18n()

onMounted(() => {
  let pathname = window.location.pathname

  // if URL has prefix, remove the prefix back to default locale
  if (Helper.pathHasPrefix().length)
    pathname = pathname.replace(/[ \w-]+\//g, '')

  router.replace({
    path: pathname,
  })
})

const isLoading = ref(true)

const setLoading = setTimeout(() => {
  isLoading.value = false
}, 2000)

onUnmounted(() => {
  clearTimeout(setLoading)
})
</script>

<template>
  <main class="px-4 py-10 text-center text-teal-700 dark:text-gray-200">
    <div v-if="isLoading">
      <h1>Loading ...</h1>
    </div>
    <div v-else>
      <div>
        <p class="text-4xl">
          <carbon-warning class="inline-block" />
        </p>
      </div>
      <router-view />
      <div>
        <button
          class="btn m-3 text-sm mt-8"
          @click="router.back()"
        >
          {{ t('button.back') }}
        </button>
      </div>
    </div>
  </main>
</template>
