"use client";

import React, { useState, useRef } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { RevenueCard } from "./RevenueCard";
import { OrderTimeCard } from "./OrderTimeCard";
import { RatingCard } from "./RatingCard";
import { MostOrderedCard } from "./MostOrderedCard";
import { OrderStatsCard } from "./OrderStatsCard";
import { FoodItem } from "..";
import { Leaf, Soup, Coffee, Drumstick } from "lucide-react";

const mostOrderedFood: (Omit<FoodItem, 'img'> & { icon: React.ReactNode })[] = [
  { name: "Fresh Salad Bowl", price: "IDR 45.000", icon: <Leaf className="w-6 h-6 text-green-500" /> },
  { name: "Chicken Noodles", price: "IDR 75.000", icon: <Soup className="w-6 h-6 text-amber-600" /> },
  { name: "Smoothie Fruits", price: "IDR 45.000", icon: <Coffee className="w-6 h-6 text-blue-400" /> },
  { name: "Hot Chicken Wings", price: "IDR 45.000", icon: <Drumstick className="w-6 h-6 text-orange-500" /> },
];

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const revenueChartRef = useRef<HTMLCanvasElement>(null);
  const orderChartRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Layout */}
      <div className="flex-1 flex flex-col bg-white overflow-hidden">
        {/* Header */}
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            {/* Page Title */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <div className="text-sm text-gray-500">Tuesday 2 Feb, 2021</div>
            </div>

            {/* Top Row: Revenue + Order Time */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <RevenueCard chartRef={revenueChartRef} />
              <OrderTimeCard chartRef={orderChartRef} />
            </div>

            {/* Bottom Row: Rating + Most Ordered + Order Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 border-t border-gray-200">
              <RatingCard />
              <MostOrderedCard foods={mostOrderedFood} />
              <OrderStatsCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}