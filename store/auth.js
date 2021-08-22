export const state = () => ({
  token: '',
  user: {}
})

export const mutations = {
  login (state, payload) {
    state.token = payload.token
    state.user = payload.user
  }
}

export const actions = {
  login ({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      commit('login', { token: payload.token, user: payload.user })
      resolve()
    })
  }
}
