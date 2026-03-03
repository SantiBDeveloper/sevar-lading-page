import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import logo from "../assets/diamond.png";

export default function Footer() {
  const servicesLinks = [
    { label: "Páginas Web Profesionales", href: "#servicios" },
    { label: "Aplicaciones Web Personalizadas", href: "#servicios" },
    { label: "Hosting y Gestión de Infraestructura", href: "#servicios" },
    { label: "Diseño UX/UI Estratégico", href: "#servicios" },
  ];

  const companyLinks = [
    { label: "Proyectos", href: "#proyectos" },
    { label: "Por qué Sevar", href: "#por-que-sevar" },
    { label: "Contactos", href: "#contacto" }
  ];


  return (
    <footer className="relative bg-black overflow-hidden">

      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-violet-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Top divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <div className="container mx-auto px-6 py-20 relative z-10">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <a href="#inicio" className="flex items-center gap-3">
              <img src={logo} alt="Sevar Digital" className="h-10" />
              <span className="text-white text-xl font-semibold">
                sevar.digital
              </span>
            </a>

            <p className="text-gray-400 leading-relaxed max-w-xs">
              Creamos experiencias digitales que impulsan el crecimiento
              tecnológico de tu negocio.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Servicios
            </h4>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Empresa
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contacto
            </h4>

            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3 items-start">
                <Mail size={18} />
                santiago.beleno.dev@gmail.com
              </li>

              <li className="flex gap-3 items-start">
                <Phone size={18} />
                +57 3042355776
              </li>

            
            </ul>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© 2026 sevar.digital — Todos los derechos reservados.</p>

          {/* <div className="flex gap-6">
            <a href="#" className="hover:text-purple-400 transition">
              Privacidad
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              Términos
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              Cookies
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}