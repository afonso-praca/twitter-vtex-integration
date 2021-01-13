export const saveToken = async(_: any, { token }: { token: string }, ctx: Context) => {
  return ctx.clients.vbase
    .saveJSON('configs', 'token', { token })
    .then((__) => 'success')
}
