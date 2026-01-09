"use client";

import { FoodItem } from "..";

interface MostOrderedFoodItem extends Omit<FoodItem, 'img'> {
  icon: React.ReactNode;
}

interface MostOrderedCardProps {
  foods: MostOrderedFoodItem[];
}

export const MostOrderedCard = ({ foods }: MostOrderedCardProps) => {
  return (
    <div className="bg-white p-4 sm:p-6 border-t border-gray-200 lg:border-t-0 lg:border-r border-gray-200">
      <div className="flex items-start justify-between mb-2">
        <p className="text-sm font-semibold text-gray-800">
          Most Ordered Food
        </p>
      </div>
      <p className="text-sm text-gray-500 mb-4 sm:mb-5">
        Adipiscing elit, sed do eiusmod tempor
      </p>
      <div className="space-y-3">
        {foods.map((food, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                {food.icon}
              </div>
              <p className="text-sm font-medium text-gray-800">{food.name}</p>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">{food.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};