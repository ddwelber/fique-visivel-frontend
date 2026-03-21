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
        <div className="title flex w-full items-center justify-center border-r border-b border-l border-gray-100 py-16 text-center">
          <h2 className="text-[2rem] leading-[1.3] font-medium text-black">
            Como transformamos sua experiência <br /> em presença estratégica no
            LinkedIn?
          </h2>
        </div>
        <div className="flex w-full items-stretch border-r border-gray-100">
          <div className="left w-full max-w-90">
            <ul className="flex w-full max-w-90 flex-col border-r border-l border-gray-100">
              {howItWorksList.map((item) => {
                return (
                  <li
                    key={item.id + item.title}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex h-full w-full flex-col items-start gap-2 p-10 text-left">
                      <span className="text-lg font-medium text-black">
                        {item.title}
                      </span>
                      <p className="font-regular text-base leading-[1.3] text-gray-500">
                        {item.content}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="right relative w-full overflow-hidden">
            <img
              src={mockup1}
              className="absolute right-0 bottom-0 w-full xl:top-2"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
