<template>
  <div>
    <Navbar />
    <div>Login</div>
    <div>
      Token:
      <input v-model="token" type="password" required>
    </div>
    <div>
      <Alert v-for="error in errors" :key="error.message" :message="error.message" />
    </div>
    <div>
      <button @click="submit">
        Login
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      token: '',
      errors: []
    }
  },
  methods: {
    submit () {
      if (this.token === '') { return }

      this.$axios.$get('my/account', { params: { token: this.token } })
        .then((res) => {
          this.$store.dispatch('auth/login', { ...res, token: this.token })
        })
        .catch((e) => {
          this.errors = []

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
    }
  }
}
</script>
