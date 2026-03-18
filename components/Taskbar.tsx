'use client'

import React, { useState, useEffect } from 'react'

export interface TaskbarItem {
  id: string
  title: string
  icon?: React.ReactNode
  isActive: boolean
}

interface TaskbarProps {
  items: TaskbarItem[]
  onItemClick: (id: string) => void
  onStartClick?: (e: React.MouseEvent) => void
}

export default function Taskbar({ items, onItemClick, onStartClick }: TaskbarProps) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-0 left-0 right-0 h-10 win-border !border-l-0 !border-r-0 !border-b-0 bg-win-gray flex items-center justify-between px-1 z-[60]">
      <div className="flex items-center gap-2 h-full pr-2 pb-[2px] w-full min-w-0">
        {/* Start Button */}
        <button 
          onClick={onStartClick}
          className="win-button flex items-center gap-1 px-2 h-7 font-sans font-bold text-sm ml-1 flex-shrink-0"
        >
          <div className="grid grid-cols-2 gap-[1px] w-4 h-4 pb-[2px] pointer-events-none">
            <div className="bg-[#EF4444]" />
            <div className="bg-[#10B981]" />
            <div className="bg-[#3B82F6]" />
            <div className="bg-[#F59E0B]" />
          </div>
          <span>Start</span>
        </button>

        {/* Divider */}
        <div className="h-6 w-[2px] border-l border-l-win-shadow border-r border-r-win-highlight flex-shrink-0" />

        {/* Open Windows */}
        <div className="flex items-center gap-1 h-full flex-1 overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={`win-taskbar-item ${item.isActive ? 'active text-win-black bg-[#d4d0c8]' : 'text-win-black'} h-7 flex-shrink-0 max-w-[120px]`}
            >
              {item.icon && <span className="w-4 h-4 flex-shrink-0 pointer-events-none flex items-center justify-center">{item.icon}</span>}
              <span className="font-sans font-normal truncate pointer-events-none tracking-wide">{item.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* System Tray */}
      <div className="win-border-sunken h-7 px-3 flex items-center bg-win-gray mr-1 flex-shrink-0">
        <span className="font-sans text-xs tracking-wider font-bold">{time}</span>
      </div>
    </div>
  )
}
