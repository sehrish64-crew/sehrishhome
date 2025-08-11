import { useRouter } from "next/router";
import { LogOut } from "lucide-react";

export default function LogoutButton({ onClose }: { onClose?: () => void }) {
  const router = useRouter();

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("token");

    // Optional: close menu/sidebar
    onClose?.();

    // Navigate to login page only if not already there
    if (router.pathname !== "/login") {
      router.push("/login");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
    >
      <LogOut className="w-5 h-5" />
      <span>Log out</span>
    </button>
  );
}
