import { IOClients } from '@vtex/api'
import { TwitterClient } from './twitter'
export class Clients extends IOClients {
  get twitter() {
    return this.getOrSet('twitter', TwitterClient)
  }
}
