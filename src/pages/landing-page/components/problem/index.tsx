import { motion } from "framer-motion";
import { Cta } from "../../../../components/cta";
import { SectionHeader } from "../../../../components/section-header";
import { Container } from "../../../../layouts/container";
import { fadeInUp, transition, viewport } from "../../../../lib/animation";

const problems = [
  "Você sabe muito, mas posta pouco",
  "Quando posta, não tem consistência",
  "Você posta sem estratégia",
  "Perfil não reflete sua senioridade",
];

export const Problem = () => {
  return (
    <section>
      <Container>
        <SectionHeader>
          Você é bom no que faz. <br /> Mas ninguém sabe disso.
        </SectionHeader>

        <div className="max-h-full w-full border-r border-l border-gray-100">
          <div className="mx-auto grid w-full grid-cols-2 px-4 py-6 text-base leading-[1.3] text-gray-500 sm:py-10 md:w-1/2 md:px-0">
            {problems.map((text, index) => {
              const isTop = index < 2;
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={fadeInUp}
                  transition={{ ...transition, delay: index * 0.07 }}
                  className={[
                    "flex h-28 w-full items-center justify-center p-2 text-center",
                    isTop ? "border-b border-gray-100" : "",
                    isLeft ? "border-r border-gray-100" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <p>{text}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInUp}
            transition={{ ...transition, delay: 0.1 }}
            className="border-t border-gray-100 px-4 py-6 text-center sm:py-8 md:px-0"
          >
            <p className="mx-auto max-w-lg text-base leading-[1.6] text-gray-500">
              Enquanto você não aparece, alguém com menos experiência está sendo
              contratado, chamado para palestrar, sendo seguido. Só porque
              aparece. Visibilidade no LinkedIn não é opcional para quem quer
              crescer.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInUp}
            transition={{ ...transition, delay: 0.15 }}
            className="flex flex-col items-center gap-2 pb-6"
          >
            <Cta to="/waitlist">Quero mudar isso</Cta>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
