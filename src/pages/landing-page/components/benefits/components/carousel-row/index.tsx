import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { MessageCard } from "../message-card";
import { messages } from "../../utils/messages";

export const CarouselRow = ({ direction = "left" }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth / 2);
    }
  }, []);

  const shuffle = (arr: any[]) => [...arr].sort(() => Math.random() - 0.5);

  const duplicated = [...messages, ...shuffle(messages)];

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        ref={ref}
        className="flex gap-2"
        animate={{
          x: direction === "left" ? [0, -width] : [-width, 0],
        }}
        transition={{
          duration: 300,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicated.map((item, i) => (
          <MessageCard key={i} item={item} />
        ))}
      </motion.div>
    </div>
  );
};
