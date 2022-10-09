export interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface AvatarSlide {
  img: string;
  selected: boolean;
}

export interface TokenResponse {
  ok: boolean;
  token: string;
  message?: string;
  user?: User;
}

export interface Credentials extends User {
  password: string;
}
