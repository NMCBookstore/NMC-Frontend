import { User } from "./User";

export interface Login {
  isFetching: boolean;
  error: boolean;
  access_token: string | null;
  user: User | null;
  username: string;
  password: string;
}
