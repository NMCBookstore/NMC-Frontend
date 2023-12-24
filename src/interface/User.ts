export interface User {
  id: number;
  username: string;
  full_name: string;
  email: string;
  image: string;
  age: number;
  sex: string;
  phone_number: string;
  role: string;
  is_email_verified: boolean;
}

export interface Rank {
  rank: string;
  vote: number;
  review: number;
}
