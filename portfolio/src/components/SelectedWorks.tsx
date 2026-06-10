import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "ERP Management System",
    description: "Engineered frontend for CRM, HRMS, and Logistics using React, TypeScript, and Redux Toolkit.",
    span: "col-span-1 md:col-span-7",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    title: "E-Commerce Web Apps",
    description: "Developed 3 full-featured platforms with Razorpay integration and dynamic inventory.",
    span: "col-span-1 md:col-span-5",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80"
  },
  {
    title: "Real Estate Portal",
    description: "Built property listing and advanced search with Google Maps API, generating 200+ leads.",
    span: "col-span-1 md:col-span-5",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
  },
  {
    title: "AI-Powered OCR",
    description: "Created OCR document processing system using Mistral AI and Claude AI APIs.",
    span: "col-span-1 md:col-span-7",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
  }
];

export default function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl text-text-primary tracking-tight">
              Featured <span className="font-display italic">projects</span>
            </h2>
            <p className="text-muted mt-4 max-w-md">
              A selection of projects I've worked on, from concept to launch.
            </p>
          </div>
          
          <button className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full border border-stroke text-sm group relative overflow-hidden transition-colors hover:text-bg">
            <span className="absolute inset-0 w-full h-full bg-text-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-2">
              View all work <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className={`group relative bg-surface border border-stroke rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[400px] cursor-pointer ${project.span}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              
              {/* Halftone Overlay */}
              <div 
                className="absolute inset-0 opacity-20 mix-blend-multiply"
                style={{
                  background: "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px"
                }}
              />

              {/* Hover Content */}
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-all duration-500 ease-out flex flex-col justify-center items-center text-center p-6">
                <div className="bg-text-primary text-bg px-6 py-3 rounded-full flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 ease-out">
                  <span className="text-sm font-medium">View —</span>
                  <span className="font-display italic text-lg">{project.title}</span>
                </div>
                <p className="mt-6 text-sm text-text-primary/80 max-w-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150 ease-out">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
