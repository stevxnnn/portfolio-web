'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface DesktopIconProps {
  label: string
  icon: React.ReactNode
  onDoubleClick: () => void
  position?: { x: number; y: number }
}

export default function DesktopIcon({ label, icon, onDoubleClick, position }: DesktopIconProps) {
  const [isSelected, setIsSelected] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    const handleGlobalClick = () => setIsSelected(false)
    window.addEventListener('click', handleGlobalClick)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('click', handleGlobalClick)
    }
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (isMobile) {
      onDoubleClick()
    } else {
      setIsSelected(true)
    }
  }

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={position}
      className={`absolute flex flex-col items-center gap-2 w-24 p-2 cursor-pointer z-0 group ${isSelected ? 'opacity-100' : ''}`}
      onClick={handleClick}
      onDoubleClick={(e) => { e.stopPropagation(); if(!isMobile) onDoubleClick() }}
    >
      <div className={`w-12 h-12 flex items-center justify-center pointer-events-none [&>svg]:w-10 [&>svg]:h-10 ${isSelected ? '[filter:contrast(0.5)_brightness(1.5)]' : 'group-hover:brightness-90'}`}>
        {icon}
      </div>
      <span 
        className={`text-center leading-tight px-1 font-sans text-sm pointer-events-none
          ${isSelected ? 'bg-[#000080] text-white border-dotted border border-white filter-none drop-shadow-none' : 'bg-transparent text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] border border-transparent'}
        `}
      >
        {label}
      </span>
    </motion.div>
  )
}
