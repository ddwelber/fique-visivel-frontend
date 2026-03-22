import { Container } from "../../../../layouts/container";

import btgPactual from "../../../../assets/logos/btg.svg";
import bradesco from "../../../../assets/logos/bradesco.svg";
import santander from "../../../../assets/logos/santander.svg";

import lucas from "../../../../assets/testimonials/product-owner.png";
import leonardo from "../../../../assets/testimonials/leonardo.jpg";
import camila from "../../../../assets/testimonials/head-marketing.png";

export const Testimonials = () => {
  return (
    <section>
      <Container>
        <div className="title flex w-full items-center justify-center border-r border-b border-l border-gray-100 py-16 text-center">
          <h2 className="text-[2rem] leading-[1.3] font-medium text-black">
            Resultados reais de quem <br /> decidiu postar com estratégia
          </h2>
        </div>
        <div className="grid max-h-full w-full grid-cols-3 border-r border-l border-gray-100">
          <div className="flex max-h-full w-full flex-col justify-between gap-6 border-r border-gray-100 p-10">
            <div className="flex flex-col gap-1.5">
              <img src={btgPactual} className="h-15 w-30" />
              <p className="font-regular text-base leading-normal text-black">
                Eu quase nunca postava no LinkedIn porque não sabia por onde
                começar. Com a ferramenta ficou muito mais fácil transformar
                experiências do trabalho em conteúdo.
              </p>
            </div>
            <div className="w-ful flex max-h-full items-center gap-2">
              <img
                src={lucas}
                className="size-10 rounded-full border border-gray-100 object-cover"
              />
              <div className="flex max-h-full w-full flex-col">
                <p className="text-base leading-none font-medium text-black">
                  Lucas Andrade
                </p>
                <p className="font-regular text-sm text-gray-500">
                  Product Manager
                </p>
              </div>
            </div>
          </div>
          <div className="flex max-h-full w-full flex-col justify-between gap-6 border-r border-gray-100 p-10">
            <div className="flex flex-col gap-1.5">
              <img src={bradesco} className="h-15 w-30" />
              <p className="font-regular text-base leading-normal text-black">
                Eu sempre tive dificuldade em transformar minhas ideias em bons
                posts. A plataforma me ajudou a estruturar melhor o conteúdo e
                hoje meus posts parecem profissionais.
              </p>
            </div>
            <div className="w-ful flex max-h-full items-center gap-2">
              <img
                src={leonardo}
                className="size-10 rounded-full border border-gray-100 object-cover"
              />
              <div className="flex max-h-full w-full flex-col">
                <p className="text-base leading-none font-medium text-black">
                  Leonardo Macedo
                </p>
                <p className="font-regular text-sm text-gray-500">
                  Engenheiro de Software
                </p>
              </div>
            </div>
          </div>
          <div className="flex max-h-full w-full flex-col justify-between gap-6 p-10">
            <div className="flex flex-col gap-1.5">
              <img src={santander} className="h-15 w-30" />
              <p className="font-regular text-base leading-normal text-black">
                O que mais gostei foi a velocidade. Em poucos minutos consigo
                transformar uma ideia simples em um post muito mais claro e
                interessante.
              </p>
            </div>
            <div className="w-ful flex max-h-full items-center gap-2">
              <img
                src={camila}
                className="size-10 rounded-full border border-gray-100 object-cover"
              />
              <div className="flex max-h-full w-full flex-col">
                <p className="text-base leading-none font-medium text-black">
                  Carolina Freitas
                </p>
                <p className="font-regular text-sm text-gray-500">
                  Head de Marketing
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
