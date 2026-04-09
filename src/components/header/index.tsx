import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../assets/logo.svg";
import { Container } from "../../layouts/container";
import { Cta } from "../cta";
import { trackEvent } from "../../lib/analytics";

interface NavLink {
  id: number;
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { id: 1, href: "#how-it-works", label: "Como funciona" },
  { id: 2, href: "#benefits", label: "Benefícios" },
  { id: 3, href: "#testimonials", label: "Resultados" },
  { id: 4, href: "#faq", label: "FAQ" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className={`sticky top-0 z-50 border-b border-gray-100 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <Container>
        <header className="flex w-full items-center justify-between border-r border-l border-gray-100 px-4">
          <Link to="/" aria-label="Fique Visível — página inicial">
            <img
              src={logo}
              alt="Fique Visível"
              loading="eager"
              className="scale-115 md:scale-100"
            />
          </Link>

          <nav className="hidden md:block" aria-label="Navegação principal">
            <ul className="flex items-center">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="block px-4 py-5 text-sm font-medium text-gray-500 transition-colors duration-150 hover:text-black"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 py-3 md:py-0">
            <Cta
              to="/waitlist"
              size="small"
              onClick={() => {
                trackEvent("cta_click", { location: "header" });
              }}
            >
              <span className="hidden sm:inline">
                Garantir acesso antecipado
              </span>
              <span className="sm:hidden">Entrar na lista</span>
            </Cta>

            <button
              onClick={() => setMenuOpen(true)}
              className="rounded-md p-2 text-black transition-colors duration-150 hover:bg-gray-100 md:hidden"
              aria-label="Abrir menu de navegação"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </header>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              aria-hidden="true"
            />

            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
              className="fixed top-0 left-0 z-50 flex h-full w-[85%] max-w-sm flex-col border-r border-gray-100 bg-white"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "tween",
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                <Link
                  to="/"
                  onClick={closeMenu}
                  aria-label="Fique Visível — página inicial"
                >
                  <img src={logo} alt="Fique Visível" className="scale-115" />
                </Link>
                <button
                  onClick={closeMenu}
                  className="rounded-md p-2 text-black transition-colors duration-150 hover:bg-gray-100"
                  aria-label="Fechar menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav
                className="flex-1 overflow-y-auto"
                aria-label="Navegação principal"
              >
                <ul>
                  {navLinks.map((link) => (
                    <li key={link.id} className="border-b border-gray-100">
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className="flex w-full items-center px-6 py-5 text-base font-medium text-black transition-colors duration-150 hover:bg-gray-100"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="border-t border-gray-100 p-6">
                <Cta
                  to="/waitlist"
                  size="default"
                  onClick={() => {
                    trackEvent("cta_click", { location: "header_mobile" });
                    closeMenu();
                  }}
                >
                  Garantir acesso antecipado
                </Cta>
                <p className="mt-4 text-start text-sm text-gray-500">
                  Vagas limitadas · leva menos de 1 minuto
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
