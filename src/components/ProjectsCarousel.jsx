import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import academy from "../assets/academy.png";
import restaurant from "../assets/restaurant.png";
import nexus from "../assets/nexus.png";
import login from "../assets/login.png";

const projects = [
  {
    title: "Academia de Baile",
    image: academy,
  },
  {
    title: "Restaurante Premium",
    image: restaurant,
  },
  {
    title: "Startup SaaS",
    image: nexus,
  },
  {
    title: "Panel Administrativo",
    image: login,
  },
];

export default function ProjectsCarousel() {
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = 4;
  const angle = 360 / total;
  const radius = isMobile ? 170 : 380;

  const handleNext = () => setRotation((prev) => prev - angle);
  const handlePrev = () => setRotation((prev) => prev + angle);

  return (
    <section id='proyectos' className="pb-24 bg-black relative overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[140px]" />
      </div>

      <div className="container mx-auto relative z-10 px-4">

        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16 md:mb-[120px]">
          Proyectos{" "}
          <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
            Destacados
          </span>
        </h2>

        <div
          className="relative flex items-center justify-center"
          style={{ perspective: isMobile ? "700px" : "1000px" }}
        >
          <div
            className={`relative ${isMobile ? "w-[260px]" : "w-[420px]"} aspect-[16/9]`}
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${rotation}deg)`,
              transition: "transform 0.9s cubic-bezier(.22,.61,.36,1)",
            }}
          >
            {projects.map((project, index) => {
              const itemAngle = angle * index;

              return (
                <div
                  key={index}
                  className="absolute w-full h-full rounded-3xl overflow-hidden"
                  style={{
                    transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  }}
                >
                  <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-purple-500/60 via-violet-400/40 to-purple-600/60">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden bg-black">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-white text-sm md:text-xl font-semibold">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-0 w-10 h-10 md:w-12 md:h-12 bg-black/70 border border-purple-500/40 rounded-full flex items-center justify-center"
          >
            <ChevronLeft className="text-purple-400 w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 md:right-0 w-10 h-10 md:w-12 md:h-12 bg-black/70 border border-purple-500/40 rounded-full flex items-center justify-center"
          >
            <ChevronRight className="text-purple-400 w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}