import { motion } from "framer-motion";
import { Container } from "../../../../layouts/container";
import { SectionHeader } from "../../../../components/section-header";
import { Cta } from "../../../../components/cta";
import { fadeInUp, transition, viewport } from "../../../../lib/animation";

import mockup1 from "../../../../assets/how-it-works.svg";
import mobileMockup from "../../../../assets/mobile-mockup.png";

interface HowItWorksItem {
  id: number;
  title: string;
  content: string;
}

const howItWorksList: HowItWorksItem[] = [
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

export const HowItWorks = () => {
  return (
    <section id="how-it-works">
      <Container>
        <SectionHeader>
          Como nossa IA transforma sua experiência{" "}
          <br className="hidden sm:block" /> em presença estratégica no
          LinkedIn?
        </SectionHeader>

        <div className="flex w-full flex-col border-r border-gray-100 lg:flex-row">
          <div className="w-full lg:max-w-90">
            <ul className="flex w-full flex-col border-r border-l border-gray-100 lg:max-w-90">
              {howItWorksList.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={fadeInUp}
                  transition={{ ...transition, delay: index * 0.08 }}
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
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Mockup desktop */}
          <div className="relative hidden w-full overflow-hidden border-t border-gray-100 md:block lg:border-t-0">
            <motion.img
              src={mockup1}
              alt="Interface da plataforma"
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ ...transition, delay: 0.15 }}
              className="relative w-full scale-150 object-cover md:scale-100 lg:absolute lg:right-0 lg:bottom-0 xl:top-2"
            />
          </div>

          {/* Mockup mobile */}
          <div className="flex h-80 w-full flex-col items-start justify-end overflow-hidden border-t border-gray-100 sm:h-100 md:hidden lg:border-t-0">
            <img
              src={mobileMockup}
              alt="Interface da plataforma"
              loading="lazy"
              decoding="async"
              className="relative right-15 bottom-0 w-full scale-150 object-cover sm:scale-100 lg:absolute lg:right-0 lg:bottom-0 xl:top-2"
            />
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
          transition={transition}
          className="font-regular flex max-h-full w-full items-center justify-center border-t border-r border-l border-gray-100 px-4 py-8 text-center text-base text-gray-500 md:px-0"
        >
          <p>Sem precisar ter ideias, escrever posts ou lembrar de publicar.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
          transition={{ ...transition, delay: 0.06 }}
          className="flex flex-col items-center gap-2 pb-6"
        >
          <Cta to="/waitlist">Garantir minha vaga no beta</Cta>
        </motion.div>
      </Container>
    </section>
  );
};
