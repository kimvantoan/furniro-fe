export type OrderStatus = 'Processing' | 'On the way' | 'Completed';

export interface Order {
  id: string;
  date: string;
  total: number;
  productCount: number;
  status: OrderStatus;
}
