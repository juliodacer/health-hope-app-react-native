export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  name: string;
  password: string;
  role: string;
  gender: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface UsersResponse {
  total: number;
  users: User[];
}

export interface User {
  name: string;
  email: string;
  password: string;
  gender?: string,
  age?: number;
  birthDate?: string;
  cell?: string;
  address?: string;
  occupation?: string;
  role: string;
  status: boolean;
  google: boolean;
  uid: string;
  img?: string;
}

//Habitos
export interface HabitsResponse {
  total: number;
  habits: Habit[];
}

export interface Habit {
  _id: string;
  name: string;
  description: string;
  date: string;
  perform: string;
  img?: string;
  user: User;
  plan: Plan;
}

export interface Plan {
  _id: string;
  name: string;
}
