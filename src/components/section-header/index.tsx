import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeInUp, transition } from "../../lib/animation";

interface SectionHeaderProps {
  children: ReactNode;
  description?: ReactNode;
}

export const SectionHeader = ({
  children,
  description,
}: SectionHeaderProps) => {
  return (
    <div
      className={`flex w-full items-center border-r border-b border-l border-gray-100 px-4 py-12 text-center sm:py-16 md:px-0 ${
        description ? "flex-col justify-center gap-3" : "justify-center"
      }`}
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={transition}
        className="text-2xl leading-[1.3] font-medium text-black md:text-[2rem]"
      >
        {children}
      </motion.h2>

      {description && (
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ ...transition, delay: 0.06 }}
          className="max-w-lg text-base leading-[1.4] text-gray-500"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
