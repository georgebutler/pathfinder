<template>
  <nav class="bg-white">
    <div class="max-w-7x1 mx-auto px-2 sm:px-4 lg:px-8">
      <div v-if="isAuthed">
        <NuxtLink to="/" class="font-medium text-gray-500 hover:text-gray-900">
          Home
        </NuxtLink>
        <NuxtLink to="/dashboard" class="font-medium text-gray-500 hover:text-gray-900">
          Dashboard
        </NuxtLink>
      </div>
      <div v-else>
        <NuxtLink to="/register" class="font-medium text-gray-500 hover:text-gray-900">
          Register
        </NuxtLink>
        <NuxtLink to="/login" class="font-medium text-gray-500 hover:text-gray-900">
          Login
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isAuthed () {
      return this.$store.state.auth.token.length > 0
    }
  }
}
</script>
