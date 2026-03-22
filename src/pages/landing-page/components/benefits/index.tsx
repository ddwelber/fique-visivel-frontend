import { Container } from "../../../../layouts/container";
import { InfiniteMessages } from "./components/infinite-messages";

export const Benefits = () => {
  return (
    <section id="benefits">
      <Container>
        <div className="flex w-full items-center justify-center border-r border-b border-l border-gray-100 px-4 py-12 text-center sm:py-16 md:px-0">
          <h2 className="text-2xl leading-[1.3] font-medium text-black md:text-[2rem]">
            Quando sua experiência vira <br className="hidden sm:block" />{" "}
            conteúdo estratégico
          </h2>
        </div>

        <div className="flex w-full flex-col border-r border-l border-gray-100">
          <ul className="flex w-full flex-col sm:flex-row">
            <li className="w-full">
              <div className="flex w-full flex-col gap-2 border-b border-gray-100 p-6 sm:border-r sm:p-8 lg:p-10">
                <span className="text-lg font-medium text-black">
                  Autoridade no seu nicho
                </span>
                <p className="max-w-sm text-base text-gray-500">
                  Seus posts passam a refletir sua senioridade e visão de
                  mercado.
                </p>
              </div>
            </li>

            <li className="w-full">
              <div className="flex w-full flex-col gap-2 border-b border-gray-100 p-6 sm:p-8 lg:p-10">
                <span className="text-lg font-medium text-black">
                  Consistência sem esforço
                </span>
                <p className="max-w-sm text-base text-gray-500">
                  Conteúdo planejado, criado e publicado automaticamente.
                </p>
              </div>
            </li>
          </ul>

          <ul className="flex w-full flex-col sm:flex-row">
            <li className="w-full">
              <div className="flex w-full flex-col gap-2 border-b border-gray-100 p-6 sm:border-r sm:border-b-0 sm:p-8 lg:p-10">
                <span className="text-lg font-medium text-black">
                  Mais oportunidades chegando até você
                </span>
                <p className="max-w-xs text-base text-gray-500">
                  Recrutadores, convites e conexões passam a surgir
                  naturalmente.
                </p>
              </div>
            </li>

            <li className="w-full">
              <div className="flex w-full flex-col gap-2 p-6 sm:p-8 lg:p-10">
                <span className="text-lg font-medium text-black">
                  Seu perfil vira um ativo profissional
                </span>
                <p className="max-w-sm text-base text-gray-500">
                  Seu LinkedIn deixa de ser um currículo parado e vira uma
                  máquina de visibilidade.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="w-full">
          <InfiniteMessages />
        </div>
      </Container>
    </section>
  );
};
