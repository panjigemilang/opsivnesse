<script setup lang="ts">
const modal = ref(null)
const { t } = useI18n()

function setRef(modalRef) {
  modal.value = modalRef
}
</script>

<template>
  <h1>
    Modal
  </h1>
  <button @click="modal.show()">
    {{ t('modal.button.show') }}
  </button>
  <modal-bv tabindex="-1" aria-hidden="true" @ref="setRef">
    <template #modal-header>
      <h5 id="exampleModalLabel" class="modal-title">
        {{ t('modal.title') }}
      </h5>
    </template>
    <template #modal-body>
      <p>{{ t('modal.body') }}</p>
    </template>
    <template #modal-footer>
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        @click="modal.hide()"
      />
      <button type="button" class="btn btn-secondary" @click="modal.hide()">
        {{ t('modal.button.close') }}
      </button>
    </template>
  </modal-bv>
</template>
