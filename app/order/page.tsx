"use client";

import { useState, useMemo } from "react";
import { OrderTable } from "@/components/common/order-table";
import { OrderPagination } from "@/components/common/order-pagination";
import { mockOrders } from "@/data/orderData";

const ITEMS_PER_PAGE = 4;

export default function OrderHistoryPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedOrders = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return mockOrders.slice(startIndex, endIndex);
  }, [currentPage]);

  const totalPages = Math.ceil(mockOrders.length / ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col p-8">
      <h1 className="mb-8 text-2xl font-semibold text-gray-900">
        Order History
      </h1>
      <OrderTable orders={paginatedOrders} />
      <OrderPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
