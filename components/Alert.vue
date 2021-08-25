<template>
  <div class="rounded-md bg-red-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <ExclamationIcon class="text-red-700" />
      </div>
      <div class="ml-3 flex-1 md:flex md:justify-between">
        <div class="text-sm text-red-700">
          {{ message }}
        </div>
      </div>
    </div>
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
