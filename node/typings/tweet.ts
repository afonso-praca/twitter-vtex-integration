export interface TwitterUser {
  name: string
  profile_image: string
}

export interface Tweet {
  text: string
  created_at: string
  user: TwitterUser
}
