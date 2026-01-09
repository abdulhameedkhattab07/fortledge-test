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
    <div className="bg-white border-gray-900/20 border-t lg:border-t-0 p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-lg font-semibold text-gray-800 mb-1">Order Time</p>
          <p className="text-sm text-gray-400">From 1-6 Dec, 2020</p>
        </div>
        <button className="text-indigo-600 text-sm font-medium px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
          View Report
        </button>
      </div>

      <div className="flex flex-col items-center justify-center mt-6">
        <div className="relative w-48 h-48 mb-6">
          <canvas ref={chartRef}></canvas>
        </div>

        <div className="flex items-center justify-center gap-6 w-full">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
              <span className="text-sm text-gray-600">Afternoon</span>
            </div>
            <span className="text-base font-bold text-gray-800">40%</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
              <span className="text-sm text-gray-600">Evening</span>
            </div>
            <span className="text-base font-bold text-gray-800">32%</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 bg-indigo-200 rounded-full"></div>
              <span className="text-sm text-gray-600">Morning</span>
            </div>
            <span className="text-base font-bold text-gray-800">28%</span>
          </div>
        </div>
      </div>
    </div>
  );
};