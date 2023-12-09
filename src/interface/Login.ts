import { User } from "./User";

export interface Login {
  status: string;
  isFetching: boolean;
  error: boolean;
  access_token: string | null;
  refresh_token: string | null;
  user: User | null;
  username: string;
  password: string;
  credential: string;
}
