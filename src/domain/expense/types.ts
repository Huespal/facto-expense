export interface Expense {
  id: string;
  name: string;
  type: ExpenseType;
  status: ExpenseStatus;
  accommodation: ExpenseAccommodation | null;
  transportation: ExpenseTransportation | null;
  mileage: number | null;
  amount: number | null;
  createdAt: string;
}

export type ExpenseFormValues = Omit<Expense, 'id' | 'status' | 'createdAt'>;

export interface ExpenseAccommodation {
  hotelName: string;
  checkInDate: string;
  checkOutDate: string;
}

export interface ExpenseTransportation {
  mode: string;
  route: string;
}

export enum ExpenseType {
  regular = 'regular',
  travel = 'travel',
  mileage = 'mileage'
}

export enum ExpenseTravelType {
  other = 'other',
  accommodation = 'accommodation',
  transportation = 'transportation'
}

export enum ExpenseStatus {
  rejected = 'rejected',
  pending = 'pending',
  approved = 'approved'
}