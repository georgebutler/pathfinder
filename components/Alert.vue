<template>
  <div class="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>
