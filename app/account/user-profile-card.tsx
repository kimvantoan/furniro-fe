'use client';

import Link from 'next/link';

interface UserProfileCardProps {
  name: string;
  role: string;
}

export function UserProfileCard({ name, role }: UserProfileCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex flex-col items-center text-center">
        x
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-500 mb-4">{role}</p>
        <Link
          href="/settings"
          className="text-green-600 hover:text-green-700 text-sm font-medium"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
}
