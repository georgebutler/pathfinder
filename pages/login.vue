<template>
  <div>
    <Navbar />
    <div>Login</div>
    <div>
      Token:
      <input v-model="token" type="password">
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
      username: '',
      token: '',
      errors: []
    }
  },
  methods: {
    submit () {
      this.$axios.$get('my/account', { token: this.token })
        .then((res) => {
          console.log(res)
          alert('Welcome!')
        })
        .catch((e) => {
          this.errors = e
        })
    }
  }
}
</script>
