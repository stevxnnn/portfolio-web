'use client'

export default function Hero() {
  return (
    <div className="flex flex-col h-full bg-win-gray p-1 relative overflow-hidden text-win-black font-sans text-base pb-8">
      <div className="flex-1 border-2 border-l-win-shadow border-t-win-shadow border-r-win-highlight border-b-win-highlight bg-win-blue p-8 flex flex-col items-center justify-center text-center m-1">
        <h1 className="text-4xl md:text-6xl font-display text-white tracking-widest mb-6 drop-shadow-[2px_2px_0_#000000]">
          STEVEN 
          <br/>
          LIEW
        </h1>
        <div className="bg-win-gray text-win-black px-4 py-2 text-lg win-border-sunken font-bold mb-6 tracking-wide drop-shadow-sm">
          ON-CHAIN DATA ANALYST
        </div>
        <p className="max-w-xl mx-auto leading-relaxed mb-8 font-sans text-win-highlight text-lg bg-[rgba(0,0,0,0.4)] p-3 border border-[#808080]">
          Rigorous enough for the boardroom. Sharp enough for the trenches.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a href="https://dune.com/zardy" target="_blank" rel="noopener noreferrer" className="win-button px-6 py-3 flex items-center gap-2 active:translate-y-[1px] font-bold text-win-black no-underline text-base">
            <span className="text-base font-bold">»</span> View Dune Dashboards
          </a>
        </div>
      </div>
    </div>
  )
}
