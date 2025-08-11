// components/ChangePasswordForm.tsx
"use client";

import { useState } from "react";

export default function ChangePasswordForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-4xl bg-white rounded-2xl p-6 mr-10">
      <form className="space-y-6">
        {/* Current Password */}
        <div className="flex items-start gap-6">
          <label className="w-48 text-sm text-gray-700 mt-2">Current password</label>
          <input
            type={showPassword ? "text" : "password"}
            className="flex-1 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* New Password */}
        <div className="flex items-start gap-6">
          <label className="w-48 text-sm text-gray-700 mt-2">New password</label>
          <div className="flex-1">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Your new password must be more than 8 characters.
            </p>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex items-start gap-6">
          <label className="w-48 text-sm text-gray-700 mt-2">Confirm new password</label>
          <input
            type={showPassword ? "text" : "password"}
            className="flex-1 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Show Password Checkbox */}
        <div className="flex items-center gap-2 pl-48">
          <input
            id="showPassword"
            type="checkbox"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="showPassword" className="text-sm text-gray-700">
            Show Password
          </label>
        </div>
      </form>
    </div>
  )
}
