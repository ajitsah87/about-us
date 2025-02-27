"use client"

import React, { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
}

interface TabNavbarProps {
  items: NavItem[]
  className?: string
}

export function TabNavbar({ items, className }: TabNavbarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)

  return (
    <div className={cn("w-full flex justify-center", className)}>
      <div className="flex items-center gap-2 bg-[#f3f2fb] border border-gray-300 backdrop-blur-lg py-1 px-1 rounded-full shadow-md mt-8">
        {items.map((item) => {
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-6 max-md:px-4 py-2 rounded-full transition-all",
                isActive
                  ? "bg-white shadow text-gray-800"
                  : "text-gray-500 hover:text-gray-700"
              )}
            >
              {item.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
