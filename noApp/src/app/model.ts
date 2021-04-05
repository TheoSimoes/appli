export class Quote {
  quote: string;
  author?: string;
  editor?: string;
  writing?: string;
  date?: Date;
  language: string;
  owner: User;
  favoritedTimes: number;
  userFav: User[]
}

export class User {
  username: string;
  mail: string;
  password: string;
}