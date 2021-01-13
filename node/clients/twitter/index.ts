import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'
import { Tweet } from './../../typings/tweet'

export class TwitterClient extends ExternalClient {

  constructor (context: IOContext, options?: InstanceOptions) {
    super(
      'https://api.twitter.com',
      context,
      {
        ...(options ?? {}),
      }
    )
  }

  public search = async (token: string, searchTerm: string): Promise<Tweet[]> => {
    const result = await this.http.get(`/1.1/search/tweets.json?q=${searchTerm}&result_type=popular`, {
      headers: {
        'Authorization': token,
      },
    })
    return result.statuses.map((tweet: any) => {
      return {
        created_at: tweet.created_at,
        text: tweet.text,
        user: {
          name: tweet.user.name,
          profile_image: tweet.user.profile_image_url_https,
        },
      }
    })
  }

}
