// In Header.tsx
"use client";

import { Menu as MenuIcon, ChevronDown, Bell, Search, Utensils } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200 px-3 sm:px-6 py-3 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1 max-w-4xl">
          <button
            className="lg:hidden mr-2 text-gray-500 hover:text-gray-700 p-1 -ml-1"
            onClick={onMenuClick}
            aria-label="Toggle menu"
          >
            <MenuIcon className="w-5 h-5" />
          </button>

          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-9 sm:h-10 pl-3 pr-9 text-sm sm:text-base border border-gray-200 text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all"
              aria-label="Search"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3 ml-2 sm:ml-4">
          <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 bg-orange-50 rounded-lg border border-orange-100">
            <Utensils className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
            <span className="text-xs sm:text-sm font-medium text-gray-800 whitespace-nowrap">
              Delicious Burger
            </span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>

          <button 
            className="relative p-1.5 rounded-full hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] font-medium flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};