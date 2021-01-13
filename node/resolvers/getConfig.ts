export const getConfig = async(_: any, __: any, ctx: Context) => {
  return ctx.clients.vbase
    .getJSON<any>('configs', 'config')
    .then((config) => {
      return config.config
    })
}
