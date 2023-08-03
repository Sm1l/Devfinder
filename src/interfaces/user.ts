export interface ILocalUser {
  login: string;
  id: number;
  avatar: string;
  url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string|null;
  bio: string;
  twitter: string;
  repos:number;
  followers: number;
  following: number;
  created: string;
}

export interface IUser {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string|null;
  bio: string;
  twitter_username: string;
  public_repos:number,
  followers: number;
  following: number;
  created_at: string;
}

export interface IUserError {
  message: string;
  documentation_url: string;
}
