<template>
  <div>
    <Navbar />
    <div>Dashboard</div>
    <div>Username: {{ user.username }}</div>
    <div>Credits: {{ user.credits }}</div>
    <div>Joined: {{ user.joinedAt }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  }
}
</script>
