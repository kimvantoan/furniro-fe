"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface AccountData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar?: string;
}

export function AccountSettingsForm() {
  const [data, setData] = useState<AccountData>({
    firstName: "Dianne",
    lastName: "Russell",
    email: "dionne.russell@gmail.com",
    phone: "(603) 555-0123",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setData((prev) => ({
          ...prev,
          avatar: event.target?.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    console.log("Saved account settings:", data);
  };

  return (
    <div className="space-y-8 rounded-lg bg-white p-8">
      {/* Header with Avatar */}
      <div className="flex items-start justify-between border-b border-gray-200 pb-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Account Settings
          </h2>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Họ tên
          </label>
          <Input
            name="name"
            placeholder="Nguyễn Văn A"
            onChange={handleChange}
            className="rounded-md border-stone-300 placeholder:text-stone-300 focus-visible:ring-primary text-sm py-5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <Input
            name="email"
            placeholder="t9gYV@example.com"
            onChange={handleChange}
            className="rounded-md border-stone-300 placeholder:text-stone-300 focus-visible:ring-primary text-sm py-5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Số điện thoại
          </label>
          <Input
            name="name"
            placeholder="0123456789"
            onChange={handleChange}
            className="rounded-md border-stone-300 placeholder:text-stone-300 focus-visible:ring-primary text-sm py-5"
          />
        </div>
      </div>

      {/* Save Button */}
      <div>
        <Button className="bg-[#b88e2f] hover:bg-[#9a7528] text-white px-10 py-5 rounded-md text-sm font-semibold tracking-wide transition-colors duration-200">
          Thay đổi
        </Button>
      </div>
    </div>
  );
}
