<template>
  <div>
    <Navbar />
    <div class="text-lg font-bold">
      Dashboard
    </div>
    <div>Username: {{ user.username }}</div>
    <div>Credits: {{ user.credits }}</div>
    <div>Token: {{ token }}</div>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  computed: {
    user () {
      return this.$store.state.auth.user
    },
    token () {
      return this.$store.state.auth.token
    }
  }
}
</script>
