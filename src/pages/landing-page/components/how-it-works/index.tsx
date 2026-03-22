import { Container } from "../../../../layouts/container";

import mockup1 from "../../../../assets/how-it-works.svg";

interface HowItWorksListProps {
  id: number;
  title: string;
  content: string;
}

export const HowItWorks = () => {
  const howItWorksList: HowItWorksListProps[] = [
    {
      id: 1,
      title: "Definimos seu posicionamento",
      content: "Trasnformamos experiência técnica em direção profissional.",
    },
    {
      id: 2,
      title: "Estruturamos sua linha editorial",
      content: "Construímos uma narrativa que fortalece sua autoridade.",
    },
    {
      id: 3,
      title: "Consistência estratégica",
      content: "Mantemos presença ativa sem depender de motivação.",
    },
  ];

  return (
    <section id="how-it-works">
      <Container>
        <div className="flex w-full items-center justify-center border-r border-b border-l border-gray-100 px-4 py-12 text-center sm:py-16 md:px-0">
          <h2 className="text-2xl leading-[1.3] font-medium text-black md:text-[2rem]">
            Como transformamos sua experiência{" "}
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

          <div className="relative w-full overflow-hidden border-t border-gray-100 lg:border-t-0">
            <img
              src={mockup1}
              className="relative w-full object-cover lg:absolute lg:right-0 lg:bottom-0 xl:top-2"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
