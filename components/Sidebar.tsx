"use client";

import {
  BarChart3,
  ShoppingBag,
  Menu as MenuIcon,
  Settings,
  CreditCard,
  Users,
  HelpCircle,
  X,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const menuItems = [
    { icon: BarChart3, label: "Dashboard", active: true },
    { icon: ShoppingBag, label: "Food Order" },
    { icon: MenuIcon, label: "Manage Menu" },
    { icon: Users, label: "Customer Review" },
  ];

  const otherItems = [
    { icon: Settings, label: "Settings" },
    { icon: CreditCard, label: "Payment" },
    { icon: Users, label: "Accounts" },
    { icon: HelpCircle, label: "Help" },
  ];

  return (
    <aside
      className={`${
        isOpen ? "translate-x-0 bg-white" : "-translate-x-full"
      } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 shadow-sm transition-transform duration-300`}
    >
      <div className="flex items-center justify-between p-4 py-3.5 border-gray-900/20 border-b">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
            G
          </div>
          <span className="font-bold text-gray-800">GOODFOOD</span>
        </div>
        <button onClick={onClose} className="lg:hidden">
          <X />
        </button>
      </div>

      <nav className="p-4">
        <div className="mb-6">
          <p className="text-xs text-gray-400 mb-3 px-3">MENU</p>
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                item.active
                  ? "bg-indigo-50 text-indigo-600 font-medium"
                  : "text-gray-600 hover:bg-gray-150"
              }`}
            >
              <item.icon size={20} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        <div>
          <p className="text-xs text-gray-400 mb-3 px-3">OTHERS</p>
          {otherItems.map((item, idx) => (
            <button
              key={idx}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 text-gray-600 hover:bg-gray-150 transition-colors"
            >
              <item.icon size={20} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </aside>
  );
};