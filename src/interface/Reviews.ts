export interface Review {
  id: number;
  username: string;
  image: string;
  books_id: number;
  comments: string;
  rating: number;
  created_at: string;
  like: number;
  dislike: number;
  is_like: boolean;
  is_dislike: boolean;
  is_deleted: boolean;
}

export interface ReviewResponse {
  total_page: number;
  reviews: Review[];
}
