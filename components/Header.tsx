import { Menu as MenuIcon, ChevronDown, Bell, Search, Utensils } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="bg-white border-gray-900/20 border-b px-6 py-3.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            className="lg:hidden mr-4 text-gray-500 hover:text-gray-700"
            onClick={onMenuClick}
          >
            <MenuIcon size={20} />
          </button>

          <div className="relative w-full sm:max-w-xl">
            <input
              type="text"
              placeholder="Search"
              className="sm:w-[625px] max-w-full h-[32px] pl-2 pr-10 py-4.5 text-sm border border-gray-200 text-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-100 focus:border-indigo-300"
            />
            <Search size={20} className="absolute right-3 top-2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 px-3 py-1.5 bg-orange-50 rounded-lg border border-orange-100">
            <Utensils className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-medium">Delicious Burger</span>
            <ChevronDown size={16} className="text-gray-500" />
          </div>

          <button className="relative p-1.5 rounded-full hover:bg-gray-100">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-[10px] font-medium text-white flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};