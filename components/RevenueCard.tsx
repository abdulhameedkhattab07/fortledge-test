"use client";

import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

// Register all Chart.js components
Chart.register(...registerables);

interface RevenueCardProps {
  chartRef: React.RefObject<HTMLCanvasElement | null>;
}

export const RevenueCard = ({ chartRef }: RevenueCardProps) => {
  const instance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        instance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["01","02","03","04","05","06","07","08","09","10","11","12"],
            datasets: [
              {
                label: "Last 6 days",
                data: [65,45,70,50,85,95,75,60,55,65,90,95],
                backgroundColor: "#6366F1",
                borderRadius: 4,
                barThickness: 12,
              },
              {
                label: "Last Week",
                data: [50,35,60,40,70,80,65,50,45,55,75,80],
                backgroundColor: "#E5E7EB",
                borderRadius: 4,
                barThickness: 12,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: true, position: "bottom", labels: { usePointStyle: true, pointStyle: "circle", padding: 20 } },
            },
            scales: { y: { display: false, beginAtZero: true }, x: { grid: { display: false } } },
          },
        });
      }
    }
    return () => instance.current?.destroy();
  }, [chartRef]);

  return (
    <div className="bg-white p-6 lg:col-span-2 border-gray-900/20 lg:border-r">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Revenue</p>
          <h2 className="text-2xl font-bold text-gray-800">IDR 7.852.000</h2>
          <div className="flex items-center mt-1">
            <span className="text-xs text-green-500 bg-green-50 px-2 py-0.5 rounded-full flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 01.707.293l5 5a1 1 0 01-1.414 1.414L12 9.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5A1 1 0 0112 7z" clipRule="evenodd" />
              </svg>
              2.1% vs last week
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1.5">Sales from 1-12 Dec, 2020</p>
        </div>
        <button className="px-3 py-1.5 text-sm text-indigo-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          View Report
        </button>
      </div>
      <div className="h-64">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};