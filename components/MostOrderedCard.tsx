import { FoodItem } from "..";

interface MostOrderedFoodItem extends Omit<FoodItem, 'img'> {
  icon: React.ReactNode;
}

interface MostOrderedCardProps {
  foods: MostOrderedFoodItem[];
}

export const MostOrderedCard = ({ foods }: MostOrderedCardProps) => {
  return (
    <div className="bg-white p-6 border-gray-900/20 border-r">
      <div className="flex items-start justify-between mb-2">
        <p className="text-sm font-semibold text-gray-800">
          Most Ordered Food
        </p>
      </div>
      <p className="text-sm text-gray-900 mb-5">
        Adipiscing elit, sed do eiusmod tempor
      </p>
      <div className="space-y-3">
        {foods.map((food, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 border-gray-900/20 border-b py-4 last:border-b-0"
          >
            <div className="flex items-center justify-center w-8">
              {food.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">
                {food.name}
              </p>
            </div>
            <p className="text-xs text-gray-600">{food.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};