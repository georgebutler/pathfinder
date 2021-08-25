<template>
  <div>
    <Navbar />
    <Alert v-for="error in errors" :key="error.message">
      {{ error.message }}
    </Alert>
    <div class="text-lg font-bold">
      Login
    </div>
    <div>
      Token:
      <input v-model="token" type="password" required :disabled="loading">
    </div>
    <div>
      <Button :disabled="loading" @click.native="submit">
        Login
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      token: '',
      errors: [],
      loading: false
    }
  },
  methods: {
    submit () {
      this.errors = []

      if (this.token === '') {
        this.errors.push({
          message: 'missingToken'
        })
      } else {
        this.$axios.$get('my/account', { params: { token: this.token } })
          .then((res) => {
            this.$store.dispatch('auth/login', { ...res, token: this.token })
              .then(() => {
                this.$router.push('/dashboard')
              })
          })
          .catch((e) => {
            if (e.response) {
              if (e.response.status === 401) {
                this.errors.push({
                  message: 'invalidToken'
                })
              }
            } else {
              this.errors.push({
                message: 'networkError'
              })
            }
          })
          .finally(() => {
            this.loading = false
          })
      }
    }
  }
}
</script>
