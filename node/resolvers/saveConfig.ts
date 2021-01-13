export const saveConfig = async(_: any, config: { searchTerm: string }, ctx: Context) => {
  return ctx.clients.vbase
    .saveJSON('configs', 'config', config)
    .then((__) => {
      return 'success'
  })
}
