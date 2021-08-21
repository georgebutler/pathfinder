<template>
  <div>
    <Navbar />
    <div>Pathfinder</div>
    <div>A SpaceTraders Client</div>
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
