import { Container } from "../../../../layouts/container";
import { SectionHeader } from "../../../../components/section-header";
import { TestimonialCard } from "../../../../components/testimonial-card";

import btgPactual from "../../../../assets/logos/btg.svg";
import bradesco from "../../../../assets/logos/bradesco.svg";
import santander from "../../../../assets/logos/santander.svg";

import lucas from "../../../../assets/testimonials/product-owner.png";
import leonardo from "../../../../assets/testimonials/leonardo.jpg";
import camila from "../../../../assets/testimonials/head-marketing.png";

const testimonials = [
  {
    logo: btgPactual,
    logoAlt: "Banco BTG Pactual",
    text: "Nunca sabia por onde começar, então quase nunca postava. Com a plataforma, transformar o que vivi no trabalho em conteúdo ficou natural. Já recebi contato de recrutadores sem precisar ir atrás de ninguém.",
    avatar: lucas,
    avatarAlt: "Lucas Andrade",
    name: "Lucas Andrade",
    role: "Product Manager · BTG Pactual",
    className:
      "border-b border-gray-100 sm:border-r lg:border-b-0",
    delay: 0,
  },
  {
    logo: bradesco,
    logoAlt: "Banco Bradesco",
    text: "Sempre tive dificuldade de estruturar bem minhas ideias. Hoje meus posts têm clareza, posicionamento e engajamento real. Meu perfil voltou a ser visto pelas pessoas certas.",
    avatar: leonardo,
    avatarAlt: "Leonardo Macedo",
    name: "Leonardo Macedo",
    role: "Engenheiro de Software · Bradesco",
    className:
      "border-b border-gray-100 lg:border-r lg:border-b-0",
    delay: 0.08,
  },
  {
    logo: santander,
    logoAlt: "Banco Santander",
    text: "Em minutos uma ideia simples vira um post claro e com estrutura. Economizo horas por semana que eu gastava tentando escrever, e o engajamento dos meus conteúdos cresceu muito.",
    avatar: camila,
    avatarAlt: "Carolina Freitas",
    name: "Carolina Freitas",
    role: "Head de Marketing · Santander",
    className: "md:border-r md:border-gray-100 lg:border-none",
    delay: 0.16,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <Container>
        <SectionHeader>
          Quem já usa, o que está falando
        </SectionHeader>

        <div className="grid w-full grid-cols-1 border-r border-l border-gray-100 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.name}
              logo={t.logo}
              logoAlt={t.logoAlt}
              text={t.text}
              avatar={t.avatar}
              avatarAlt={t.avatarAlt}
              name={t.name}
              role={t.role}
              className={t.className}
              delay={t.delay}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
