import { motion } from 'framer-motion';

const entries = [
  {
    role: "Frontend Developer",
    company: "MTG Learning Media",
    date: "Mar 2025 – May 2025",
    description: "Developed 16+ major modules for ERP system."
  },
  {
    role: "Frontend Developer",
    company: "Kashish Technology",
    date: "Oct 2023 – Mar 2025",
    description: "Developed 25+ responsive e-commerce & real estate websites."
  },
  {
    role: "Web Designer",
    company: "PSS Technoservices",
    date: "Feb 2023 – Sep 2023",
    description: "Built reusable UI component library and landing pages."
  },
  {
    role: "BCA Student",
    company: "VBSP University",
    date: "2019 – 2022",
    description: "Bachelor of Computer Applications."
  }
];

export default function Journal() {
  return (
    <section id="resume" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Experience</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl text-text-primary tracking-tight">
              Recent <span className="font-display italic">roles</span>
            </h2>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          {entries.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 p-6 md:p-8 rounded-[40px] md:rounded-full bg-surface/30 hover:bg-surface border border-stroke transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-bg flex items-center justify-center border border-stroke shrink-0">
                  <span className="font-display italic text-lg">{entry.company.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-xl text-text-primary font-medium">{entry.role}</h3>
                  <p className="text-muted text-sm">{entry.company}</p>
                </div>
              </div>
              
              <div className="text-left md:text-right">
                <p className="text-sm text-text-primary/80 md:max-w-xs mb-1">{entry.description}</p>
                <p className="text-xs text-muted font-mono">{entry.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
