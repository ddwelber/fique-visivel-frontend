import { Container } from "../../../../layouts/container";

import btgPactual from "../../../../assets/logos/btg.svg";
import bradesco from "../../../../assets/logos/bradesco.svg";
import santander from "../../../../assets/logos/santander.svg";

import lucas from "../../../../assets/testimonials/product-owner.png";
import leonardo from "../../../../assets/testimonials/leonardo.jpg";
import camila from "../../../../assets/testimonials/head-marketing.png";

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <Container>
        <div className="flex w-full items-center justify-center border-r border-b border-l border-gray-100 px-4 py-12 text-center sm:py-16 md:px-0">
          <h2 className="text-2xl leading-[1.3] font-medium text-black md:text-[2rem]">
            Resultados reais de quem <br className="hidden sm:block" /> decidiu
            postar com estratégia
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 border-r border-l border-gray-100 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex w-full flex-col justify-between gap-6 border-b border-gray-100 p-6 sm:border-r sm:p-8 lg:border-b-0 lg:p-10">
            <div className="flex flex-col gap-1.5">
              <img
                src={btgPactual}
                alt="Banco BTG Pactual"
                loading="lazy"
                className="h-15 w-30"
              />
              <p className="text-base leading-normal text-black">
                Eu quase nunca postava no LinkedIn porque não sabia por onde
                começar. Com a ferramenta ficou muito mais fácil transformar
                experiências do trabalho em conteúdo.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <img
                src={lucas}
                alt="Lucas Andrade"
                loading="lazy"
                className="size-10 rounded-full border border-gray-100 object-cover"
              />
              <div className="flex w-full flex-col">
                <p className="text-base leading-none font-medium text-black">
                  Lucas Andrade
                </p>
                <p className="text-sm text-gray-500">Product Manager</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col justify-between gap-6 border-b border-gray-100 p-6 sm:p-8 lg:border-r lg:border-b-0 lg:p-10">
            <div className="flex flex-col gap-1.5">
              <img
                src={bradesco}
                alt="Banco Bradesco"
                loading="lazy"
                className="h-15 w-30"
              />
              <p className="text-base leading-normal text-black">
                Eu sempre tive dificuldade em transformar minhas ideias em bons
                posts. A plataforma me ajudou a estruturar melhor o conteúdo e
                hoje meus posts parecem profissionais.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <img
                src={leonardo}
                alt="Leonardo Macedo"
                loading="lazy"
                className="size-10 rounded-full border border-gray-100 object-cover"
              />
              <div className="flex w-full flex-col">
                <p className="text-base leading-none font-medium text-black">
                  Leonardo Macedo
                </p>
                <p className="text-sm text-gray-500">Engenheiro de Software</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col justify-between gap-6 p-6 sm:p-8 md:border-r md:border-gray-100 lg:border-none lg:p-10">
            <div className="flex flex-col gap-1.5">
              <img
                src={santander}
                alt="Banco Santander"
                loading="lazy"
                className="h-15 w-30"
              />
              <p className="text-base leading-normal text-black">
                O que mais gostei foi a velocidade. Em poucos minutos consigo
                transformar uma ideia simples em um post muito mais claro e
                interessante.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <img
                src={camila}
                alt="Carolina Freitas"
                loading="lazy"
                className="size-10 rounded-full border border-gray-100 object-cover"
              />
              <div className="flex w-full flex-col">
                <p className="text-base leading-none font-medium text-black">
                  Carolina Freitas
                </p>
                <p className="text-sm text-gray-500">Head de Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
