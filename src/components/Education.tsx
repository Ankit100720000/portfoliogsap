import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Draw line down with scrub
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        { 
          scaleY: 1, 
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          }
        }
      );

      // Pop the dot in
      gsap.from(dotRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top center+=100",
        }
      });

      // Fade up content
      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top center+=100",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={containerRef} className="bg-bg py-16 md:py-24 border-t border-stroke/30 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square rounded-full bg-surface/20 blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Academic</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-text-primary tracking-tight">
            Educational <span className="font-display italic">background</span>
          </h2>
        </div>

        <div className="relative pl-8 md:pl-12 py-6">
          {/* Animated GSAP Timeline Line */}
          <div className="absolute top-0 bottom-0 left-0 w-px bg-stroke origin-top" ref={lineRef} />
          
          {/* Animated GSAP Dot */}
          <div ref={dotRef} className="absolute top-10 left-[-4px] w-[9px] h-[9px] rounded-full bg-text-primary" />
          
          <div ref={contentRef} className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6">
            <div>
              <h3 className="text-3xl md:text-4xl text-text-primary font-medium mb-3">
                Bachelor of Computer Applications
              </h3>
              <p className="text-xl text-muted font-display italic">
                Veer Bahadur Singh Purvanchal University
              </p>
              <p className="text-sm text-text-primary/60 mt-2">Jaunpur, UP</p>
            </div>
            
            <div className="md:text-right">
              <div className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-stroke bg-surface/50 text-text-primary font-mono text-sm shadow-xl shadow-black/20">
                2019 – 2022
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
