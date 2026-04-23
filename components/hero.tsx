export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-120px)] flex items-center px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight max-w-2xl">
          <span className="text-foreground">A network of</span>
          <br />
          <span className="text-accent">Filipino scholars</span>
          <br />
          <span className="text-foreground">in Japan.</span>
        </h1>
      </div>

      {/* Gradient blob */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(224, 123, 84, 0.4) 0%, rgba(224, 123, 84, 0.2) 30%, rgba(253, 248, 243, 0) 70%)",
          filter: "blur(60px)",
          transform: "translate(20%, -40%)",
        }}
      />
    </section>
  );
}
