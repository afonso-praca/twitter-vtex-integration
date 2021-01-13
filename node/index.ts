import {
  ParamsContext,
  RecorderState,
  Service,
  ServiceContext,
} from '@vtex/api'

import { Clients } from './clients'
import { getConfig } from './resolvers/getConfig'
import { getToken } from './resolvers/getToken'
import { saveConfig } from './resolvers/saveConfig'
import { saveToken } from './resolvers/saveToken'
import { search } from './resolvers/search'

const MEDIUM_TIMEOUT_MS = 2 * 1000

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients>
}

// Export a service that defines resolvers and clients' options
export default new Service<Clients, RecorderState, ParamsContext>({
  clients: {
    implementation: Clients,
    options: {
      default: {
        timeout: MEDIUM_TIMEOUT_MS,
      },
    },
  },
  graphql: {
    resolvers: {
      Mutation: {
        config: saveConfig,
        token: saveToken,
      },
      Query: {
        config: getConfig,
        search,
        token: getToken,
      },
    },
  },
})
