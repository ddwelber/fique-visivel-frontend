import { Cta } from "../../../../components/cta";
import { Container } from "../../../../layouts/container";

import mockup1 from "../../../../assets/how-it-works.svg";

export const HowItWorks = () => {
  return (
    <div>
      <Container>
        <div className="title flex w-full items-center justify-center border-r border-b border-l border-gray-100 py-16 text-center">
          <h2 className="text-[2rem] leading-[1.3] font-medium text-black">
            Como transformamos sua experiência <br /> em presença estratégica no
            LinkedIn?
          </h2>
        </div>
        <div className="flex w-full items-stretch border-r border-b border-gray-100">
          <div className="left w-full max-w-90">
            <ul className="flex w-full max-w-90 flex-col">
              <li>
                <button className="flex h-full w-full flex-col items-start gap-2 border-r border-b border-l border-gray-100 p-10 text-left">
                  <span className="text-lg font-medium text-black">
                    Definimos seu posicionamento
                  </span>
                  <p className="font-regular text-base leading-[1.3] text-gray-500">
                    Trasnformamos experiência técnica em direção profissional.
                  </p>
                </button>
              </li>
              <li>
                <button className="flex h-full w-full flex-col items-start gap-2 border-r border-b border-l border-gray-100 p-10 text-left">
                  <span className="text-lg font-medium text-black">
                    Estruturamos sua linha editorial
                  </span>
                  <p className="font-regular text-base leading-[1.3] text-gray-500">
                    Construímos uma narrativa que fortalece sua autoridade.
                  </p>
                </button>
              </li>
              <li>
                <button className="flex h-full w-full flex-col items-start gap-2 border-r border-l border-gray-100 p-10 text-left">
                  <span className="text-lg font-medium text-black">
                    Consistência estratégica
                  </span>
                  <p className="font-regular text-base leading-[1.3] text-gray-500">
                    Mantemos presença ativa sem depender de motivação.
                  </p>
                </button>
              </li>
            </ul>
          </div>
          <div className="right relative w-full overflow-hidden">
            <img src={mockup1} className="absolute right-0 bottom-0 w-full xl:top-2" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 border-r border-l border-gray-100 py-10">
          <Cta to="/waitlist">Garantir acesso antecipado</Cta>
          <span className="text-sm text-gray-500">
            Vagas limitadas para os primeiros usuários
          </span>
        </div>
      </Container>
    </div>
  );
};
