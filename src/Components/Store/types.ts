
export type AuthData = {
  userAuth: {
    name: null | string;
    password: null | string;
    email: null | string;

}};
export type LoginSchema = {
  name: string;
  password: string;
  email: string;
}

export interface LoginBody {
  name: string;
  password: string;
  email: string;
}
