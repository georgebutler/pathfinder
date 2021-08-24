export default function ({ store, redirect }) {
  if (!store.state.auth.token.length > 0) {
    return redirect('/login')
  }
}
