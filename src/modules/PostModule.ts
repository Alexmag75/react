export interface PostModule {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
}
 interface Reactions {
  likes: number;
  dislikes: number;
}