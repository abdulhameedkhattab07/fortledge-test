// In Sidebar.tsx
"use client";

import { BarChart3, ShoppingBag, Menu as MenuIcon, Settings, CreditCard, Users, HelpCircle, X } from "lucide-react";

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
      className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 shadow-lg lg:shadow-none
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0 bg-white' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
      `}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
            G
          </div>
          <span className="font-bold text-gray-800">GOODFOOD</span>
        </div>
        <button 
          onClick={onClose} 
          className="lg:hidden p-1 -mr-1 text-gray-500 hover:text-gray-700"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="p-4">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3 px-2">Menu</p>
        <div className="space-y-1">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm
                transition-colors duration-200
                ${
                  item.active
                    ? 'bg-indigo-50 text-indigo-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }
              `}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-6 mb-3 px-2">Others</p>
        <div className="space-y-1">
          {otherItems.map((item, idx) => (
            <button
              key={idx}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors duration-200"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </aside>
  );
};