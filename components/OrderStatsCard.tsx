"use client";

import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { PieChart } from "lucide-react";

// Register all Chart.js components
Chart.register(...registerables);

export const OrderStatsCard = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const instance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        instance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["01", "02", "03", "04", "05", "06"],
            datasets: [
              {
                label: "Last 6 days",
                data: [2800, 1400, 2300, 1800, 2500, 2368],
                borderColor: "#6366F1",
                backgroundColor: "transparent",
                tension: 0.4,
                pointRadius: 0,
                borderWidth: 3,
              },
              {
                label: "Last Week",
                data: [2400, 1800, 2450, 2150, 2600, 1500],
                borderColor: "#E5E7EB",
                backgroundColor: "transparent",
                tension: 0.4,
                pointRadius: 0,
                borderWidth: 3,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "bottom" as const,
                labels: {
                  usePointStyle: true,
                  pointStyle: "circle",
                  padding: 20,
                  font: { size: 12 },
                },
              },
              tooltip: { enabled: true },
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: "#9CA3AF", font: { size: 11 } },
              },
              y: {
                display: false,
                beginAtZero: true,
              },
            },
            interaction: {
              mode: "index",
              intersect: false,
            },
            animation: {
              duration: 800,
            },
          },
        });
      }
    }

    return () => {
      instance.current?.destroy();
    };
  }, []);

  return (
    <div className="bg-white p-4 sm:p-6 border-t lg:border-t-0 border-gray-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <PieChart className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500" />
          <div>
            <p className="text-sm sm:text-base font-semibold text-gray-800">Order</p>
            <p className="text-xs text-gray-500">Sales from 1-6 Dec, 2020</p>
          </div>
        </div>
        <button className="px-3 py-1.5 text-sm text-indigo-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          View Report
        </button>
      </div>
      <div className="flex items-end justify-between mb-2">
        <p className="text-2xl sm:text-3xl font-bold text-gray-800">2,568</p>
        <p className="text-xs sm:text-sm text-red-500 flex items-center">
          <span>↓</span>
          <span className="ml-1">2.1% vs last week</span>
        </p>
      </div>
      <div className="h-40 sm:h-48 -mx-2 sm:-mx-4">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};