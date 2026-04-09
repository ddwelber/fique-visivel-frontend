import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Container } from "../../../../layouts/container";
import { SectionHeader } from "../../../../components/section-header";
import { fadeInUp, transition, viewport } from "../../../../lib/animation";

import leonardo from "../../../../assets/testimonials/leonardo.jpg";
import { Actions } from "./components/actions";

export const HowItWorksInPractice = () => {
  return (
    <section>
      <Container>
        <SectionHeader>
          O mesmo profissional. <br className="hidden sm:block" /> Dois
          resultados completamente diferentes.
        </SectionHeader>

        <div className="flex w-full flex-col border-r border-l border-gray-100 lg:flex-row lg:items-stretch lg:gap-4">
          {/* Post: antes */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInUp}
            transition={transition}
            className="flex w-full flex-col justify-center gap-4 border-gray-100 p-4 lg:border-r lg:p-10"
          >
            <p className="text-sm text-gray-500">Sem a plataforma</p>

            <div className="flex w-full flex-col gap-4 rounded-md border border-gray-100 p-4 opacity-85">
              <div className="flex items-center gap-2">
                <img
                  src={leonardo}
                  alt="Leonardo Macedo"
                  loading="lazy"
                  decoding="async"
                  width={40}
                  height={40}
                  className="size-10 rounded-full border border-gray-100 object-cover grayscale"
                />
                <div className="flex w-full flex-col">
                  <p className="text-base leading-none font-medium text-black">
                    Leonardo Macedo
                  </p>
                  <p className="text-sm text-gray-500">Engenheiro de Software</p>
                </div>
              </div>

              <p className="text-base text-gray-500">
                Recentemente trabalhei com o time de vendas em um projeto para
                melhorar a integração com marketing.
              </p>
              <p className="text-base text-gray-500">
                A ideia era alinhar melhor os processos e melhorar a comunicação
                entre as áreas.
              </p>
              <p className="text-base text-gray-500">
                No final, melhoramos a troca de informações entre os times e
                deixamos alguns processos mais organizados.
              </p>

              <hr className="border-gray-100" />
              <Actions />
            </div>
          </motion.div>

          {/* Seta direcional */}
          <div className="flex w-full items-center justify-center py-4 lg:w-auto lg:py-0">
            <MoveRight className="rotate-90 text-gray-500 lg:rotate-0" size={20} />
          </div>

          {/* Post: depois */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInUp}
            transition={{ ...transition, delay: 0.1 }}
            className="flex w-full flex-col justify-center gap-4 border-gray-100 p-4 lg:border-l lg:p-10"
          >
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-black px-2 py-1 text-xs font-medium text-white">
                Com a plataforma
              </span>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex w-full flex-col gap-6 rounded-md border border-black p-4"
            >
              <div className="flex items-center gap-2">
                <img
                  src={leonardo}
                  alt="Leonardo Macedo"
                  loading="lazy"
                  decoding="async"
                  width={40}
                  height={40}
                  className="size-10 rounded-full border border-gray-100 object-cover"
                />
                <div className="flex w-full flex-col">
                  <p className="text-base leading-none font-medium text-black">
                    Leonardo Macedo
                  </p>
                  <p className="text-sm text-gray-500">Engenheiro de Software</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-base">
                <p>
                  <b>
                    Liderei uma iniciativa de integração entre marketing e
                    vendas
                  </b>
                  , e isso mudou completamente como geramos oportunidades.
                </p>
                <p>No começo, o cenário era comum:</p>
                <p>
                  → times desalinhados <br />
                  → processos pouco claros <br />→ muita informação se perdendo
                  no caminho
                </p>
                <p>
                  A virada veio quando paramos de focar só em "comunicação" e
                  começamos a tratar isso como processo.
                </p>
                <p>
                  <b>1 aprendizado que fez diferença:</b>
                </p>
                <p>Sem processo claro, cada lead vira um caso isolado.</p>
              </div>

              <hr className="border-gray-100" />
              <Actions type="rich" />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
