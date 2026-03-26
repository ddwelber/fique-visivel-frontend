import { Container } from "../../../../layouts/container";

import mockup1 from "../../../../assets/how-it-works.svg";
import mobileMockup from "../../../../assets/mobile-mockup.png";

interface HowItWorksListProps {
  id: number;
  title: string;
  content: string;
}

export const HowItWorks = () => {
  const howItWorksList: HowItWorksListProps[] = [
    {
      id: 1,
      title: "Conte o que você sabe",
      content:
        "Descreva sua experiência, opiniões e aprendizados. A IA entende seu contexto.",
    },
    {
      id: 2,
      title: "Receba posts prontos",
      content:
        "Criamos conteúdos estruturados, com gancho e narrativa, prontos para publicar.",
    },
    {
      id: 3,
      title: "Publicamos por você",
      content:
        "Aprove e deixe o resto com a gente. Seus posts saem automaticamente.",
    },
  ];

  return (
    <section id="how-it-works">
      <Container>
        <div className="flex w-full items-center justify-center border-r border-b border-l border-gray-100 px-4 py-12 text-center sm:py-16 md:px-0">
          <h2 className="text-2xl leading-[1.3] font-medium text-black md:text-[2rem]">
            Como nossa IA transforma sua experiência{" "}
            <br className="hidden sm:block" /> em presença estratégica no
            LinkedIn?
          </h2>
        </div>

        <div className="flex w-full flex-col border-r border-gray-100 lg:flex-row">
          <div className="w-full lg:max-w-90">
            <ul className="flex w-full flex-col border-r border-l border-gray-100 lg:max-w-90">
              {howItWorksList.map((item) => {
                return (
                  <li
                    key={item.id + item.title}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex h-full w-full flex-col items-start gap-2 p-6 text-left sm:p-8 lg:p-10">
                      <span className="text-lg font-medium text-black">
                        {item.title}
                      </span>
                      <p className="text-base leading-[1.4] text-gray-500">
                        {item.content}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative hidden w-full overflow-hidden border-t border-gray-100 md:block lg:border-t-0">
            <img
              src={mockup1}
              className="relative w-full scale-150 object-cover md:scale-100 lg:absolute lg:right-0 lg:bottom-0 xl:top-2"
            />
          </div>

          <div className="flex h-80 w-full flex-col items-start justify-end overflow-hidden border-t border-gray-100 sm:h-100 md:hidden lg:border-t-0">
            <img
              src={mobileMockup}
              className="relative bottom-0 w-full right-15 scale-150 object-cover sm:scale-100 lg:absolute lg:right-0 lg:bottom-0 xl:top-2"
            />
          </div>
        </div>

        <div className="font-regular flex max-h-full w-full items-center justify-center border-t border-r border-l border-gray-100 px-4 py-8 text-center text-base text-gray-500 md:px-0">
          <p>Sem precisar ter ideias, escrever posts ou lembrar de publicar.</p>
        </div>
      </Container>
    </section>
  );
};
