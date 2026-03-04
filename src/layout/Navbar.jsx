import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/diamond.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Por qué Sevar", href: "#por-que-sevar" },
    { label: "Contacto", href: "#contacto" },
  ];

  //  WhatsApp config
  const phone = "573019421567";

  const message =
    "Hola, vengo de tu página web y me gustaría agendar una conversación para conocer más sobre tus servicios y cómo podrían ayudar a mi proyecto.";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2 hover:scale-105 transition-all duration-300"
        >
          <img
            src={logo}
            alt="Sevar Digital"
            className="h-9 w-auto object-contain mt-[6px]"
          />
          <span className="text-white text-xl font-semibold leading-none">
            sevar.digital
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              {item.label}
            </a>
          ))}

          {/*  Botón WhatsApp Desktop */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
          >
            Comenzar Proyecto
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 pb-6 flex flex-col gap-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          {/*  Botón WhatsApp Mobile */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Comenzar Proyecto
          </a>
        </div>
      )}
    </nav>
  );
}