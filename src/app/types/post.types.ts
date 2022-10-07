export interface Post {
  ok: boolean;
  page: number;
  results: number;
  posts: PostElement[];
}

export interface PostElement {
  _id: string;
  message: string;
  imgs: string[];
  coords: string;
  user: User;
  created: string;
  img?: string[];
}

export interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
}
