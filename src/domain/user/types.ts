export interface User {
  id: string;
  username: string;
  role: Role;
}

export enum Role {
  admin = 'admin',
  employee = 'employee'
}

export interface Credentials {
  username: string;
  password: string;
} 