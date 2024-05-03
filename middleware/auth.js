export default function(ctx){
  if(!ctx.store.getters.isAuthenticated)(
    ctx.redirect('/login')
  )
}
