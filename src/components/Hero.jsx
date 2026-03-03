import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, TrendingUp } from "lucide-react";

// Particle canvas hook
function useParticleCanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const NUM_PARTICLES = 55;
    const COLORS = ["rgba(167,139,250,", "rgba(192,132,252,", "rgba(124,58,237,", "rgba(168,85,247,"];

   

    const particles = Array.from({ length: NUM_PARTICLES }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      size: Math.random() * 1.8 + 0.4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.5 + 0.1,
      alphaDir: Math.random() > 0.5 ? 1 : -1,
    }));

    const LINE_DIST = 120;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DIST) {
            const opacity = (1 - dist / LINE_DIST) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139,92,246,${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaDir * 0.003;
        if (p.alpha > 0.65 || p.alpha < 0.08) p.alphaDir *= -1;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [canvasRef]);
}

export default function Hero() {
  const canvasRef = useRef(null);
  useParticleCanvas(canvasRef);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0B0B0F" }}
    >
      {/* ── Deep Background Gradient ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 65% 50%, rgba(124,58,237,0.18) 0%, rgba(168,85,247,0.08) 40%, transparent 70%), " +
            "radial-gradient(ellipse 50% 80% at 100% 50%, rgba(107,33,168,0.12) 0%, transparent 60%), " +
            "linear-gradient(135deg, #0B0B0F 0%, #0f0b1a 50%, #0B0B0F 100%)",
        }}
      />

      {/* ── Top-right corner ambient orb ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(168,85,247,0.07) 45%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(1px)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Secondary glow bottom-right ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: "0%",
          right: "15%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* ── Particle canvas ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.9 }}
      />

      {/* ── Subtle Scanline Overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(139,92,246,0.012) 3px, rgba(139,92,246,0.012) 4px)",
        }}
      />

      {/* ── Main Content ── */}
      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen lg:min-h-0 py-32 lg:py-0">

            {/* ── LEFT: Text column ── */}
            <div className="flex flex-col justify-center lg:pr-12 xl:pr-20">

              {/* Eyebrow label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-8 inline-flex items-center gap-2"
              >
                <div
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full"
                  style={{
                    background: "rgba(124,58,237,0.12)",
                    border: "1px solid rgba(139,92,246,0.35)",
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: "#A78BFA" }}
                  />
                  <span
                    className="text-sm font-medium tracking-widest uppercase"
                    style={{ color: "#C084FC", letterSpacing: "0.12em" }}
                  >
                    Agencia Digital Premium
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35 }}
                className="mb-8 space-y-1"
              >
                <div
                  className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white"
                  style={{ fontWeight: 200, letterSpacing: "0.06em", opacity: 0.85, lineHeight: "1.5" }}
                >
                  Construimos el
                </div>

                <div
                  className="text-5xl md:text-6xl  "
                  style={{ fontWeight: 800, letterSpacing: "-0.02em", lineHeight: "1.05" }}
                >
                  <span
                    style={{
                      background: "linear-gradient(125deg, #C084FC 0%, #A855F7 35%, #7C3AED 70%, #8B5CF6 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 0 28px rgba(168,85,247,0.35)) drop-shadow(0 0 8px rgba(124,58,237,0.2))",
                      display: "inline-block",
                    }}
                  >
                    FUTURO DIGITAL
                  </span>
                </div>

                <div
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white"
                  style={{ fontWeight: 700, letterSpacing: "0.02em", lineHeight: "1.35" }}
                >
                  de tu negocio
                </div>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-12 max-w-lg"
                style={{ color: "#BDBDBD", lineHeight: "1.85", fontSize: "1.1rem" }}
              >
                Creamos soluciones tecnológicas que generan{" "}
                <span style={{ color: "#D8B4FE" }}>crecimiento real</span> y{" "}
                <span style={{ color: "#D8B4FE" }}>resultados medibles</span>.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                {/* Primary Button → #contacto */}
                <motion.a
                  href="#contacto"
                  whileHover={{
                    scale: 1.04,
                    boxShadow:
                      "0 12px 40px rgba(124,58,237,0.55), 0 0 60px rgba(168,85,247,0.25)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-white transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6B21A8 100%)",
                    boxShadow:
                      "0 8px 30px rgba(124,58,237,0.4), 0 0 40px rgba(124,58,237,0.15)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    letterSpacing: "0.01em",
                    border: "1px solid rgba(167,139,250,0.3)",
                  }}
                >
                  Solicitar asesoría gratuita
                  <motion.span
                    className="inline-flex"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </motion.a>

                {/* Secondary Button → #proyectos */}
                <motion.a
                  href="#proyectos"
                  whileHover={{
                    scale: 1.04,
                    backgroundColor: "rgba(255,255,255,0.06)",
                    boxShadow: "0 4px 20px rgba(255,255,255,0.06)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white transition-all duration-300"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.2)",
                    fontSize: "1rem",
                    fontWeight: 500,
                    letterSpacing: "0.01em",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  Ver proyectos
                  <ChevronRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ opacity: 0.7 }}
                  />
                </motion.a>
              </motion.div>

              {/* ── Strategic micro-message ── */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.05 }}
                className="mt-8 flex items-center gap-3"
              >
                {/* Left accent */}
                <div
                  className="shrink-0 w-5 h-px"
                  style={{
                    background: "linear-gradient(to right, transparent, rgba(167,139,250,0.5))",
                  }}
                />

                {/* Icon */}
                <TrendingUp
                  className="shrink-0 w-3.5 h-3.5"
                  style={{
                    color: "#A78BFA",
                    filter: "drop-shadow(0 0 5px rgba(167,139,250,0.55))",
                  }}
                />

                {/* Text */}
                <p
                  style={{
                    color: "#6B7280",
                    fontSize: "0.78rem",
                    letterSpacing: "0.05em",
                    fontWeight: 400,
                    lineHeight: "1.4",
                  }}
                >
                  Tecnología estratégica orientada a{" "}
                  <span style={{ color: "#C4B5FD", fontWeight: 500 }}>
                    resultados reales
                  </span>
                </p>

                {/* Right accent */}
                <div
                  className="shrink-0 w-5 h-px"
                  style={{
                    background: "linear-gradient(to left, transparent, rgba(167,139,250,0.2))",
                  }}
                />
              </motion.div>

            </div>

            {/* ── RIGHT: Abstract Visual ── */}
            <div className="hidden lg:flex items-center justify-center relative h-full">

              {/* Outer glow orb */}
              <motion.div
                className="absolute"
                style={{
                  width: "520px",
                  height: "520px",
                  background:
                    "radial-gradient(circle, rgba(124,58,237,0.14) 0%, rgba(168,85,247,0.06) 50%, transparent 72%)",
                  borderRadius: "50%",
                }}
                animate={{ scale: [1, 1.06, 1], rotate: [0, 360] }}
                transition={{
                  scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                }}
              />

              {/* Rotating ring 1 */}
              <motion.div
                className="absolute"
                style={{
                  width: "420px",
                  height: "420px",
                  borderRadius: "50%",
                  border: "1px solid rgba(139,92,246,0.20)",
                  boxShadow: "0 0 40px rgba(139,92,246,0.08) inset",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "8px", height: "8px",
                    background: "#A78BFA",
                    top: "-4px", left: "50%",
                    transform: "translateX(-50%)",
                    boxShadow: "0 0 12px rgba(167,139,250,0.8)",
                  }}
                />
              </motion.div>

              {/* Rotating ring 2 */}
              <motion.div
                className="absolute"
                style={{
                  width: "310px",
                  height: "310px",
                  borderRadius: "50%",
                  border: "1px solid rgba(168,85,247,0.25)",
                  boxShadow: "0 0 30px rgba(168,85,247,0.06) inset",
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "6px", height: "6px",
                    background: "#C084FC",
                    bottom: "-3px", left: "50%",
                    transform: "translateX(-50%)",
                    boxShadow: "0 0 10px rgba(192,132,252,0.9)",
                  }}
                />
              </motion.div>

              {/* Rotating ring 3 */}
              <motion.div
                className="absolute"
                style={{
                  width: "210px",
                  height: "210px",
                  borderRadius: "50%",
                  border: "1px dashed rgba(139,92,246,0.18)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "5px", height: "5px",
                    background: "#8B5CF6",
                    top: "-2.5px", right: "30px",
                    boxShadow: "0 0 8px rgba(139,92,246,1)",
                  }}
                />
              </motion.div>

              {/* Center core */}
              <div className="relative z-10 flex items-center justify-center">
                <motion.div
                  className="absolute rounded-full"
                  style={{
                    width: "100px",
                    height: "100px",
                    background:
                      "radial-gradient(circle, rgba(124,58,237,0.35) 0%, rgba(168,85,247,0.15) 60%, transparent 80%)",
                  }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="relative rounded-full flex items-center justify-center"
                  style={{
                    width: "72px",
                    height: "72px",
                    background: "linear-gradient(135deg, rgba(124,58,237,0.5) 0%, rgba(168,85,247,0.3) 100%)",
                    border: "1px solid rgba(167,139,250,0.5)",
                    boxShadow:
                      "0 0 30px rgba(124,58,237,0.4), 0 0 80px rgba(168,85,247,0.15), inset 0 0 20px rgba(124,58,237,0.2)",
                  }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <polygon
                      points="16,2 28,9 28,23 16,30 4,23 4,9"
                      stroke="rgba(192,132,252,0.9)"
                      strokeWidth="1.5"
                      fill="rgba(124,58,237,0.2)"
                    />
                    <polygon
                      points="16,7 23,11 23,21 16,25 9,21 9,11"
                      stroke="rgba(167,139,250,0.5)"
                      strokeWidth="1"
                      fill="none"
                    />
                    <circle cx="16" cy="16" r="3" fill="rgba(192,132,252,0.9)" />
                  </svg>
                </motion.div>
              </div>

              {/* Floating tech cards */}
              {[
                { label: "Velocidad", value: "99/100", top: "12%", left: "5%", delay: 0 },
                { label: "Rendimiento", value: "+240%", top: "70%", right: "5%", delay: 0.5 },
                { label: "Uptime", value: "99.9%", top: "35%", right: "2%", delay: 1 },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  className="absolute px-4 py-2.5 rounded-xl"
                  style={{
                    top: card.top,
                    left: card.left,
                    right: card.right,
                    background: "rgba(15,11,26,0.85)",
                    border: "1px solid rgba(139,92,246,0.25)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.4), 0 0 20px rgba(124,58,237,0.08)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: [0, -8, 0] }}
                  transition={{
                    opacity: { duration: 0.6, delay: card.delay + 1 },
                    y: { 
                      duration: 3.5, 
                      repeat: Infinity, 
                      repeatType: "mirror",
                      ease: "easeInOut",
                      delay: card.delay 
                    },
                  }}
                >
                  <p style={{ color: "#888", fontSize: "0.7rem", marginBottom: "2px", letterSpacing: "0.08em" }}>
                    {card.label}
                  </p>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      background: "linear-gradient(90deg, #C084FC, #8B5CF6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {card.value}
                  </p>
                </motion.div>
              ))}

              {/* Subtle tech grid */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ opacity: 0.07 }}
              >
                {[...Array(8)].map((_, i) => (
                  <line
                    key={`h${i}`}
                    x1="0" y1={`${(i + 1) * 12.5}%`}
                    x2="100%" y2={`${(i + 1) * 12.5}%`}
                    stroke="#8B5CF6" strokeWidth="0.5"
                  />
                ))}
                {[...Array(8)].map((_, i) => (
                  <line
                    key={`v${i}`}
                    x1={`${(i + 1) * 12.5}%`} y1="0"
                    x2={`${(i + 1) * 12.5}%`} y2="100%"
                    stroke="#8B5CF6" strokeWidth="0.5"
                  />
                ))}
              </svg>
            </div>

          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span style={{ color: "#555", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <motion.div
          className="w-px h-10 origin-top"
          style={{ background: "linear-gradient(to bottom, rgba(139,92,246,0.6), transparent)" }}
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* ── Bottom edge line ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />
    </section>
  );
}
