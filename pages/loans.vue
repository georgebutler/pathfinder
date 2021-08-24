<template>
  <div>
    <Navbar />
    <Alert v-for="error in errors" :key="error.message" :message="error.message" />
    <div class="text-lg font-bold">
      Loans
    </div>
    <div v-for="loan in loans" :key="loan.id">
      {{ loan.type }}
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  data () {
    return {
      errors: [],
      loans: []
    }
  },
  computed: {
    token () {
      return this.$store.state.auth.token
    }
  },
  mounted () {
    this.$axios.$get('types/loans', { params: { token: this.token } })
      .then((res) => {
        this.loans = res.loans
      })
      .catch((e) => {
        this.errors.push({
          message: 'networkError'
        })
      })
  }
}
</script>
