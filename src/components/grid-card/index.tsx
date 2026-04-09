import { motion } from "framer-motion";
import { fadeInUp, transition, viewport } from "../../lib/animation";

interface GridCardProps {
  title: string;
  description: string;
  index: number;
  total: number;
}

export const GridCard = ({
  title,
  description,
  index,
  total,
}: GridCardProps) => {
  const isLastRow = index >= total - 2;
  const isLeftColumn = index % 2 === 0;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeInUp}
      transition={{ ...transition, delay: index * 0.07 }}
      whileHover={{ y: -2 }}
      className={[
        "flex w-full flex-col gap-2 p-6 sm:p-8 lg:p-10",
        !isLastRow ? "border-b border-gray-100" : "",
        isLeftColumn ? "sm:border-r sm:border-gray-100" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="text-lg font-medium text-black">{title}</span>
      <p className="max-w-sm text-base text-gray-500">{description}</p>
    </motion.div>
  );
};
