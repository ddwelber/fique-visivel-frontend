import { Container } from "../../../../layouts/container";
import { SectionHeader } from "../../../../components/section-header";
import { GridCard } from "../../../../components/grid-card";
import { InfiniteMessages } from "./components/infinite-messages";

interface BenefitItem {
  title: string;
  description: string;
}

const benefitItems: BenefitItem[] = [
  {
    title: "Você vira referência na sua área",
    description:
      "Cada post reflete o que você sabe de verdade. Com o tempo, as pessoas certas passam a te ver como referência e o algoritmo começa a te distribuir para quem importa.",
  },
  {
    title: "Presença constante sem esforço nenhum",
    description:
      "Conteúdo criado e publicado automaticamente. Sem bloco criativo, sem procrastinação, sem precisar lembrar de postar. Você aparece toda semana enquanto faz o seu trabalho.",
  },
  {
    title: "Mais alcance, menos dependência de sorte",
    description:
      "Posts com estrutura estratégica performam melhor no algoritmo. Seu alcance cresce de forma previsível, não por acidente ou por ter postado no horário certo.",
  },
  {
    title: "Recrutadores chegam até você",
    description:
      "Com presença consistente e autoridade construída, propostas e convites começam a aparecer. Você para de mandar currículo e começa a receber mensagens.",
  },
];

export const Benefits = () => {
  return (
    <section id="benefits">
      <Container>
        <SectionHeader>
          O que muda quando você começa{" "}
          <br className="hidden sm:block" />a postar com estratégia
        </SectionHeader>

        <div className="grid w-full grid-cols-1 border-r border-l border-gray-100 sm:grid-cols-2">
          {benefitItems.map((item, index) => (
            <GridCard
              key={index}
              title={item.title}
              description={item.description}
              index={index}
              total={benefitItems.length}
            />
          ))}
        </div>

        <div className="w-full">
          <InfiniteMessages />
        </div>
      </Container>
    </section>
  );
};
