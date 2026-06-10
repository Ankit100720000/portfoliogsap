import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80",
  "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
];

export default function Explorations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the center content
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      // Parallax columns
      gsap.to(leftColRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.to(rightColRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[300vh] bg-bg overflow-hidden">
      
      {/* Layer 1: Pinned Center */}
      <div ref={contentRef} className="absolute inset-0 h-screen w-full flex flex-col items-center justify-center z-10 pointer-events-none px-4 text-center">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">Explorations</span>
          <div className="w-8 h-px bg-stroke" />
        </div>
        <h2 className="text-6xl md:text-8xl lg:text-9xl text-text-primary tracking-tight pointer-events-auto">
          Visual <span className="font-display italic">playground</span>
        </h2>
        <button className="mt-8 px-6 py-3 rounded-full border border-stroke text-sm hover:bg-surface transition-colors pointer-events-auto">
          View on Dribbble
        </button>
      </div>

      {/* Layer 2: Parallax Columns */}
      <div className="relative z-20 w-full h-full max-w-[1400px] mx-auto px-6 pt-[50vh] pb-[50vh] pointer-events-none">
        <div className="grid grid-cols-2 gap-12 md:gap-40 items-start">
          {/* Left Column */}
          <div ref={leftColRef} className="flex flex-col gap-12 md:gap-40 mt-32 pointer-events-auto">
            {items.slice(0, 3).map((img, i) => (
              <div key={i} className="group relative w-full aspect-square max-w-[320px] mx-auto overflow-hidden rounded-2xl bg-surface border border-stroke rotate-[-2deg] hover:rotate-0 hover:z-30 transition-all duration-500 cursor-pointer shadow-2xl shadow-black/50">
                <img src={img} alt="Exploration" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div ref={rightColRef} className="flex flex-col gap-12 md:gap-40 pointer-events-auto">
            {items.slice(3, 6).map((img, i) => (
              <div key={i} className="group relative w-full aspect-square max-w-[320px] mx-auto overflow-hidden rounded-2xl bg-surface border border-stroke rotate-[3deg] hover:rotate-0 hover:z-30 transition-all duration-500 cursor-pointer shadow-2xl shadow-black/50">
                <img src={img} alt="Exploration" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
