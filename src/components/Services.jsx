import { motion } from "framer-motion";
import { Globe, Blocks, Server, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Páginas Web Profesionales",
    description:
      "Sitios web modernos, optimizados y enfocados en conversión.",
  },
  {
    icon: Blocks,
    title: "Aplicaciones Web Personalizadas",
    description:
      "Soluciones digitales a medida para impulsar la productividad y el rendimiento empresarial.",
  },
  {
    icon: Server,
    title: "Hosting y Gestión de Infraestructura",
    description:
      "Alojamos y administramos tu sitio en servidores seguros.",
  },
  {
    icon: Palette,
    title: "Diseño UX/UI Estratégico",
    description:
      "Experiencias digitales intuitivas, atractivas y centradas en el usuario.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-28 px-6 bg-black relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-black to-black"></div>

      <div className="container mx-auto relative z-10 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluciones digitales diseñadas para escalar tu negocio con
            tecnología y estrategia.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{
                duration: 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              style={{ willChange: "transform" }}
              className="group bg-[#0B0B0F] border border-white/10 rounded-2xl p-10
              hover:border-purple-500/40 hover:shadow-[0_10px_40px_rgba(139,92,246,0.2)]"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-purple-500/10">
                <service.icon className="w-8 h-8 text-purple-400" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}