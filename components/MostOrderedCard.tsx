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
    <div className="bg-white p-4 sm:p-6 border-t lg:border-t-0 lg:border-r border-gray-200">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <p className="text-sm sm:text-base font-semibold text-gray-800">Most Ordered Food</p>
      </div>
      
      <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
        Adipiscing elit, sed do eiusmod tempor
      </p>
      
      <div className="space-y-3 sm:space-y-4">
        {foods.map((food, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white rounded-lg shadow-sm">
                {food.icon}
              </div>
              <p className="text-sm sm:text-base font-medium text-gray-800">{food.name}</p>
              <p className="text-xs text-gray-500">{food.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};