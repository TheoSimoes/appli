export type Quote =  {
  quote: string,
  author?: string,
  editor?: string,
  writing?: string,
  date?: Date,
  language: string,
  owner: User,
  favoritedTimes: number,
  userFav: User[]
}

export type User = {
  username: string,
  mail: string,
  password: string,
}