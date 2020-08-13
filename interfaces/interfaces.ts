export interface PostLink {
  title: string;
  id: number | string;
}
export interface MyPost extends PostLink {
  body: string;
}
export interface Posts {
  posts: MyPost[];
  data?: MyPost[];
}
export interface AppState {
  posts: MyPost[] | [];
  loading: boolean;
  error: boolean | string;
}
export interface InitialState {
  posts: MyPost[] | [];
}
export interface NewPost {
  title: string;
  body: string;
}
