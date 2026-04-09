import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../../../../layouts/container";
import { SectionHeader } from "../../../../components/section-header";
import { fadeInUp, transition } from "../../../../lib/animation";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "Os posts vão soar como eu ou vão parecer gerados por robô?",
    answer:
      "A plataforma aprende seu tom, área e experiências reais antes de gerar qualquer conteúdo. Você preenche um onboarding com seu posicionamento, objetivos e forma de se comunicar. O conteúdo parte disso, não de templates genéricos. A maioria dos usuários diz que os posts soam mais naturais do que o que escreviam sozinhos.",
  },
  {
    id: 2,
    question: "Preciso aprovar cada post antes de publicar?",
    answer:
      "Depende do modo que você escolher. No modo automático, a IA cria, aprova e publica os posts por você sem precisar de nenhuma ação da sua parte. Se quiser manter controle total, basta ativar o modo manual: você vê cada post antes de ir ao ar, edita o que quiser e confirma quando estiver pronto. Você define o nível de autonomia que faz sentido pra você.",
  },
  {
    id: 3,
    question: "É seguro conectar meu LinkedIn?",
    answer:
      "Sim. Usamos OAuth2, o protocolo oficial do LinkedIn, o mesmo usado por ferramentas como Notion e HubSpot. Não armazenamos sua senha em nenhum momento. Você pode revogar o acesso diretamente no LinkedIn a qualquer hora.",
  },
  {
    id: 4,
    question: "Funciona para qualquer área profissional?",
    answer:
      "Sim. Já temos profissionais de tecnologia, finanças, marketing, RH, gestão e outras áreas usando a plataforma. O que importa é que você tenha experiência real para compartilhar. A IA adapta o conteúdo ao seu contexto específico.",
  },
  {
    id: 5,
    question: "Quanto vai custar depois do beta?",
    answer:
      "Os planos pós-beta ainda estão sendo definidos. Quem entrar agora garante o preço de fundador, o menor preço que vamos oferecer, congelado enquanto você for cliente. Essa condição é exclusiva para quem está na lista de espera.",
  },
];

export const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq">
      <Container>
        <SectionHeader>Dúvidas frequentes</SectionHeader>

        <ul className="flex w-full flex-col border-r border-l border-gray-100">
          {faqItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ ...transition, delay: index * 0.06 }}
              className="border-b border-gray-100 last:border-b-0"
            >
              <button
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left sm:p-8 lg:p-10"
                aria-expanded={openId === item.id}
              >
                <span className="text-base font-medium text-black sm:text-lg">
                  {item.question}
                </span>
                <motion.span
                  className="shrink-0 text-gray-500"
                  animate={{ rotate: openId === item.id ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {openId === item.id ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openId === item.id && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-base leading-[1.6] text-gray-500 sm:px-8 sm:pb-8 lg:px-10 lg:pb-10">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
