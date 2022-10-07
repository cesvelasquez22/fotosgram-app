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

export interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
}
