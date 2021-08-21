<template>
  <div>
    <Navbar />
    <div>Register</div>
    <div>
      Username:
      <input type="text">
    </div>
    <div>
      <button>Create Account</button>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$axios.$get('game/status')
      .then((res) => {
        console.log(res.status)
      })
  }
}
</script>
