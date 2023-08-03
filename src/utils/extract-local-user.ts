import { ILocalUser, IUser } from "../interfaces";

export const extractLocalUser = (user: IUser): ILocalUser => ({
  login: user.login,
  id: user.id,
  avatar: user.avatar_url,
  url: user.url,
  name: user.name,
  company: user.company,
  blog: user.blog,
  location: user.location,
  email: user.email,
  bio: user.bio,
  twitter: user.twitter_username,
  repos: user.public_repos,
  followers: user.followers,
  following: user.following,
  created: user.created_at,
});
