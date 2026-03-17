import { UserProfileCard } from './user-profile-card';
import { RecentOrders } from './resent-order';
import { mockOrders } from '@/data/orderData';

export const metadata = {
  title: 'Dashboard',
  description: 'Your dashboard',
};

export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* User Profile Card */}
        <div>
          <UserProfileCard
            name="Dianne Russell"
            role="Customer"
          />
        </div>

      </div>

      {/* Recent Orders Section */}
      <RecentOrders orders={mockOrders} />
    </div>
  );
}
