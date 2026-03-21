import { Container } from "../../../../layouts/container";
import { ReachChart } from "./components/bars-chart";
import { SSIGauge } from "./components/ssi-circle";

import { useRef } from "react";

export const Difference = () => {
  const ref = useRef(null);

  return (
    <section ref={ref}>
      <Container>
        <div className="title flex w-full items-center justify-center border-r border-b border-l border-gray-100 py-16 text-center">
          <h2 className="text-[2rem] leading-[1.3] font-medium text-black">
            A diferença entre postar qualquer <br /> coisa e postar
            estrategicamente
          </h2>
        </div>
        <div className="grid grid-cols-2 border-x border-b border-gray-100">
          <div className="flex flex-col items-center justify-end border-r border-gray-100">
            <SSIGauge />
          </div>
          <div className="flex flex-col items-end justify-end border-r border-gray-100">
            <ReachChart />
          </div>
        </div>
        <div className="flex max-h-full w-full flex-col border-r border-l border-gray-100">
          <ul className="flex w-full items-start">
            <li className="w-full">
              <div className="flex max-h-full w-full flex-col gap-2 border-r border-b border-gray-100 p-10">
                <span className="text-lg font-medium text-black">
                  Seu SSI em crescimento
                </span>
                <p className="font-regular max-w-sm text-base text-gray-500">
                  Sua presença evolui de forma consistente e passa a ser
                  reconhecida pelo algoritmo.
                </p>
              </div>
            </li>
            <li className="w-full">
              <div className="flex max-h-full w-full flex-col gap-2 border-b border-gray-100 p-10">
                <span className="text-lg font-medium text-black">
                  Alcance que cresce com o tempo
                </span>
                <p className="font-regular max-w-sm text-base text-gray-500">
                  Seus posts deixam de depender da sorte e começam a ganhar
                  tração contínua.
                </p>
              </div>
            </li>
          </ul>
          <ul className="flex w-full items-start">
            <li className="w-full">
              <div className="flex max-h-full w-full flex-col gap-2 border-r border-gray-100 p-10">
                <span className="text-lg font-medium text-black">
                  Engajamento real nos seus posts
                </span>
                <p className="font-regular max-w-xs text-base text-gray-500">
                  Mais curtidas, comentários e conversas com as pessoas certas.
                </p>
              </div>
            </li>
            <li className="w-full">
              <div className="flex max-h-full w-full flex-col gap-2 p-10">
                <span className="text-lg font-medium text-black">
                  Oportunidades chegam até você
                </span>
                <p className="font-regular max-w-sm text-base text-gray-500">
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
