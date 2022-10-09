import { User } from './user.types';

export interface PostResponse {
  ok: boolean;
  page: number;
  results: number;
  posts: Post[];
}

export interface Post {
  _id: string;
  message: string;
  imgs: string[];
  coords: string;
  user: User;
  created: string;
}
