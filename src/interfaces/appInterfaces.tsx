export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  name: string;
  password: string;
  role: string
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
  role: string;
  status: boolean;
  google: boolean;
  uid: string;
  img?: string;
}


//Habitos
export interface HabitsResponse {
  total:  number;
  habits: Habit[];
}

export interface Habit {
  _id:       string;
  name:      string;
  available: boolean;
  user:      Plan;
  plan:      Plan;
}

export interface Plan {
  _id:  string;
  name: string;
}
