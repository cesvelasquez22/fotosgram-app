import { User } from './post.types';

export interface AvatarSlide {
  img: string;
  selected: boolean;
}

export interface TokenResponse {
  ok: boolean;
  token: string;
  message?: string;
}

export interface Credentials extends User {
  password: string;
}
