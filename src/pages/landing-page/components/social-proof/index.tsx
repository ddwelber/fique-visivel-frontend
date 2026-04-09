import { motion } from "framer-motion";
import { Container } from "../../../../layouts/container";
import { fadeInUp, transition, viewport } from "../../../../lib/animation";

import bradesco from "../../../../assets/logos/bradesco.svg";
import santander from "../../../../assets/logos/santander.svg";
import btg from "../../../../assets/logos/btg.svg";

interface StatProps {
  value: string;
  label: string;
}

const stats: StatProps[] = [
  { value: "+1.400", label: "profissionais na lista de espera" },
  { value: "+9.200", label: "posts gerados na plataforma" },
  { value: "3x", label: "mais engajamento em média" },
];

const logos = [
  { src: bradesco, alt: "Bradesco" },
  { src: santander, alt: "Santander" },
  { src: btg, alt: "BTG Pactual" },
];

export const SocialProof = () => {
  return (
    <section>
      <Container>
        <div className="flex w-full flex-col border-r border-l border-gray-100 sm:flex-row">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeInUp}
              transition={{ ...transition, delay: index * 0.08 }}
              className="flex w-full flex-col items-center justify-center gap-1 border-b border-gray-100 p-6 text-center sm:border-b-0 sm:border-r sm:p-8 last:sm:border-r-0"
            >
              <span className="text-3xl font-medium text-black">
                {stat.value}
              </span>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
          transition={{ ...transition, delay: 0.2 }}
          className="flex flex-col items-center justify-between gap-6 border-t border-r border-l border-gray-100 p-6 sm:flex-row sm:p-8"
        >
          <p className="text-center text-sm text-gray-500 sm:text-left">
            Profissionais de grandes empresas já estão construindo autoridade
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-6 sm:flex-nowrap sm:gap-10">
            {logos.map((logo) => (
              <li key={logo.alt}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
};
