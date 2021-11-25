
export interface LoginData {
    email: string;
    password: string;
}

export interface LoginResponse {
    user:  User;
    token: string;
}

export interface User {
    name:     string;
    email:    string;
    password: string;
    role:     string;
    status:   boolean;
    google:   boolean;
    uid:      string;
}
