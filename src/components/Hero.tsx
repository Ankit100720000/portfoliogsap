import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';

const roles = ["Frontend Developer", "React.js Developer", "UI Developer"];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(roleInterval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      const src = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
      if (Hls.isSupported()) {
        const hls = new Hls({
          capLevelToPlayerSize: true,
          maxBufferLength: 30,
        });
        hls.loadSource(src);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = src;
      }
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(".name-reveal", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.1,
        ease: "power3.out"
      }, 0)
      .to(".blur-in", {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        stagger: 0.1,
        delay: 0.3,
        ease: "power3.out"
      }, 0);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-24">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
        <div className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${scrolled ? 'shadow-md shadow-black/10' : ''}`}>
          {/* Logo */}
          <div className="group relative w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110">
            <div className="absolute inset-0 rounded-full accent-gradient animate-gradient-shift [animation-direction:normal] group-hover:[animation-direction:reverse]" />
            <div className="absolute inset-[1.5px] rounded-full bg-bg flex items-center justify-center">
              <span className="font-display italic text-[13px] text-text-primary">AM</span>
            </div>
          </div>
          
          <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />
          
          {/* Links */}
          <div className="flex items-center gap-1">
            {["Home", "Work", "Resume"].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${i === 0 ? 'text-text-primary bg-stroke/50' : 'text-muted hover:text-text-primary hover:bg-stroke/50'}`}
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="w-px h-5 bg-stroke mx-1" />
          
          {/* CTA */}
          <button className="group relative text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-text-primary">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2 bg-surface backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full inset-0">
              Say hi <ArrowUpRight className="w-3 h-3" />
            </span>
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-10">
        <div className="blur-in opacity-0 translate-y-5 blur-[10px] text-xs text-muted uppercase tracking-[0.3em] mb-8">
          COLLECTION '26
        </div>
        
        <h1 className="name-reveal opacity-0 translate-y-12 text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Ankit Maurya
        </h1>
        
        <div className="blur-in opacity-0 translate-y-5 blur-[10px] text-xl md:text-2xl text-text-primary mb-6 flex items-center gap-2">
          A <span key={roleIndex} className="font-display italic text-text-primary animate-role-fade-in inline-block">{roles[roleIndex]}</span> based in India.
        </div>
        
        <p className="blur-in opacity-0 translate-y-5 blur-[10px] text-sm md:text-base text-muted max-w-md mb-12">
          Frontend Developer with 3+ years of experience building responsive, scalable web applications using React.js and modern CSS frameworks.
        </p>
        
        <div className="blur-in opacity-0 translate-y-5 blur-[10px] flex flex-wrap justify-center gap-4">
          <button className="group relative rounded-full text-sm font-medium px-7 py-3.5 bg-text-primary text-bg hover:bg-bg hover:text-text-primary transition-all hover:scale-105">
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10" />
            <span className="absolute inset-[2px] rounded-full bg-bg opacity-0 group-hover:opacity-100 -z-10" />
            See Works
          </button>
          <button className="group relative rounded-full text-sm font-medium px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary hover:border-transparent transition-all hover:scale-105">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10" />
            <span className="absolute inset-[2px] rounded-full bg-bg opacity-0 group-hover:opacity-100 -z-10" />
            Reach out...
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="w-full h-full bg-text-primary animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
