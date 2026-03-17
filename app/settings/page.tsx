import { AccountSettingsForm } from "./account-setting-form";
import { ChangePasswordForm } from "./change-pass-form";

export const metadata = {
  title: 'Settings | Account',
  description: 'Manage your account settings and password',
};

export default function SettingsPage() {
  return (
    <div className="w-full bg-gray-50 p-8">
      <div className="space-y-8">
        {/* Account Settings Section */}
        <AccountSettingsForm />

        {/* Change Password Section */}
        <ChangePasswordForm />
      </div>
    </div>
  );
}
