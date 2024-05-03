export default function(ctx) {
    ctx.store.dispatch('initAuth',ctx.req)
}
