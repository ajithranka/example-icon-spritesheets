<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>
