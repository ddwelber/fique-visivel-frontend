import { motion } from "framer-motion";
import { Cta } from "../../../../components/cta";
import { Container } from "../../../../layouts/container";
import { transition } from "../../../../lib/animation";

import hero from "../../../../assets/hero.svg";
import heroMockup from "../../../../assets/mobile-hero-mockup.png";

import bradesco from "../../../../assets/logos/bradesco.svg";
import santander from "../../../../assets/logos/santander.svg";
import btg from "../../../../assets/logos/btg.svg";
import { trackEvent } from "../../../../lib/analytics";

const images = [
  { src: bradesco, alt: "Bradesco" },
  { src: santander, alt: "Santander" },
  { src: btg, alt: "BTG Pactual" },
];

export const Hero = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center justify-center gap-6 border-r border-l border-gray-100 px-4 py-16 text-center md:py-20 lg:py-25">
          <motion.div
            className="mx-auto flex w-full max-w-4xl flex-col items-center gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            <h1 className="text-4xl leading-none font-medium sm:text-5xl md:text-6xl lg:text-[5rem]">
              Pare de ser invisível <br className="hidden sm:block" /> no
              LinkedIn.
            </h1>
            <p className="w-full text-base leading-[1.4] text-gray-500 sm:text-lg">
              Nossa IA transforma sua experiência em posts estratégicos e
              publica no seu perfil automaticamente.{" "}
              <br className="hidden sm:block" />
              Você mantém presença constante no LinkedIn sem precisar escrever
              nada.
            </p>
          </motion.div>

          <motion.div
            className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
          >
            <div className="flex flex-col items-center gap-2">
              <Cta
                to="/waitlist"
                onClick={() => {
                  trackEvent("cta_click", { location: "hero" });
                }}
              >
                Quero ser encontrado no LinkedIn
              </Cta>
              <span className="text-sm text-gray-500">
                Vagas limitadas · leva menos de 1 minuto
              </span>
            </div>
          </motion.div>
        </div>

        {/* Mockup desktop */}
        <div className="relative hidden h-75 items-end justify-center overflow-hidden border-t border-r border-l border-gray-100 text-center md:flex md:h-auto md:justify-end">
          <motion.img
            src={hero}
            alt="Demonstração da plataforma"
            loading="eager"
            fetchPriority="high"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...transition, delay: 0.2 }}
            className="w-full scale-[1.8] object-cover md:scale-100"
          />
        </div>

        {/* Mockup mobile */}
        <div className="relative flex h-80 items-end justify-center overflow-hidden border-t border-r border-l border-gray-100 text-center md:hidden md:h-auto md:justify-end">
          <img
            src={heroMockup}
            alt="Demonstração da plataforma"
            loading="eager"
            fetchPriority="high"
            className="absolute -right-12 bottom-0 w-full scale-[1.8] object-cover md:scale-100"
          />
        </div>

        {/* Logos */}
        <motion.div
          className="flex flex-col items-center justify-between gap-6 overflow-hidden border-t border-r border-l border-gray-100 p-6 sm:flex-row sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition, delay: 0.25 }}
        >
          <p className="max-w-xs text-center text-base leading-[1.4] text-gray-500 sm:text-left sm:text-lg">
            Profissionais dessas empresas já estão na lista de espera
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-6 sm:flex-nowrap sm:gap-10">
            {images.map((item) => (
              <li key={item.alt}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
};
