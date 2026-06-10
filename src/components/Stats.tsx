import { motion } from 'framer-motion';

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "45+", label: "Production Apps" },
  { value: "30%", label: "Faster Load Speed" }
];

export default function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24 border-t border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-stroke">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex flex-col items-center pt-8 md:pt-0"
            >
              <div className="text-6xl md:text-7xl lg:text-8xl font-display text-text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
