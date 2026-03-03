import { motion } from "framer-motion";
import { Cpu, Layers, Code2, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Soluciones 100% personalizadas",
    description:
      "Cada proyecto es único y diseñado específicamente para tus necesidades.",
    position: "left",
  },
  {
    icon: Layers,
    title: "Arquitectura escalable",
    description:
      "Construimos sistemas que crecen junto con tu negocio sin limitaciones.",
    position: "right",
  },
  {
    icon: Code2,
    title: "Código limpio y optimizado",
    description:
      "Seguimos las mejores prácticas para garantizar rendimiento y mantenibilidad.",
    position: "left",
  },
  {
    icon: Cpu,
    title: "Diseño moderno y estratégico",
    description:
      "Interfaces que combinan estética con funcionalidad y conversión.",
    position: "right",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="por-que-sevar"
      className="py-32 px-4 bg-black relative overflow-hidden"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ¿Por qué elegir{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Sevar?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Nos enfocamos en excelencia técnica y resultados medibles.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">

          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-purple-500 to-transparent shadow-[0_0_20px_rgba(139,92,246,0.5)]" />

          <div className="space-y-28 md:space-y-32">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-[#0B0B12] border border-purple-500/60 shadow-[0_0_25px_rgba(139,92,246,0.3)]"
                      whileHover={{
                        scale: 1.1,
                        boxShadow:
                          "0 0 50px rgba(139,92,246,0.6)",
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-purple-500"
                        animate={{
                          scale: [1, 1.4, 1.4],
                          opacity: [0.6, 0, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />

                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-purple-400 relative z-10" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: reason.position === "left" ? 40 : -40,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className={`
                      relative
                      pt-20 md:pt-24
                      text-center
                      bg-black md:bg-transparent
                      px-6 py-6 md:p-0
                      rounded-xl md:rounded-none
                      ${reason.position === "left" 
                        ? "md:text-right md:mr-auto md:pr-24" 
                        : "md:text-left md:ml-auto md:pl-24"}
                      w-[95%] md:w-1/2
                      mx-auto md:mx-0
                    `}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {reason.title}
                    </h3>

                    <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                      {reason.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}