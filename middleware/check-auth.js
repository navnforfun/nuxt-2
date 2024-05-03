export default function(ctx) {
  if (process.client) {
    ctx.store.dispatch('initAuth')
  }

}
