export interface IArticle {
  id: number;
  author: {
    id: number;
    name: string;
    title: string;
    company: string;
    additional_role: string;
    avatar_url: string;
  };
  content: {
    text: string;
  };
  engagement: {
    time_posted: string;
    reactions: {
      celebrate: number;
      support: number;
      likes: number;
    };
    comments: number;
    reposts: number;
  };
}
export type ReactionType =
  | "like"
  | "heart"
  | "question"
  | "support"
  | "insight";
