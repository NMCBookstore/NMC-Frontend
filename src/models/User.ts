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
  rank: number;
  created_at: string;
  is_email_verified: EmailVerify;
}

export type EmailVerify = true | false;
