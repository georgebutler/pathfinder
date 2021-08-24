<template>
  <nav>
    <div>
      <span>
        <NuxtLink to="/" class="font-medium text-gray-500 hover:text-gray-900">
          Home
        </NuxtLink>
      </span>
      <span v-if="isAuthed">
        <NuxtLink to="/dashboard" class="font-medium text-gray-500 hover:text-gray-900">
          Dashboard
        </NuxtLink>
      </span>
      <span v-else>
        <NuxtLink to="/register" class="font-medium text-gray-500 hover:text-gray-900">
          Register
        </NuxtLink>
        <NuxtLink to="/login" class="font-medium text-gray-500 hover:text-gray-900">
          Login
        </NuxtLink>
      </span>
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
