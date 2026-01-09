"use client";

import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";

interface OrderTimeCardProps {
  chartRef: React.RefObject<HTMLCanvasElement | null>;
}

export const OrderTimeCard = ({ chartRef }: OrderTimeCardProps) => {
  const instance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        instance.current = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: ["Afternoon", "Evening", "Morning"],
            datasets: [{
              data: [40, 32, 28],
              backgroundColor: ["#6366F1", "#A5B4FC", "#E0E7FF"],
              borderWidth: 0,
            }],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: "70%",
            plugins: { legend: { display: false }, tooltip: { enabled: true } },
          },
        });
      }
    }
    return () => instance.current?.destroy();
  }, [chartRef]);

  return (
    <div className="bg-white p-4 sm:p-6 border-t lg:border-t-0 border-gray-200">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Order Time</p>
          <p className="text-xs sm:text-sm text-gray-500">From 1-6 Dec, 2020</p>
        </div>
        <button className="px-3 py-1.5 text-sm text-indigo-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          View Report
        </button>
      </div>

      <div className="relative h-48 sm:h-56 md:h-64 flex items-center justify-center">
        <canvas ref={chartRef} />
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <p className="text-sm sm:text-base font-medium text-gray-500">Afternoon</p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-800">1,890</p>
          <p className="text-xs text-gray-400">orders</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4 sm:mt-6 pt-4 border-t border-gray-100">
        {[
          { label: "Afternoon", value: "40%", color: "bg-indigo-600" },
          { label: "Evening", value: "32%", color: "bg-indigo-400" },
          { label: "Morning", value: "28%", color: "bg-indigo-200" },
        ].map((item, idx) => (
          <div key={idx} className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-1">
              <div className={`w-2.5 h-2.5 rounded-full ${item.color}`}></div>
              <span className="text-xs text-gray-500">{item.label}</span>
            </div>
            <p className="text-sm font-medium text-gray-800">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};