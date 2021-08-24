<template>
  <div>
    <Navbar />
    <div class="text-lg font-bold">
      Register
    </div>
    <div>
      Username:
      <input v-model="username" type="text" required>
    </div>
    <div>
      <Alert v-for="error in errors" :key="error.message" :message="error.message" />
    </div>
    <div>
      <button @click="submit">
        Create Account
      </button>
    </div>
  </div>
</template>

<script>
export default {
  middleware ({ store, redirect }) {
    if (store.state.auth.token.length > 0) {
      return redirect('/dashboard')
    }
  },
  data () {
    return {
      username: '',
      errors: []
    }
  },
  methods: {
    submit () {
      if (this.username === '') { return }

      this.$axios.$post(`users/${this.username}/claim`)
        .then((res) => {
          this.$store.dispatch('auth/login', { ...res })
            .then(() => {
              this.$router.push('/dashboard')
            })
        })
        .catch((e) => {
          this.errors = []

          if (e.response) {
            if (e.response.status === 409) {
              this.errors.push({
                message: 'usernameTaken'
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
