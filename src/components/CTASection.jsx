import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  // WhatsApp config
  const phone = "573019421567";

  const message =
    "Hola, vengo de tu página web y me gustaría agendar una conversación para conocer más sobre tus servicios y cómo podrían ayudar a mi proyecto.";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      id="contacto"
      className="py-32 px-4 relative overflow-hidden bg-gradient-to-r from-purple-900 via-violet-900 to-purple-900"
    >
      {/* Animated radial glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(139,92,246,0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(139,92,246,0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 20%, rgba(139,92,246,0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto text-center relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-purple-300" />
            <span className="text-purple-300 text-sm uppercase tracking-widest">
              Comencemos Hoy
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Construyamos tu próximo{" "}
            <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">
              proyecto digital
            </span>
          </h2>

          <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
            Agenda una consultoría gratuita y transforma tu visión en una solución tecnológica real.
          </p>

          {/*  Botón WhatsApp con framer-motion */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-purple-900 hover:bg-gray-100 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 text-lg px-10 py-5 rounded-xl transition-all duration-300"
          >
            Comenzar ahora
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-transparent rounded-br-full" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-purple-400/20 to-transparent rounded-tl-full" />
    </section>
  );
}