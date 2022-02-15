<script setup lang="ts">
import { Modal } from 'bootstrap'

const bootstrapModal = ref(null)
const emit = defineEmits(['ref'])

onMounted(() => {
  emit('ref', new Modal(bootstrapModal.value))
})
</script>

<template>
  <div ref="bootstrapModal" class="modal fade" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="modal-header" />
        </div>
        <div class="modal-body">
          <slot name="modal-body" />
        </div>
        <div class="modal-footer">
          <slot name="modal-footer" />
        </div>
      </div>
    </div>
  </div>
</template>
