<template>
  <PDF :src="pdfUrl" />
</template>

<script setup lang="ts">
import PDF from 'pdf-vue3'
import pdfUrl from '@/assets/docs/privacy.pdf'
</script>