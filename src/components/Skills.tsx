import { useEffect, useRef } from 'react';
import { Code2, Layers, Cpu, Wrench } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Frameworks & Libraries",
    icon: <Layers className="w-6 h-6 text-text-primary" />,
    skills: ["React.js", "Redux Toolkit", "Tailwind CSS", "GSAP", "Framer Motion", "Bootstrap"]
  },
  {
    title: "AI & Integrations",
    icon: <Cpu className="w-6 h-6 text-text-primary" />,
    skills: ["LLMs", "Claude AI", "OpenAI", "Gemini", "Mistral AI", "Hugging Face", "OCR APIs"]
  },
  {
    title: "Core Languages",
    icon: <Code2 className="w-6 h-6 text-text-primary" />,
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"]
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench className="w-6 h-6 text-text-primary" />,
    skills: ["Git", "Docker", "Figma", "Postman", "REST APIs", "Vite"]
  }
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Pin the left column header
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top+=120",
        end: "bottom bottom",
        pin: leftColRef.current,
        pinSpacing: false,
      });

      // Fade up cards
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: rightColRef.current,
          start: "top bottom-=100",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    });

    mm.add("(max-width: 767px)", () => {
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: rightColRef.current,
          start: "top bottom-=50",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out"
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="skills" className="bg-bg py-16 md:py-32 border-t border-stroke/30">
      <div ref={containerRef} className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row gap-12 md:gap-24 relative">
        
        {/* Left Column: Pinned Header */}
        <div ref={leftColRef} className="md:w-1/3 md:h-fit z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Capabilities</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-text-primary tracking-tight">
            Technical <br/><span className="font-display italic">arsenal</span>
          </h2>
        </div>

        {/* Right Column: Scrolling Cards */}
        <div ref={rightColRef} className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
          {skillCategories.map((category, i) => (
            <div
              key={i}
              className="skill-card group relative bg-surface border border-stroke rounded-3xl p-8 hover:bg-surface/80 transition-colors overflow-hidden"
            >
              {/* Subtle animated background glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -inset-[100%] animate-[spin_10s_linear_infinite]" style={{ background: 'conic-gradient(from 90deg at 50% 50%, #00000000 50%, #00000000 80%, rgba(137, 170, 204, 0.15) 100%)' }} />
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full border border-stroke bg-bg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ease-out">
                  {category.icon}
                </div>
                <h3 className="text-2xl text-text-primary mb-6 font-medium">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, j) => (
                    <span 
                      key={j} 
                      className="px-4 py-2 rounded-full border border-stroke/50 bg-bg/50 text-sm text-text-primary/80 group-hover:border-stroke transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
