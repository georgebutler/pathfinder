<template>
  <div>
    <Navbar />
    <div>
      <Alert v-for="error in errors" :key="error.message" :message="error.message" />
    </div>
    <div class="text-lg font-bold">
      Pathfinder
    </div>
    <div class="text-lg">
      A SpaceTraders Client
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      errors: []
    }
  },
  mounted () {
    this.$axios.$get('game/status')
      .catch((e) => {
        this.errors.push({
          message: 'networkError'
        })
      })
  }
}
</script>
