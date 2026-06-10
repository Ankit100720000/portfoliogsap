import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const src = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
      if (Hls.isSupported()) {
        const hls = new Hls({ capLevelToPlayerSize: true, maxBufferLength: 30 });
        hls.loadSource(src);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = src;
      }
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <footer className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden min-h-[60vh] flex flex-col justify-between">
      {/* Background Video Flipped */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full mt-10">
        {/* Marquee */}
        <div className="overflow-hidden whitespace-nowrap mb-16 md:mb-24 flex">
          <div ref={marqueeRef} className="flex gap-4 items-center">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="text-7xl md:text-9xl font-display italic text-text-primary/20 pr-4">
                BUILDING THE FUTURE •
              </span>
            ))}
          </div>
        </div>

        {/* CTA Content */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl text-text-primary mb-8">
            Have an idea? Let's talk.
          </h2>
          <a href="mailto:mauryankit2615@gmail.com" className="group relative rounded-full text-sm font-medium px-8 py-4 bg-bg text-text-primary border border-stroke hover:border-transparent transition-all">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300" />
            <span className="absolute inset-[2px] rounded-full bg-bg -z-10" />
            mauryankit2615@gmail.com
          </a>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 mt-20 md:mt-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-stroke/50">
          <div className="flex items-center gap-2">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <span className="text-sm text-text-primary">Available for projects</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="https://linkedin.com/in/ankit-maurya2000" target="_blank" rel="noreferrer" className="hover:text-text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-text-primary transition-colors">GitHub</a>
            <a href="#" className="hover:text-text-primary transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
