export interface MyPost {
  title:string
  body:string
  id:number | string
}
export interface Posts {
  posts:MyPost[]
  data?:MyPost[]
}
export interface AppState {
  posts:MyPost[] | []
  loading: boolean
  error:boolean | string
}
export interface NewPost {
  title:string
  body:string
}
