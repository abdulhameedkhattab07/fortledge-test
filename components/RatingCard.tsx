// RatingCard.tsx
export const RatingCard = () => (
  <div className="bg-white p-6 border-gray-900/20 border-t lg:border-t-0 lg:border-r">
    <p className="text-lg font-semibold text-gray-800 mb-2">Your Rating</p>
    <p className="text-sm text-gray-400 mb-6">
      Lorem ipsum dolor sit amet, consectetur
    </p>

    {/* Rating Bubbles Container */}
    <div className="relative w-full h-80 flex items-center justify-center">
      {/* Hygiene - Purple (Top Left) */}
      <div className="absolute" style={{ left: "10%", top: "15%" }}>
        <div className="relative">
          {/* Outer dashed border */}
          <div className="absolute inset-0 w-32 h-32 rounded-full border-2 border-dashed border-indigo-500"></div>
          {/* Inner solid circle */}
          <div className="w-32 h-32 rounded-full bg-indigo-500 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-white">85%</span>
            <span className="text-sm text-white mt-1">Hygiene</span>
          </div>
        </div>
      </div>

      {/* Food Taste - Orange (Right) */}
      <div className="absolute" style={{ right: "10%", top: "20%" }}>
        <div className="relative">
          {/* Outer dashed border */}
          <div className="absolute inset-0 w-44 h-44 rounded-full border-2 border-dashed border-orange-400"></div>
          {/* Inner solid circle */}
          <div className="w-44 h-44 rounded-full bg-orange-400 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-white">85%</span>
            <span className="text-base text-white mt-1">Food Taste</span>
          </div>
        </div>
      </div>

      {/* Packaging - Cyan (Bottom Left) */}
      <div className="absolute" style={{ left: "0%", bottom: "0%" }}>
        <div className="relative">
          {/* Outer dashed border */}
          <div className="absolute inset-0 w-36 h-36 rounded-full border-2 border-dashed border-cyan-400"></div>
          {/* Inner solid circle */}
          <div className="w-36 h-36 rounded-full bg-cyan-400 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-white">92%</span>
            <span className="text-sm text-white mt-1">Packaging</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
