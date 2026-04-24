export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 overflow-hidden pt-20">
      {/* Background blobs with grain texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Peach/Red blob - Solid color + Extreme Blur */}
        <div 
          className="absolute right-[15%] top-[5%] w-[450px] h-[450px] rounded-full mix-blend-normal blur-[120px] opacity-45 animate-pulse"
          style={{ 
            backgroundColor: "#ec4e20",
            animationDuration: '8s'
          }}
        />
        {/* Bottom Yellow/Orange blob - Solid color + Extreme Blur */}
        <div 
          className="absolute right-[-2%] top-[60%] w-[550px] h-[550px] rounded-full mix-blend-normal blur-[140px] opacity-40 animate-pulse"
          style={{ 
            backgroundColor: "#ff9505",
            animationDuration: '10s',
            animationDelay: '2s'
          }}
        />
        
        {/* Enhanced Grain Overlay - Using multiply for better integration */}
        <div 
          className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <h1 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight max-w-3xl">
          <span className="text-foreground block mb-1">A network of</span>
          <span className="text-accent block mb-1">Filipino scholars</span>
          <span className="flex items-center gap-3 flex-wrap">
            <span className="text-foreground">in</span>
            <span className="text-highlight">Japan.</span>
          </span>
        </h1>
      </div>
    </section>
  );
}
