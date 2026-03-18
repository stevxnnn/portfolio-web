'use client'

import { useEffect, useState } from 'react'
import Window98 from '@/components/Window98'
import DesktopIcon from '@/components/DesktopIcon'
import Taskbar, { TaskbarItem } from '@/components/Taskbar'

// Import content sections
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

interface WindowState {
  id: string
  title: string
  isOpen: boolean
  isMinimized: boolean
  isActive: boolean
  icon: React.ReactNode
  content: React.ReactNode
  defaultPosition: { x: number; y: number }
  defaultSize: { width: string | number; height: string | number }
}

export default function Home() {
  const [windows, setWindows] = useState<WindowState[]>([
    {
      id: 'welcome',
      title: 'Welcome.exe',
      isOpen: true, // Open by default
      isMinimized: false,
      isActive: true,
      icon: <img src="/icons/computer_explorer-4.png" alt="Welcome" className="w-full h-full object-contain pointer-events-none" />,
      content: <Hero />,
      defaultPosition: { x: 50, y: 50 },
      defaultSize: { width: 500, height: 400 }
    },
    {
      id: 'about',
      title: 'About Me.txt',
      isOpen: false,
      isMinimized: false,
      isActive: false,
      icon: <img src="/icons/notepad-1.png" alt="About" className="w-full h-full object-contain pointer-events-none" />,
      content: <About />,
      defaultPosition: { x: 100, y: 80 },
      defaultSize: { width: 600, height: 500 }
    },
    {
      id: 'skills',
      title: 'Skills.sys',
      isOpen: false,
      isMinimized: false,
      isActive: false,
      icon: <img src="/icons/msdos-1.png" alt="Skills" className="w-full h-full object-contain pointer-events-none" />,
      content: <Skills />,
      defaultPosition: { x: 150, y: 110 },
      defaultSize: { width: 550, height: 450 }
    },
    {
      id: 'projects',
      title: 'Projects.exe',
      isOpen: false,
      isMinimized: false,
      isActive: false,
      icon: <img src="/icons/directory_open_file_mydocs-4.png" alt="Projects" className="w-full h-full object-contain pointer-events-none" />,
      content: <Projects />,
      defaultPosition: { x: 200, y: 140 },
      defaultSize: { width: 800, height: 600 }
    },
    {
      id: 'contact',
      title: 'Contact.net',
      isOpen: false,
      isMinimized: false,
      isActive: false,
      icon: <img src="/icons/message_envelope_open-1.png" alt="Contact" className="w-full h-full object-contain pointer-events-none" />,
      content: <Contact />,
      defaultPosition: { x: 250, y: 170 },
      defaultSize: { width: 500, height: 500 }
    }
  ])

  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false)

  useEffect(() => {
    const handleGlobalClick = () => setIsStartMenuOpen(false)
    window.addEventListener('click', handleGlobalClick)
    return () => window.removeEventListener('click', handleGlobalClick)
  }, [])

  const openWindow = (id: string) => {
    setWindows(prev => prev.map(w => {
      if (w.id === id) {
        return { ...w, isOpen: true, isMinimized: false, isActive: true }
      }
      return { ...w, isActive: false }
    }))
  }

  const closeWindow = (id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, isOpen: false, isActive: false } : w
    ))
  }

  const minimizeWindow = (id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, isMinimized: true, isActive: false } : w
    ))
  }

  const focusWindow = (id: string) => {
    setWindows(prev => prev.map(w => {
      if (w.id === id) {
        return { ...w, isActive: true, isMinimized: false }
      }
      return { ...w, isActive: false }
    }))
  }

  const toggleTaskbarItem = (id: string) => {
    const win = windows.find(w => w.id === id)
    if (!win) return
    if (win.isMinimized) {
      focusWindow(id)
    } else if (win.isActive) {
      minimizeWindow(id)
    } else {
      focusWindow(id)
    }
  }

  const activeWindows = windows.filter(w => w.isOpen)
  // Ensure the active window renders last so it's on top of non-active windows
  const sortedWindows = [...activeWindows].sort((a, b) => (a.isActive ? 1 : 0) - (b.isActive ? 1 : 0))

  const taskbarItems: TaskbarItem[] = activeWindows.map(w => ({
    id: w.id,
    title: w.title,
    icon: w.icon,
    isActive: w.isActive && !w.isMinimized
  }))

  return (
    <main className="h-[100dvh] w-full overflow-hidden bg-win-teal relative">
      {/* Desktop Icons Layer */}
      <div className="absolute top-4 left-4 z-0">
        {windows.map((win, i) => (
          <DesktopIcon 
            key={win.id}
            label={win.title}
            icon={win.icon}
            position={{ x: 0, y: i * 120 }}
            onDoubleClick={() => openWindow(win.id)}
          />
        ))}
      </div>

      {/* Windows Layer */}
      {sortedWindows.map(win => (
        <div key={win.id} className={win.isMinimized ? 'hidden' : 'block'}>
          <Window98
            id={win.id}
            title={win.title}
            icon={win.icon}
            isActive={win.isActive}
            onClose={() => closeWindow(win.id)}
            onMinimize={() => minimizeWindow(win.id)}
            onClick={() => focusWindow(win.id)}
            defaultPosition={win.defaultPosition}
            defaultSize={win.defaultSize}
          >
            {win.content}
          </Window98>
        </div>
      ))}

      {/* Start Menu */}
      {isStartMenuOpen && (
        <div 
          className="absolute bottom-10 left-0 w-[calc(100vw-0.5rem)] md:w-80 bg-win-gray win-border z-[70] flex flex-col p-1"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex">
            <div className="w-10 bg-gradient-to-b from-[#000080] to-[#1084d0] flex items-end p-2 overflow-hidden">
               <span className="text-white font-bold tracking-widest -rotate-90 origin-bottom-left whitespace-nowrap text-xl mb-2">
                 Windows 98
               </span>
            </div>
            <div className="flex-1 flex flex-col py-1">
              {windows.map(win => (
                <button
                  key={win.id}
                  onClick={() => {
                    openWindow(win.id)
                    setIsStartMenuOpen(false)
                  }}
                  className="flex items-center gap-4 px-4 py-3 hover:bg-[#000080] hover:text-white text-win-black text-base w-full text-left"
                >
                  <span className="w-8 h-8 flex items-center justify-center">{win.icon}</span>
                  <span className="font-sans font-bold">{win.title}</span>
                </button>
              ))}
              <div className="h-[1px] bg-white border-t border-win-shadow my-2 mx-2" />
              <button 
                onClick={() => window.open('https://github.com/stevxnnn', '_blank')}
                className="flex items-center gap-4 px-4 py-3 hover:bg-[#000080] hover:text-white text-win-black text-base w-full text-left"
              >
                <img src="/icons/shut_down_cool-5.png" alt="Shutdown" className="w-8 h-8 object-contain" />
                <span className="font-sans font-bold">Shut Down...</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Taskbar */}
      <Taskbar 
        items={taskbarItems} 
        onItemClick={toggleTaskbarItem} 
        onStartClick={(e) => {
          e.stopPropagation()
          setIsStartMenuOpen(!isStartMenuOpen)
        }} 
      />
    </main>
  )
}
