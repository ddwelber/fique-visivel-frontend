import { motion } from "framer-motion";
import { Cta } from "../../../../components/cta";
import { Container } from "../../../../layouts/container";
import { SectionHeader } from "../../../../components/section-header";
import { GridCard } from "../../../../components/grid-card";
import { fadeInUp, transition, viewport } from "../../../../lib/animation";
import { trackEvent } from "../../../../lib/analytics";

interface EarlyAccessItem {
  title: string;
  description: string;
}

const items: EarlyAccessItem[] = [
  {
    title: "Preço de fundador",
    description:
      "O menor preço que vamos oferecer, congelado enquanto você for cliente. Quem entrar depois vai pagar mais.",
  },
  {
    title: "Onboarding personalizado",
    description:
      "Configuração 1:1 do seu perfil, nicho e tom de voz para o conteúdo soar exatamente como você.",
  },
  {
    title: "Acesso a todas as funcionalidades",
    description:
      "Você testa tudo que lançarmos durante o beta, incluindo features que ainda não estão disponíveis ao público.",
  },
  {
    title: "Comunidade de early adopters",
    description:
      "Grupo fechado com profissionais que também estão construindo autoridade no LinkedIn. Troca real, sem ruído de feed.",
  },
];

export const EarlyAccess = () => {
  return (
    <section id="early-access">
      <Container>
        <SectionHeader
          description="Quem entrar agora garante condições que não estarão disponíveis no lançamento."
        >
          O que você garante ao entrar agora
        </SectionHeader>

        <div className="grid w-full grid-cols-1 border-r border-l border-gray-100 sm:grid-cols-2">
          {items.map((item, index) => (
            <GridCard
              key={index}
              title={item.title}
              description={item.description}
              index={index}
              total={items.length}
            />
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
          transition={{ ...transition, delay: 0.15 }}
          className="flex flex-col items-center gap-2 border-t border-r border-l border-gray-100 px-6 py-8 sm:px-10"
        >
          <Cta
            to="/waitlist"
            onClick={() => {
              trackEvent("cta_click", { location: "early_access" });
            }}
          >
            Garantir minha vaga no beta
          </Cta>
          <span className="text-sm text-gray-500">
            Vagas limitadas · leva menos de 1 minuto
          </span>
        </motion.div>
      </Container>
    </section>
  );
};
