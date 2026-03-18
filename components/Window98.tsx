'use client'

import React, { useState, useEffect } from 'react'
import { motion, useDragControls } from 'framer-motion'
import { X, Minus, Square } from 'lucide-react'

interface Window98Props {
  id: string
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
  onClose: () => void
  onMinimize: () => void
  isActive: boolean
  onClick: () => void
  defaultPosition?: { x: number; y: number }
  defaultSize?: { width: number | string; height: number | string }
}

export default function Window98({
  id,
  title,
  icon,
  children,
  onClose,
  onMinimize,
  isActive,
  onClick,
  defaultPosition = { x: 50, y: 50 },
  defaultSize = { width: 600, height: 400 },
}: Window98Props) {
  const [isMaximized, setIsMaximized] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const dragControls = useDragControls()
  
  // For mobile, strict maximize enforcement
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (mobile) setIsMaximized(true)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <motion.div
      id={`window-${id}`}
      onClick={onClick}
      drag={!isMaximized}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      initial={defaultPosition}
      style={{
        width: defaultSize.width,
        height: defaultSize.height,
        zIndex: isActive ? 50 : 10,
        position: 'absolute',
      }}
      className={`win-border flex flex-col min-w-[300px] min-h-[200px] ${!isMaximized ? 'resize overflow-hidden' : ''} ${isActive ? 'shadow-2xl' : ''} ${isMaximized ? 'window-maximized !border-t-0 !border-l-0 !border-r-0 !border-b-0' : ''}`}
    >
      {/* Title Bar */}
      <div 
        className={`win-title-bar flex items-center justify-between px-1 py-[2px] cursor-default select-none ${isActive ? 'bg-win-blue text-white' : 'bg-win-shadow text-[#c0c0c0]'}`}
        onPointerDown={(e) => dragControls.start(e)}
        onDoubleClick={() => { if (!isMobile) setIsMaximized(!isMaximized) }}
      >
        <div className="flex items-center gap-1 overflow-hidden pointer-events-none">
          {icon && <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center">{icon}</span>}
          <span className="font-sans font-bold text-sm truncate tracking-wide">{title}</span>
        </div>
        <div className="flex items-center gap-[2px] ml-2">
          <button 
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onMinimize() }}
            className="win-button w-4 h-4 flex items-end justify-center pb-[2px] bg-win-gray text-win-black"
            aria-label="Minimize"
          >
            <Minus size={10} strokeWidth={4} />
          </button>
          <button 
            type="button"
            disabled={isMobile}
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); if (!isMobile) setIsMaximized(!isMaximized) }}
            className={`win-button w-4 h-4 flex items-center justify-center bg-win-gray text-win-black ${isMobile ? 'opacity-50 pointer-events-none' : ''}`}
            aria-label="Maximize"
          >
            <Square size={9} strokeWidth={3} />
          </button>
          <button 
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onClose() }}
            className="win-button w-4 h-4 flex items-center justify-center bg-win-gray text-win-black font-bold text-xs leading-none"
            aria-label="Close"
          >
            <X size={12} strokeWidth={4} />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-win-gray p-1 overflow-hidden flex flex-col">
        <div className="flex-1 win-border-sunken p-3 overflow-auto text-win-black relative font-sans leading-relaxed text-base bg-white">
          {children}
        </div>
      </div>
    </motion.div>
  )
}
