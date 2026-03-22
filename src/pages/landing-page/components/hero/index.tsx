import { Cta } from "../../../../components/cta";
import { Container } from "../../../../layouts/container";

import hero from "../../../../assets/hero.svg";

import bradesco from "../../../../assets/logos/bradesco.svg";
import santander from "../../../../assets/logos/santander.svg";
import btg from "../../../../assets/logos/btg.svg";

export const Hero = () => {
  const images = [bradesco, santander, btg];

  return (
    <section>
      <Container>
        <div className="flex flex-col items-center justify-center gap-6 border-r border-l border-gray-100 px-4 py-25 text-center">
          <div className="text mx-auto flex w-full flex-col items-center gap-3">
            <h1 className="text-[5rem] leading-none font-medium">
              Autoridade no LinkedIn. <br /> No piloto automático.
            </h1>
            <p className="w-full text-lg leading-[1.3] text-gray-500">
              Transformamos sua experiência em conteúdo estratégico, publicamos
              automaticamente <br /> e mantemos sua presença ativa para atrair
              oportunidades.
            </p>
          </div>
          <div className="ctas flex max-h-full w-full items-center justify-center gap-3">
            <Cta to="/waitlist">Garantir acesso antecipado</Cta>
            <Cta to="/how-it-works" variant="secondary">
              Veja como funciona
            </Cta>
          </div>
        </div>
        <div className="flex max-h-full flex-col items-end justify-end gap-6 overflow-hidden border-t border-r border-l border-gray-100 text-center">
          <img src={hero} className="w-full" />
        </div>
        <div className="flex items-center justify-between gap-6 overflow-hidden border-t border-r border-l border-gray-100 p-10">
          <p className="max-w-xs text-lg leading-[1.3] text-gray-500">
            Receba contato de recrutadores de grandes empresas do mercado
          </p>
          <div>
            <ul className="flex items-center gap-10">
              {images.map((item, index) => {
                return (
                  <li key={index}>
                    <img src={item} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
