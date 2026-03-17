'use client';

import { Order } from '@/types/order';
import Link from 'next/link';

interface OrderTableProps {
  orders: Order[];
}

export function OrderTable({ orders }: OrderTableProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processing':
        return 'text-yellow-600';
      case 'On the way':
        return 'text-blue-600';
      case 'Completed':
        return 'text-gray-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Order ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Total
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {order.id}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {order.date}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                ${order.total.toFixed(2)} ({order.productCount} {order.productCount === 1 ? 'Product' : 'Products'})
              </td>
              <td className={`px-6 py-4 text-sm font-medium ${getStatusColor(order.status)}`}>
                {order.status}
              </td>
              <td className="px-6 py-4 text-sm">
                <Link
                  href={`/orders/${order.id}`}
                  className="font-medium text-green-600 hover:text-green-700 transition-colors"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
