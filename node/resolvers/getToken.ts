export const getToken = async(_: any, __: any, ctx: Context) => {
  return ctx.clients.vbase
    .getJSON<{ token: string }>('configs', 'token')
    .then(({ token }) => token)
}
