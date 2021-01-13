export const search = async (_: any, __: any, { clients: { twitter, vbase } }: Context) => {
  const { token }  = await vbase.getJSON<{ token: string }>('configs', 'token')
  const { config: { searchTerm }}  = await vbase.getJSON<{ config: { searchTerm: string} }>('configs', 'config')
  return await twitter.search(token, searchTerm)
}
