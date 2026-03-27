import { Cta } from "../../../../components/cta";
import { Container } from "../../../../layouts/container";

import hero from "../../../../assets/hero.svg";
import heroMockup from "../../../../assets/mobile-hero-mockup.png";

import bradesco from "../../../../assets/logos/bradesco.svg";
import santander from "../../../../assets/logos/santander.svg";
import btg from "../../../../assets/logos/btg.svg";
import { trackEvent } from "../../../../lib/analytics";

export const Hero = () => {
  const images = [bradesco, santander, btg];

  return (
    <section>
      <Container>
        <div className="flex flex-col items-center justify-center gap-6 border-r border-l border-gray-100 px-4 py-16 text-center md:py-20 lg:py-25">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-3">
            <h1 className="text-4xl leading-none font-medium sm:text-5xl md:text-6xl lg:text-[5rem]">
              Autoridade no LinkedIn. <br className="hidden sm:block" /> No
              piloto automático.
            </h1>
            <p className="w-full text-base leading-[1.4] text-gray-500 sm:text-lg">
              Nossa IA transforma sua experiência em conteúdo estratégico,
              publica automaticamente <br className="hidden sm:block" /> e
              mantém sua presença ativa para atrair oportunidades.
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
            <Cta
              to="/waitlist"
              onClick={() => {
                trackEvent("cta_click", {
                  location: "hero",
                });
              }}
            >
              Garantir acesso antecipado
            </Cta>
          </div>
        </div>

        <div className="relative hidden h-75 items-end justify-center overflow-hidden border-t border-r border-l border-gray-100 text-center md:flex md:h-auto md:justify-end">
          <img
            src={hero}
            alt="Demonstração da plataforma"
            className="w-full scale-[1.8] object-cover md:scale-100"
          />
        </div>

        <div className="relative flex h-80 items-end justify-center overflow-hidden border-t border-r border-l border-gray-100 text-center md:hidden md:h-auto md:justify-end">
          <img
            src={heroMockup}
            alt="Demonstração da plataforma"
            className="absolute -right-12 bottom-0 w-full scale-[1.8] object-cover md:scale-100"
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-6 overflow-hidden border-t border-r border-l border-gray-100 p-6 sm:flex-row sm:p-10">
          <p className="max-w-xs text-center text-base leading-[1.4] text-gray-500 sm:text-left sm:text-lg">
            Receba contato de recrutadores de grandes empresas do mercado
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-6 sm:flex-nowrap sm:gap-10">
            {images.map((item, index) => {
              return (
                <li key={index}>
                  <img src={item} loading="lazy" />
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
};
