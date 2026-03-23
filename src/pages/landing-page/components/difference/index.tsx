import { Container } from "../../../../layouts/container";
import { ReachChart } from "./components/bars-chart";
import { SSIGauge } from "./components/ssi-circle";

import { useRef } from "react";

export const Difference = () => {
  const ref = useRef(null);

  return (
    <section ref={ref}>
      <Container>
        <div className="flex w-full items-center justify-center border-r border-b border-l border-gray-100 px-4 py-12 text-center sm:py-16 md:px-0">
          <h2 className="text-2xl leading-[1.3] font-medium text-black md:text-[2rem]">
            A diferença entre postar qualquer <br className="hidden sm:block" />{" "}
            coisa e postar estrategicamente
          </h2>
        </div>

        <div className="grid grid-cols-2 border-x border-b border-gray-100 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-end border-r border-gray-100 sm:border-b-0">
            <SSIGauge />
          </div>
          <div className="flex flex-col items-center justify-end">
            <ReachChart />
          </div>
        </div>

        <div className="flex w-full flex-col border-r border-l border-gray-100">
          <ul className="flex w-full flex-col sm:flex-row">
            <li className="w-full">
              <div className="flex w-full flex-col gap-2 border-b border-gray-100 p-6 sm:border-r sm:p-8 lg:p-10">
                <span className="text-lg font-medium text-black">
                  Seu SSI em crescimento
                </span>
                <p className="max-w-sm text-base text-gray-500">
                  Sua presença evolui de forma consistente e passa a ser
                  reconhecida pelo algoritmo.
                </p>
              </div>
            </li>

            <li className="w-full">
              <div className="flex w-full flex-col gap-2 border-b border-gray-100 p-6 sm:p-8 lg:p-10">
                <span className="text-lg font-medium text-black">
                  Alcance que cresce com o tempo
                </span>
                <p className="max-w-sm text-base text-gray-500">
                  Seus posts deixam de depender da sorte e começam a ganhar
                  tração contínua.
                </p>
              </div>
            </li>
          </ul>

          <ul className="flex w-full flex-col sm:flex-row">
            <li className="w-full">
              <div className="flex w-full flex-col gap-2 border-b border-gray-100 p-6 sm:border-r sm:border-b-0 sm:p-8 lg:p-10">
                <span className="text-lg font-medium text-black">
                  Engajamento real nos seus posts
                </span>
                <p className="max-w-xs text-base text-gray-500">
                  Mais curtidas, comentários e conversas com as pessoas certas.
                </p>
              </div>
            </li>

            <li className="w-full">
              <div className="flex w-full flex-col gap-2 p-6 sm:p-8 lg:p-10">
                <span className="text-lg font-medium text-black">
                  Oportunidades chegam até você
                </span>
                <p className="max-w-sm text-base text-gray-500">
                  Convites, propostas e conexões começam a surgir sem você
                  precisar ir atrás.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
