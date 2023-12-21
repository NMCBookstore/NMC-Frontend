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
}

export interface ReviewResponse {
  total_page: number;
  reviews: Review[];
}