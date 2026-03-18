'use client'

import { useEffect, useState } from 'react'
import Window98 from '@/components/Window98'
import DesktopIcon from '@/components/DesktopIcon'
import Taskbar, { TaskbarItem } from '@/components/Taskbar'

// Import content sections
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects, { Project } from '@/components/Projects'
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

  // NEW: Dynamic Window creation logic for embedded viewers
  const handleOpenProject = (project: Project) => {
    const windowId = `project-${project.headline.replace(/\s+/g, '-').toLowerCase()}`;
    
    // If window exists, focus it
    if (windows.some(w => w.id === windowId)) {
      focusWindow(windowId);
      return;
    }

    // Determine the source URL
    let iframeSrc = '';
    if (project.duneEmbed) {
      iframeSrc = `https://dune.com/embeds/${project.duneEmbed}`;
    } else if (project.embedUrl) {
      iframeSrc = project.embedUrl;
    } else {
      iframeSrc = project.link;
    }

    const isGithub = iframeSrc.includes('github.com');
    const isMobile = window.innerWidth < 768;

    const newWindow: WindowState = {
      id: windowId,
      title: `Internet Explorer - ${project.headline}`,
      isOpen: true,
      isMinimized: false,
      isActive: true,
      icon: <img src="/icons/computer_explorer-4.png" alt="IE" className="w-full h-full object-contain pointer-events-none" />,
      content: (
        <div className="w-full h-full bg-[#c0c0c0] flex flex-col font-sans">
          {/* Mock IE Address Bar */}
          <div className="flex items-center gap-2 p-1 border-b border-[#808080]">
            <span className="text-sm mx-1 text-black">Address</span>
            <div className="bg-white border border-[#808080] px-2 py-[2px] w-full font-mono text-xs md:text-sm text-black truncate shadow-[inset_1px_1px_0_rgba(0,0,0,0.5)]">
              {iframeSrc}
            </div>
          </div>
          {/* IFrame View */}
          <div className="flex-1 overflow-auto bg-white p-[2px] shadow-[inset_1px_1px_0_0_#808080,inset_-1px_-1px_0_0_#ffffff]">
             {isGithub ? (
                <div className="flex flex-col items-center justify-center p-8 text-center h-full text-black bg-win-gray border-4 border-double border-[#808080] m-4">
                  <span className="text-4xl mb-4">⚠️</span>
                  <h2 className="font-bold text-xl mb-2">Access Denied by Host</h2>
                  <p className="max-w-[400px]">GitHub repositories actively block embedded external viewing due to their X-Frame-Options security policies.</p>
                  <button 
                    onClick={() => window.open(iframeSrc, '_blank')}
                    className="mt-6 win-button px-6 py-2 font-bold"
                  >
                    Open in external tab ↗
                  </button>
                </div>
             ) : (
                <iframe src={iframeSrc} className="w-full h-full border-none bg-white" title={project.headline} />
             )}
          </div>
        </div>
      ),
      defaultPosition: { x: isMobile ? 0 : 50, y: isMobile ? 0 : 50 },
      defaultSize: { width: isMobile ? '100vw' : 850, height: isMobile ? 'calc(100vh - 40px)' : 600 }
    };
    
    setWindows([...windows, newWindow]);
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
            {win.id === 'projects' ? <Projects onOpenProject={handleOpenProject} /> : win.content}
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
