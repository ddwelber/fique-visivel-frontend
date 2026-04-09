import { motion } from "framer-motion";
import { Cta } from "../../../../components/cta";
import { Container } from "../../../../layouts/container";
import { fadeInUp, transition } from "../../../../lib/animation";
import { trackEvent } from "../../../../lib/analytics";

export const CallToAction = () => {
  return (
    <section>
      <Container>
        <div className="flex w-full flex-col items-center justify-between gap-6 border-r border-b border-l border-gray-100 px-6 py-12 sm:px-10 sm:py-16 md:flex-row md:items-end">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={transition}
            className="flex flex-col gap-2"
          >
            <h2 className="text-center text-2xl leading-[1.3] font-medium text-black md:text-start md:text-[2rem]">
              Seu perfil pode trabalhar por você.{" "}
              <br className="hidden sm:block" />
              Só precisa começar.
            </h2>
            <p className="text-center text-sm text-gray-500 md:text-left">
              Vagas limitadas para o beta fechado.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ ...transition, delay: 0.08 }}
            className="flex shrink-0 flex-col items-center gap-2"
          >
            <Cta
              to="/waitlist"
              onClick={() => {
                trackEvent("cta_click", { location: "cta" });
              }}
            >
              Garantir acesso antecipado
            </Cta>
            <span className="text-sm text-gray-500">leva menos de 1 minuto</span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
