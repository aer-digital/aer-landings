<template>
  <PDF :src="pdfUrl" />
</template>

<script setup lang="ts">
import PDF from 'pdf-vue3'

const pdfUrl = `${import.meta.env.BASE_URL}docs/privacy.pdf`
</script>