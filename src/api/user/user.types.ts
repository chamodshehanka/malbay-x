export type signUpData = {
  name: string;
  address: string;
  email: string;
  password: string;
  isEmpty: () => void;
}

export type signInData = {
  email: string;
  password: string;
  isEmpty: () => void;
}

export type ApiRes = {
  data?: string;
  errors?: string;
}
