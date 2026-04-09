import { motion } from "framer-motion";
import { fadeInUp, transition } from "../../lib/animation";

interface TestimonialCardProps {
  logo: string;
  logoAlt: string;
  text: string;
  avatar: string;
  avatarAlt: string;
  name: string;
  role: string;
  className?: string;
  delay?: number;
}

export const TestimonialCard = ({
  logo,
  logoAlt,
  text,
  avatar,
  avatarAlt,
  name,
  role,
  className = "",
  delay = 0,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      transition={{ ...transition, delay }}
      whileHover={{ y: -2 }}
      className={`flex w-full flex-col justify-between gap-6 p-6 sm:p-8 lg:p-10 ${className}`}
    >
      <div className="flex flex-col gap-1.5">
        <img
          src={logo}
          alt={logoAlt}
          loading="lazy"
          decoding="async"
          className="h-15 w-30"
        />
        <p className="text-base leading-normal text-black">{text}</p>
      </div>

      <div className="flex items-center gap-2">
        <img
          src={avatar}
          alt={avatarAlt}
          loading="lazy"
          decoding="async"
          width={40}
          height={40}
          className="size-10 rounded-full border border-gray-100 object-cover"
        />
        <div className="flex w-full flex-col">
          <p className="text-base leading-none font-medium text-black">
            {name}
          </p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};
