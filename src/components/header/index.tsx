import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../assets/logo.svg";
import { Container } from "../../layouts/container";
import { Cta } from "../cta";
import { trackEvent } from "../../lib/analytics";

interface HeaderLinksProps {
  id: number;
  to: string;
  content: string;
}

export const Header = () => {
  const [open, setOpen] = useState(false);

  const headerLinks: HeaderLinksProps[] = [
    {
      id: 1,
      to: "#how-it-works",
      content: "Como funciona",
    },
    {
      id: 2,
      to: "#benefits",
      content: "Benefícios",
    },
    {
      id: 3,
      to: "#testimonials",
      content: "Resultados",
    },
  ];

  return (
    <div className="border-b border-gray-100">
      <Container>
        <header className="flex w-full items-center justify-between border-r border-l border-gray-100 p-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img
                src={logo}
                alt="Fique Visível"
                className="scale-115 md:scale-100"
              />
            </Link>

            <nav className="hidden md:block">
              <ul className="flex items-center text-sm font-medium">
                {headerLinks.map((item) => {
                  const isAnchor = item.id !== 4;

                  if (isAnchor) {
                    return (
                      <li
                        key={item.id + item.content}
                        className="group px-4 py-1"
                      >
                        <a
                          href={item.to}
                          className="transition-colors duration-150 group-hover:text-gray-500"
                        >
                          {item.content}
                        </a>
                      </li>
                    );
                  } else {
                    return (
                      <li
                        key={item.id + item.content}
                        className="group px-4 py-1"
                      >
                        <Link
                          to={item.to}
                          className="transition-colors duration-150 group-hover:text-gray-500"
                        >
                          {item.content}
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </nav>
          </div>

          <div className="hidden sm:block">
            <Cta
              to="/waitlist"
              size="small"
              onClick={() => {
                trackEvent("cta_click", {
                  location: "header",
                });
              }}
            >
              Garantir acesso antecipado
            </Cta>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden"
            aria-label="Abrir menu"
          >
            <Menu size={24} />
          </button>
        </header>
      </Container>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed top-0 left-0 z-50 h-full w-[80%] max-w-sm border-r border-gray-100 bg-white p-6"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <img src={logo} className="scale-115" />
                <button onClick={() => setOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <ul className="flex flex-col gap-4 text-base font-medium">
                {headerLinks.map((item) => {
                  const isAnchor = item.id !== 4;

                  if (isAnchor) {
                    return (
                      <li key={item.id + item.content}>
                        <a
                          href={item.to}
                          onClick={() => setOpen(false)}
                          className="block"
                        >
                          {item.content}
                        </a>
                      </li>
                    );
                  } else {
                    return (
                      <li key={item.id + item.content}>
                        <Link
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className="block"
                        >
                          {item.content}
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>

              <div className="mt-6">
                <Cta
                  to="/waitlist"
                  size="default"
                  onClick={() => {
                    trackEvent("cta_click", {
                      location: "header",
                    });
                  }}
                >
                  Garantir acesso antecipado
                </Cta>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
