import { PostsDTO } from "../DTOs/postsDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Posts: undefined;
      Post: { post: PostsDTO };
    }
  }
}