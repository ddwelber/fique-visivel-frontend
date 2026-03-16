import { Container } from "../../../../layouts/container";
import { InfiniteMessages } from "./components/infinite-messages";

export const Benefits = () => {
  return (
    <div>
      <Container>
        <div className="title flex w-full items-center justify-center border-r border-b border-l border-gray-100 py-16 text-center">
          <h2 className="text-[2rem] leading-[1.3] font-medium text-black">
            Quando sua experiência vira <br /> conteúdo estratégico
          </h2>
        </div>
        <div className="flex max-h-full w-full flex-col border-r border-l border-gray-100">
          <ul className="flex w-full items-start">
            <li className="w-full">
              <div className="flex max-h-full w-full flex-col gap-2 border-r border-b border-gray-100 p-10">
                <span className="text-lg font-medium text-black">
                  Autoridade no seu nicho
                </span>
                <p className="font-regular max-w-sm text-base text-gray-500">
                  Seus posts passam a refletir sua senioridade e visão de
                  mercado.
                </p>
              </div>
            </li>
            <li className="w-full">
              <div className="flex max-h-full w-full flex-col gap-2 border-b border-gray-100 p-10">
                <span className="text-lg font-medium text-black">
                  Consistência sem esforço
                </span>
                <p className="font-regular max-w-sm text-base text-gray-500">
                  Conteúdo planejado, criado e publicado automaticamente.
                </p>
              </div>
            </li>
          </ul>
          <ul className="flex w-full items-start">
            <li className="w-full">
              <div className="flex max-h-full w-full flex-col gap-2 border-r border-gray-100 p-10">
                <span className="text-lg font-medium text-black">
                  Mais oportunidades chegando até você
                </span>
                <p className="font-regular max-w-xs text-base text-gray-500">
                  Recrutadores, convites e conexões passam a surgir
                  naturalmente.
                </p>
              </div>
            </li>
            <li className="w-full">
              <div className="flex max-h-full w-full flex-col gap-2 p-10">
                <span className="text-lg font-medium text-black">
                  Seu perfil vira um ativo profissional
                </span>
                <p className="font-regular max-w-sm text-base text-gray-500">
                  Seu LinkedIn deixa de ser um currículo parado e vira uma
                  máquina de visibilidade.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="max-h-full w-full">
          <InfiniteMessages />
        </div>
      </Container>
    </div>
  );
};
