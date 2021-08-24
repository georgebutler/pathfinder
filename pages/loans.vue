<template>
  <div>
    <Navbar />
    <Alert v-for="error in errors" :key="error.message" :message="error.message" />
    <div class="text-lg font-bold">
      Loans
    </div>
    <div v-if="loading">
      Loading
    </div>
    <div v-else>
      <div v-for="loan in loans" :key="loan.id" class="bg-gray-100">
        <div>{{ loan.type }}</div>
        <div>{{ loan.amount }}</div>
        <div>Rate: {{ loan.rate }}</div>
        <div>Term: {{ loan.termInDays }} Days</div>
        <div>{{ loan.collateralRequired ? 'Collateral Required' : 'No Collateral Required' }}</div>
        <Button>Aquire Loan</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  data () {
    return {
      errors: [],
      loans: [],
      loading: true
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
      .finally(() => {
        this.loading = false
      })
  }
}
</script>
